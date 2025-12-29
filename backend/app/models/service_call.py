import uuid
import enum
from datetime import datetime
from sqlalchemy import String, DateTime, Enum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func
from app.db.base import Base

class ServiceType(str, enum.Enum):
    WAITER = "waiter"
    BILL = "bill"
    HOOKAH = "hookah"
    OTHER = "other"

class ServiceCall(Base):
    __tablename__ = "service_calls"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    table_id: Mapped[str] = mapped_column(String, index=True, nullable=False)
    service_type: Mapped[ServiceType] = mapped_column(Enum(ServiceType), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
