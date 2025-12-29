from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.dependency import get_db
from app.schemas.order import OrderCreate, OrderResponse
from app.services.order_service import OrderService
from app.repositories.order_repository import OrderRepository

router = APIRouter()

@router.post("/orders", response_model=OrderResponse)
async def create_order(
    order: OrderCreate,
    db: AsyncSession = Depends(get_db)
):
    """
    Create a new order for a table.
    """
    repo = OrderRepository(db)
    service = OrderService(repo)
    return await service.create_order(order)
