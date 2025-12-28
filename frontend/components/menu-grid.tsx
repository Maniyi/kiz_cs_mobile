"use client"

import type { MenuItem } from "@/lib/menu-data"
import { MenuItemCard } from "@/components/menu-item-card"

interface MenuGridProps {
  items: MenuItem[]
  tableId: string
  sessionId: string
}

export function MenuGrid({ items, tableId, sessionId }: MenuGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} tableId={tableId} sessionId={sessionId} />
      ))}
    </div>
  )
}
