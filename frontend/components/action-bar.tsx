"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Bell, Flame, Receipt } from "lucide-react"
import { callService } from "@/lib/api"

interface ActionBarProps {
  tableId: string
}

export function ActionBar({ tableId }: ActionBarProps) {
  const { toast } = useToast()

  const handleCallWaiter = async () => {
    await callService({ tableId, serviceType: "waiter" })
    toast({
      title: "Waiter called",
      description: "A waiter will be with you shortly",
      duration: 3000,
    })
  }

  const handleRequestHookah = async () => {
    await callService({ tableId, serviceType: "hookah" })
    toast({
      title: "Hookah requested",
      description: "Your hookah will arrive soon",
      duration: 3000,
    })
  }

  const handleRequestBill = async () => {
    await callService({ tableId, serviceType: "bill" })
    toast({
      title: "Bill requested",
      description: "Your bill will be prepared",
      duration: 3000,
    })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-3 border-border hover:bg-secondary hover:border-primary/40 bg-transparent"
            onClick={handleCallWaiter}
          >
            <Bell className="h-5 w-5" />
            <span className="text-xs">Call Waiter</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-3 border-border hover:bg-secondary hover:border-primary/40 bg-transparent"
            onClick={handleRequestHookah}
          >
            <Flame className="h-5 w-5" />
            <span className="text-xs">Hookah</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-3 border-border hover:bg-secondary hover:border-primary/40 bg-transparent"
            onClick={handleRequestBill}
          >
            <Receipt className="h-5 w-5" />
            <span className="text-xs">Request Bill</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
