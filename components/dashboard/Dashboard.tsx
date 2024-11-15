'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Search, ShoppingBag, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Toys",
  "Sports",
  "Beauty",
  "Automotive",
]

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Leather Jacket",
    category: "Clothing",
    price: 199.99,
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Bestselling Novel",
    category: "Books",
    price: 14.99,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Smart Home Hub",
    category: "Home & Garden",
    price: 129.99,
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Robot Toy Set",
    category: "Toys",
    price: 49.99,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Yoga Mat",
    category: "Sports",
    price: 29.99,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                EcommerceHub
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#" className="transition-colors hover:text-primary">
                Dashboard
              </Link>
              <Link href="#" className="transition-colors hover:text-primary">
                Products
              </Link>
              <Link href="#" className="transition-colors hover:text-primary">
                Orders
              </Link>
              <Link href="#" className="transition-colors hover:text-primary">
                Customers
              </Link>
            </nav>
          </div>
          <Button
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R1mcq:"
            data-state="closed"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </form>
            </div>
            <Button size="sm">Sign in</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {categories.map((category) => (
              <Button key={category} variant="outline" className="flex-shrink-0">
                {category}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col justify-between">
              <CardHeader>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-48 rounded-md"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <div className="flex items-center mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <Button size="sm">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}