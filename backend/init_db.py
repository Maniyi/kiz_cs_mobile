import asyncio
from app.db.base import Base
from app.db.session import engine
from app.models import Order, ServiceCall # noqa: F401

async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    print("Tables created successfully.")

if __name__ == "__main__":
    asyncio.run(init_models())
