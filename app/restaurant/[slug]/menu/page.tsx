import NavBar from '@/app/components/NavBar'
import Header from '@/app/restaurant/[slug]/components/Header'
import RestaurantNavBar from '@/app/restaurant/[slug]/components/RestaurantNavBar'
import Menu from '@/app/restaurant/[slug]/components/Menu'
import { Metadata } from 'next'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  })

  if (!restaurant) {
    throw new Error()
  }

  return restaurant.items
}
export const metadata: Metadata = {
  title: 'Menu page',
  description: 'Generated by create next app',
}

export default async function RestaurantMenu({ params }: { params: { slug: string } }) {
  const menu = await fetchRestaurantMenu(params.slug)
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  )
}
