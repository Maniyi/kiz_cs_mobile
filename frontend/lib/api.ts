// Mock API handlers for orders and service calls

interface OrderData {
  tableId: string
  sessionId: string
  itemId: string
  itemName: string
  price: number
}

interface ServiceCallData {
  tableId: string
  serviceType: "waiter" | "hookah" | "bill"
}

export async function sendOrder(data: OrderData): Promise<void> {
  // Mock API call - simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  console.log("[v0] Order sent:", {
    ...data,
    timestamp: new Date().toISOString(),
  })

  // In production, this would be a real API call:
  // await fetch('/api/orders', { method: 'POST', body: JSON.stringify(data) })
}

export async function callService(data: ServiceCallData): Promise<void> {
  // Mock API call - simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  console.log("[v0] Service called:", {
    ...data,
    timestamp: new Date().toISOString(),
  })

  // In production, this would be a real API call:
  // await fetch('/api/service', { method: 'POST', body: JSON.stringify(data) })
}
