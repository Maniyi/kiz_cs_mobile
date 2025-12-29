from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.dependency import get_db
from app.schemas.service import ServiceCallCreate, ServiceCallResponse
from app.services.service_call_service import ServiceCallService
from app.repositories.service_call_repository import ServiceCallRepository

router = APIRouter()

@router.post("/service", response_model=ServiceCallResponse)
async def create_service_call(
    call: ServiceCallCreate,
    db: AsyncSession = Depends(get_db)
):
    """
    Request a service (waiter, hookah, bill) for a table.
    """
    repo = ServiceCallRepository(db)
    service = ServiceCallService(repo)
    return await service.create_service_call(call)
