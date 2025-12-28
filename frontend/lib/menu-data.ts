export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: "drinks" | "food" | "specials"
}

export const drinks: MenuItem[] = [
  {
    id: "drink-1",
    name: "Signature Old Fashioned",
    description: "Bourbon, bitters, orange, cherry",
    price: 16,
    category: "drinks",
  },
  {
    id: "drink-2",
    name: "Afro Mojito",
    description: "White rum, mint, lime, ginger syrup",
    price: 14,
    category: "drinks",
  },
  {
    id: "drink-3",
    name: "Golden Martini",
    description: "Vodka, dry vermouth, gold flakes",
    price: 18,
    category: "drinks",
  },
  {
    id: "drink-4",
    name: "Hibiscus Margarita",
    description: "Tequila, hibiscus, lime, agave",
    price: 15,
    category: "drinks",
  },
  {
    id: "drink-5",
    name: "Smoke & Mirrors",
    description: "Mezcal, aperol, grapefruit, rosemary",
    price: 17,
    category: "drinks",
  },
  {
    id: "drink-6",
    name: "Champagne Royale",
    description: "Champagne, cognac, chambord",
    price: 22,
    category: "drinks",
  },
]

export const food: MenuItem[] = [
  {
    id: "food-1",
    name: "Jollof Arancini",
    description: "Crispy rice balls, spicy aioli",
    price: 12,
    category: "food",
  },
  {
    id: "food-2",
    name: "Suya Skewers",
    description: "Grilled beef, peanut spice, peppers",
    price: 18,
    category: "food",
  },
  {
    id: "food-3",
    name: "Plantain Chips",
    description: "Sweet plantain, sea salt, honey drizzle",
    price: 9,
    category: "food",
  },
  {
    id: "food-4",
    name: "Grilled Tiger Prawns",
    description: "Garlic butter, herbs, lemon",
    price: 24,
    category: "food",
  },
  {
    id: "food-5",
    name: "Truffle Fries",
    description: "Hand-cut fries, truffle oil, parmesan",
    price: 11,
    category: "food",
  },
  {
    id: "food-6",
    name: "Charcuterie Board",
    description: "Cured meats, artisan cheese, preserves",
    price: 28,
    category: "food",
  },
]

export const specials: MenuItem[] = [
  {
    id: "special-1",
    name: "Lagos Sunset",
    description: "Premium rum blend, tropical fruits, secret spices",
    price: 20,
    category: "specials",
  },
  {
    id: "special-2",
    name: "Wagyu Sliders",
    description: "Three mini wagyu burgers, special sauce",
    price: 32,
    category: "specials",
  },
  {
    id: "special-3",
    name: "Caviar Service",
    description: "Premium caviar, blinis, crème fraîche",
    price: 65,
    category: "specials",
  },
  {
    id: "special-4",
    name: "Bottle Service",
    description: "Premium spirits, mixers, garnishes",
    price: 250,
    category: "specials",
  },
]
