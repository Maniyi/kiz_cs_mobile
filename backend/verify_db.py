import asyncio
import uuid
from app.db.session import AsyncSessionLocal
from app.repositories.order_repository import OrderRepository
from app.repositories.service_call_repository import ServiceCallRepository
from app.models.order import Order
from app.models.service_call import ServiceCall, ServiceType
from sqlalchemy import select

async def verify_order_persistence():
    print("Verifying Order Persistence...")
    async with AsyncSessionLocal() as session:
        repo = OrderRepository(session)
        order_id = uuid.uuid4()
        new_order = Order(
            id=order_id,
            table_id="T1",
            session_id="S1",
            item_id="item-123",
            item_name="Verification Drink",
            price=15.0
        )
        await repo.create(new_order)
        
        # Verify
        result = await session.execute(select(Order).where(Order.id == order_id))
        fetched = result.scalar_one_or_none()
        assert fetched is not None
        assert fetched.item_name == "Verification Drink"
        print("Order Persistence Verified!")

async def verify_service_call_persistence():
    print("Verifying ServiceCall Persistence...")
    async with AsyncSessionLocal() as session:
        repo = ServiceCallRepository(session)
        call_id = uuid.uuid4()
        new_call = ServiceCall(
            id=call_id,
            table_id="T2",
            service_type=ServiceType.WAITER
        )
        await repo.create(new_call)
        
        # Verify
        result = await session.execute(select(ServiceCall).where(ServiceCall.id == call_id))
        fetched = result.scalar_one_or_none()
        assert fetched is not None
        assert fetched.service_type == ServiceType.WAITER
        print("ServiceCall Persistence Verified!")

async def main():
    try:
        await verify_order_persistence()
        await verify_service_call_persistence()
        print("ALL CHECKS PASSED")
    except Exception as e:
        print(f"VERIFICATION FAILED: {e}")
        raise e

if __name__ == "__main__":
    asyncio.run(main())
