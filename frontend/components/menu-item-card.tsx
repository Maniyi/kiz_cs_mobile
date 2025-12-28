"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import type { MenuItem } from "@/lib/menu-data"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { sendOrder } from "@/lib/api"

interface MenuItemCardProps {
  item: MenuItem
  tableId: string
  sessionId: string
}

export function MenuItemCard({ item, tableId, sessionId }: MenuItemCardProps) {
  const [showConfirm, setShowConfirm] = useState(false)
  const { toast } = useToast()

  const handleCardClick = () => {
    setShowConfirm(true)
  }

  const handleConfirmOrder = async () => {
    // Send order to mock API
    await sendOrder({
      tableId,
      sessionId,
      itemId: item.id,
      itemName: item.name,
      price: item.price,
    })

    toast({
      title: "Order sent! 🍸",
      description: `${item.name} is being prepared`,
      duration: 3000,
    })

    setShowConfirm(false)
  }

  return (
    <>
      <Card
        className="p-5 cursor-pointer hover:bg-card/80 transition-colors border-border/50 hover:border-primary/40"
        onClick={handleCardClick}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <h3 className="text-lg font-medium text-foreground leading-tight">{item.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-lg font-semibold text-primary">${item.price}</span>
          </div>
        </div>
      </Card>

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent className="bg-card border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-foreground">Confirm Order</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              Add <span className="font-medium text-foreground">{item.name}</span> to your order for Table {tableId}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-border">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmOrder}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Confirm Order
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
