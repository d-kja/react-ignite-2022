import { useCart } from '@/contexts/cart/context'
import { ProductType } from '@/contexts/cart/utils/types'

interface SmallProps {
  product: ProductType
}

export const SmallCard = ({
  product: {
    id,
    product: { name, description, images },
    formattedPrice = '$0',
    quantity = 1,
  },
}: SmallProps) => {
  const { removeProduct } = useCart()

  return (
    <div title={name} className="flex gap-5">
      <div className="bg-gradient-to-b from-[#1ea483] to-[#7465d4] w-24 h-24 rounded-md overflow-hidden">
        <img
          src={images[0] ?? ''}
          alt={name ?? ''}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-[2px]">
          <p className="text-gray-300">{name ?? ''}</p>
          <div className="flex gap-2 justify-between items-center">
            <strong className="text-gray-100">{formattedPrice}</strong>
            <span className="text-gray-400 text-xs">
              ({quantity} x {formattedPrice})
            </span>
          </div>
        </div>
        <button
          onClick={() => removeProduct(id)}
          className="font-bold hover:underline text-green-500 w-min"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
