
from fastapi import APIRouter
from app.schemas.order import OrderCreate, OrderResponse
from app.services.order_service import OrderService

router = APIRouter()

@router.post("/orders", response_model=OrderResponse)
async def create_order(order: OrderCreate):
    """
    Create a new order for a table.
    """
    return await OrderService.create_order(order)
