"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { LoungeHeader } from "@/components/lounge-header"
import { MenuTabs } from "@/components/menu-tabs"
import { ActionBar } from "@/components/action-bar"

export default function LoungePage() {
  const searchParams = useSearchParams()
  const [tableId, setTableId] = useState<string>("7")
  const [sessionId, setSessionId] = useState<string>("")

  useEffect(() => {
    // Get table_id from URL params
    const urlTableId = searchParams.get("table_id")
    if (urlTableId) {
      setTableId(urlTableId)
    }

    // Generate or retrieve session_id from localStorage
    let storedSessionId = localStorage.getItem("lounge_session_id")
    if (!storedSessionId) {
      storedSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem("lounge_session_id", storedSessionId)
    }
    setSessionId(storedSessionId)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <LoungeHeader tableId={tableId} />
      <MenuTabs tableId={tableId} sessionId={sessionId} />
      <ActionBar tableId={tableId} />
    </div>
  )
}
