
# Kiss & Shhhh Backend

FastAPI backend for the Kiss & Shhhh lounge ordering system.
Designed for high performance, standard compliance, and extensibility.

## Requirements

- Python 3.11+
- pip

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running Locally

Start the server with hot reload:

```bash
uvicorn app.main:app --reload
```

Server will be running at `http://127.0.0.1:8000`.

## API Documentation

- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## Example Usage

### 1. Place an Order

```bash
curl -X POST "http://127.0.0.1:8000/orders" \
     -H "Content-Type: application/json" \
     -d '{
           "tableId": "T12",
           "sessionId": "abc123",
           "itemId": "drink_01",
           "itemName": "Old Fashioned",
           "price": 25
         }'
```

**Response:**
```json
{
  "status": "success",
  "message": "Order received",
  "data": {
    "tableId": "T12",
    "sessionId": "abc123",
    "itemId": "drink_01",
    "itemName": "Old Fashioned",
    "price": 25.0,
    "orderId": "uuid-string"
  }
}
```

### 2. Service Call

```bash
curl -X POST "http://127.0.0.1:8000/service" \
     -H "Content-Type: application/json" \
     -d '{
           "tableId": "T12",
           "serviceType": "waiter"
         }'
```

**Response:**
```json
{
  "status": "success",
  "message": "Service dispatched",
  "data": {
    "tableId": "T12",
    "serviceType": "waiter",
    "callId": "uuid-string"
  }
}
```

## Project Structure

- `app/api`: API route handlers
- `app/core`: Configuration
- `app/db`: Mock database implementation
- `app/schemas`: Pydantic data models
- `app/services`: Business logic layer
