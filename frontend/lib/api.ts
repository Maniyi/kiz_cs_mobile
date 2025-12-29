"use client"

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

// Ensure the environment variable is defined
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

if (!API_BASE_URL) {
  console.warn("NEXT_PUBLIC_API_BASE_URL is not defined used default: http://localhost:8000")
}

const BASE_URL = API_BASE_URL || "http://localhost:8000"

export async function sendOrder(data: OrderData): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `Order failed: ${response.statusText}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Error sending order:", error)
    throw error
  }
}

export async function callService(data: ServiceCallData): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `Service call failed: ${response.statusText}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Error calling service:", error)
    throw error
  }
}
