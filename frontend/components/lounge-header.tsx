import { Badge } from "@/components/ui/badge"

interface LoungeHeaderProps {
  tableId: string
}

export function LoungeHeader({ tableId }: LoungeHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif tracking-tight text-primary">Kiss & Shhhh</h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mt-0.5">Premium Lounge</p>
          </div>
          <Badge variant="outline" className="text-sm px-3 py-1.5 border-primary/30 text-primary">
            Table {tableId}
          </Badge>
        </div>
      </div>
    </header>
  )
}
