from sqlalchemy.ext.asyncio import AsyncSession
from app.models.service_call import ServiceCall

class ServiceCallRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def create(self, service_call: ServiceCall) -> ServiceCall:
        self.session.add(service_call)
        await self.session.commit()
        await self.session.refresh(service_call)
        return service_call
