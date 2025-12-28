
from typing import Optional
from pydantic import BaseModel, Field

class OrderBase(BaseModel):
    tableId: str = Field(..., description="Table identifier (e.g., T12)")
    sessionId: str = Field(..., description="Client session ID")
    itemId: str = Field(..., description="Unique ID of the item")
    itemName: str = Field(..., description="Display name of the item")
    price: float = Field(..., gt=0, description="Price of the item")

class OrderCreate(OrderBase):
    pass

class OrderData(OrderBase):
    orderId: str

class OrderResponse(BaseModel):
    status: str
    message: str
    data: OrderData
