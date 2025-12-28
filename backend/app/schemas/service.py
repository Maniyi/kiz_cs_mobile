
from enum import Enum
from pydantic import BaseModel, Field

class ServiceType(str, Enum):
    waiter = "waiter"
    hookah = "hookah"
    bill = "bill"

class ServiceCallBase(BaseModel):
    tableId: str = Field(..., description="Table identifier")
    serviceType: ServiceType = Field(..., description="Type of service requested")

class ServiceCallCreate(ServiceCallBase):
    pass

class ServiceCallData(ServiceCallBase):
    callId: str

class ServiceCallResponse(BaseModel):
    status: str
    message: str
    data: ServiceCallData
