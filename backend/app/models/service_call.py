from sqlalchemy import Column, String, DateTime
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base
import uuid
import datetime

class ServiceCall(Base):
    __tablename__ = "service_calls"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    table_id = Column(String, nullable=False)
    service_type = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
