
from typing import List
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Kiss & Shhhh Backend"
    API_V1_STR: str = "/api/v1"
    # CORS Origins - allow all for MVP, restrict in prod (to "https://kissandshhhh.com")
    BACKEND_CORS_ORIGINS: List[str] = ["*"]

    class Config:
        case_sensitive = True

settings = Settings()
