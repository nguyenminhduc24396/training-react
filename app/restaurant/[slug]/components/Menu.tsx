import React from 'react'
import MenuCard from '@/app/restaurant/[slug]/components/MenuCard'
import { Item } from '.prisma/client'

function Menu({ menu }: { menu: Item[] }) {
  console.log(menu)
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Menu