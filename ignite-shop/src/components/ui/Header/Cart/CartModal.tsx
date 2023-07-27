'use client'

import { useCart } from '@/contexts/cart/context'
import { priceFormatter } from '@/lib/utils/formatter'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { SmallCard } from '../../Card/Small'
import { CartButton } from './Button'

export const CartModal = () => {
  const { cart, closeCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDialog = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    if (!cart.length) setIsOpen(false)
  }, [cart.length])

  const totalPrice = cart.reduce((total, product) => {
    const quantity = product.quantity ?? 1
    const price = quantity * (product.unit_amount / 100)
    return total + price
  }, 0)
  const formattedTotalPrice = priceFormatter.format(totalPrice)

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenDialog}>
      <Dialog.Trigger disabled={!cart.length}>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="fixed max-w-[480px] w-full bg-gray-800 right-0 top-0 bottom-0 shadow-2xl black p-12 flex flex-col justify-between">
          <Dialog.Close className="absolute right-5 top-5 text-gray-400 hover:brightness-125">
            <X size={25} weight="bold" />
          </Dialog.Close>
          <div>
            <Dialog.Title className="mt-6 font-bold text-xl text-gray-100">
              Cart
            </Dialog.Title>
            <div className="flex flex-col gap-6 mt-8">
              {cart.map((product) => (
                <SmallCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="text-gray-100">
            <div className="flex justify-between">
              <span className="text-base">Quantity</span>
              <span className="text-gray-300 text-base">
                {cart.length} item{cart.length > 1 && 's'}
              </span>
            </div>
            <div className="flex justify-between">
              <strong className="text-lg">Total price</strong>
              <strong className="text-2xl">{formattedTotalPrice}</strong>
            </div>
            <button
              className="w-full bg-green-500 hover:brightness-125 text-white font-bold text-lg py-5 mt-14 rounded-md"
              onClick={closeCart}
            >
              Confirm purchase
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
