'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bell, Home, Package, Search, ShoppingCart, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    {
      id: 1,
      name: 'Electronics',
      products: [
        { id: 1, name: 'Laptop', price: '$999', stock: 50, image: '/placeholder.svg?height=200&width=300' },
        { id: 2, name: 'Smartphone', price: '$699', stock: 100, image: '/placeholder.svg?height=200&width=300' },
        { id: 3, name: 'Tablet', price: '$399', stock: 75, image: '/placeholder.svg?height=200&width=300' },
      ]
    },
    {
      id: 2,
      name: 'Clothing',
      products: [
        { id: 4, name: 'T-Shirt', price: '$19.99', stock: 200, image: '/placeholder.svg?height=200&width=300' },
        { id: 5, name: 'Jeans', price: '$49.99', stock: 150, image: '/placeholder.svg?height=200&width=300' },
        { id: 6, name: 'Sneakers', price: '$79.99', stock: 100, image: '/placeholder.svg?height=200&width=300' },
      ]
    },
    {
      id: 3,
      name: 'Home & Garden',
      products: [
        { id: 7, name: 'Coffee Maker', price: '$89.99', stock: 30, image: '/placeholder.svg?height=200&width=300' },
        { id: 8, name: 'Bed Sheets', price: '$39.99', stock: 80, image: '/placeholder.svg?height=200&width=300' },
        { id: 9, name: 'Plant Pot', price: '$14.99', stock: 120, image: '/placeholder.svg?height=200&width=300' },
      ]
    },
  ]

  const allProducts = categories.flatMap(category => category.products)

  const displayedProducts = selectedCategory === 'All' 
    ? allProducts 
    : categories.find(cat => cat.name === selectedCategory)?.products || []

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 bg-white p-4 shadow-md lg:block">
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Package className="mr-2 h-4 w-4" />
            Products
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Categories
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Orders
          </Button>
        </nav>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Navigate through your dashboard
            </SheetDescription>
          </SheetHeader>
          <nav className="space-y-2 mt-4">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsSidebarOpen(false)}>
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsSidebarOpen(false)}>
              <Package className="mr-2 h-4 w-4" />
              Products
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsSidebarOpen(false)}>
              <Users className="mr-2 h-4 w-4" />
              Categories
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsSidebarOpen(false)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Orders
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-md">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <h1 className="text-xl font-semibold">Ecom-Web</h1>
            </div>
            <div className="flex items-center space-x-2">
              <form className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-[200px] lg:w-[300px]"
                />
              </form>
              <Button variant="outline" size="sm">
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                Profile
              </Button>
            </div>
          </div>
        </header>

        {/* Category navigation */}
        <nav className="bg-white border-b">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex p-4 space-x-4">
              <Button
                variant={selectedCategory === 'All' ? 'default' : 'ghost'}
                onClick={() => setSelectedCategory('All')}
              >
                All Products
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? 'default' : 'ghost'}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </nav>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {displayedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="flex">
                  <div className="relative h-40 w-40 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{selectedCategory === 'All' ? categories.find(cat => cat.products.includes(product))?.name : selectedCategory}</CardDescription>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">{product.price}</p>
                        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                      </div>
                      <Button>Edit Product</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}