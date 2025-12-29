from typing import Dict, Any
from sqlalchemy.future import select
from app.db.session import AsyncSessionLocal
from app.models.order import Order
from app.models.service_call import ServiceCall
import uuid

class PostgresDB:
    async def add_order(self, order_id: str, order_data: Dict[str, Any]) -> Dict[str, Any]:
        async with AsyncSessionLocal() as session:
            async with session.begin():
                new_order = Order(
                    id=uuid.UUID(order_id),
                    table_id=order_data["tableId"],
                    session_id=order_data["sessionId"],
                    item_id=order_data["itemId"],
                    item_name=order_data["itemName"],
                    price=order_data["price"]
                )
                session.add(new_order)
            await session.refresh(new_order)
            return order_data

    async def add_service_call(self, service_data: Dict[str, Any]) -> Dict[str, Any]:
        async with AsyncSessionLocal() as session:
            async with session.begin():
                new_call = ServiceCall(
                    id=uuid.UUID(service_data["callId"]),
                    table_id=service_data["tableId"],
                    service_type=service_data["serviceType"]
                )
                session.add(new_call)
            await session.refresh(new_call)
            return service_data

# Global instance
db = PostgresDB()
