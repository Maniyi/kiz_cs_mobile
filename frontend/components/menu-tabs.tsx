"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MenuGrid } from "@/components/menu-grid"
import { drinks, food, specials } from "@/lib/menu-data"

interface MenuTabsProps {
  tableId: string
  sessionId: string
}

export function MenuTabs({ tableId, sessionId }: MenuTabsProps) {
  return (
    <div className="flex-1 container mx-auto px-4 py-6">
      <Tabs defaultValue="drinks" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-secondary/50">
          <TabsTrigger
            value="drinks"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Drinks
          </TabsTrigger>
          <TabsTrigger
            value="food"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Food
          </TabsTrigger>
          <TabsTrigger
            value="specials"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Specials
          </TabsTrigger>
        </TabsList>

        <TabsContent value="drinks" className="mt-0">
          <MenuGrid items={drinks} tableId={tableId} sessionId={sessionId} />
        </TabsContent>

        <TabsContent value="food" className="mt-0">
          <MenuGrid items={food} tableId={tableId} sessionId={sessionId} />
        </TabsContent>

        <TabsContent value="specials" className="mt-0">
          <MenuGrid items={specials} tableId={tableId} sessionId={sessionId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
