
import uuid
import logging
from app.db.memory import db
from app.schemas.service import ServiceCallCreate, ServiceCallResponse, ServiceCallData

logger = logging.getLogger(__name__)

class ServiceCallService:
    @staticmethod
    async def create_service_call(call_in: ServiceCallCreate) -> ServiceCallResponse:
        # Generate Call ID
        call_id = str(uuid.uuid4())
        
        logger.info(f"Service Call: {call_in.serviceType} for Table {call_in.tableId}")
        
        # Store in DB
        call_data_dict = call_in.model_dump()
        call_data_dict["callId"] = call_id
        
        await db.add_service_call(call_data_dict)
        
        return ServiceCallResponse(
            status="success",
            message="Service dispatched",
            data=ServiceCallData(callId=call_id, **call_in.model_dump())
        )
