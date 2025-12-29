import logging
import uuid
from app.schemas.order import OrderCreate, OrderResponse, OrderData
from app.models.order import Order
from app.repositories.order_repository import OrderRepository

logger = logging.getLogger(__name__)

class OrderService:
    def __init__(self, order_repo: OrderRepository):
        self.order_repo = order_repo

    async def create_order(self, order_in: OrderCreate) -> OrderResponse:
        logger.info(f"Processing order for Table {order_in.tableId}, Item {order_in.itemName}")
        
        # Convert Pydantic to SQLAlchemy Model
        order = Order(
            table_id=order_in.tableId,
            session_id=order_in.sessionId,
            item_id=order_in.itemId,
            item_name=order_in.itemName,
            price=order_in.price
        )
        
        created_order = await self.order_repo.create(order)
        
        return OrderResponse(
            status="success",
            message="Order received",
            data=OrderData(
                orderId=str(created_order.id),
                tableId=created_order.table_id,
                sessionId=created_order.session_id,
                itemId=created_order.item_id,
                itemName=created_order.item_name,
                price=created_order.price
            )
        )
