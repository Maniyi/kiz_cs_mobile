import logging
import uuid
from app.schemas.service import ServiceCallCreate, ServiceCallResponse, ServiceCallData
from app.models.service_call import ServiceCall, ServiceType
from app.repositories.service_call_repository import ServiceCallRepository

logger = logging.getLogger(__name__)

class ServiceCallService:
    def __init__(self, service_repo: ServiceCallRepository):
        self.service_repo = service_repo

    async def create_service_call(self, call_in: ServiceCallCreate) -> ServiceCallResponse:
        logger.info(f"Service Call: {call_in.serviceType} for Table {call_in.tableId}")
        
        # Map string serviceType to Enum if necessary, or let Pydantic handle validation?
        # Assuming Pydantic validates string to match Enum values or we cast it.
        # But ServiceType is an Enum in SQLAlchemy model.
        
        service_call = ServiceCall(
            table_id=call_in.tableId,
            service_type=ServiceType(call_in.serviceType)
        )
        
        created_call = await self.service_repo.create(service_call)
        
        return ServiceCallResponse(
            status="success",
            message="Service dispatched",
            data=ServiceCallData(
                callId=str(created_call.id),
                tableId=created_call.table_id,
                serviceType=created_call.service_type.value,
                timestamp=created_call.created_at.isoformat() if created_call.created_at else None
            )
        )
