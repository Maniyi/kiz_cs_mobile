
from typing import Dict, List, Any

class MockDB:
    def __init__(self):
        # In-memory storage
        # Orders: {order_id: {data}}
        self.orders: Dict[str, Any] = {}
        # Service calls: [{data}, ...]
        self.service_calls: List[Dict[str, Any]] = []

    async def add_order(self, order_id: str, order_data: Dict[str, Any]) -> Dict[str, Any]:
        """Simulate async DB insert for order"""
        self.orders[order_id] = order_data
        return order_data

    async def add_service_call(self, service_data: Dict[str, Any]) -> Dict[str, Any]:
        """Simulate async DB insert for service call"""
        self.service_calls.append(service_data)
        return service_data

# Global instance
db = MockDB()
