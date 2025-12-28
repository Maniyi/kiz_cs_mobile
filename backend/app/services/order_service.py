
import uuid
import logging
from app.db.memory import db
from app.schemas.order import OrderCreate, OrderResponse, OrderData

logger = logging.getLogger(__name__)

class OrderService:
    @staticmethod
    async def create_order(order_in: OrderCreate) -> OrderResponse:
        # Generate Order ID
        order_id = str(uuid.uuid4())
        
        logger.info(f"Processing order for Table {order_in.tableId}, Item {order_in.itemName}")

        # Store in DB
        order_data_dict = order_in.model_dump()
        order_data_dict["orderId"] = order_id
        order_data_dict["created_at"] = "now"
        
        await db.add_order(order_id, order_data_dict)
        
        return OrderResponse(
            status="success",
            message="Order received",
            data=OrderData(orderId=order_id, **order_in.model_dump())
        )
