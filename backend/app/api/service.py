
from fastapi import APIRouter
from app.schemas.service import ServiceCallCreate, ServiceCallResponse
from app.services.service_call_service import ServiceCallService

router = APIRouter()

@router.post("/service", response_model=ServiceCallResponse)
async def create_service_call(call: ServiceCallCreate):
    """
    Request a service (waiter, hookah, bill) for a table.
    """
    return await ServiceCallService.create_service_call(call)
