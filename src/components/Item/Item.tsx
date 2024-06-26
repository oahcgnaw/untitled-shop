import React from "react"
import { Link } from "react-router-dom"

interface ItemProps {
  id: string
  img: string
  name: string
  old_price: number
  new_price: number
}

export const Item: React.FC<ItemProps> = (props) => {
  const { id, img, name, old_price, new_price } = props
  return (
    <div className="item w-[280px] m-auto text-base max-xl:w-[220px] max-lg:w-[170px] max-lg:text-sm max-md:w-[120px] max-md:text-xs max-sm:w-[160px]">
      <Link to={`/product/${id}`}>
        <img
          src={img}
          alt=""
          className="hover:scale-105 duration-500 w-[280px] max-xl:w-[220px] max-lg:w-[170px] max-md:w-[120px] max-sm:w-[160px]"
          onClick={() => window.scrollTo(0, 0)}
          loading="lazy"
        />
      </Link>
      <p className="my-[6px] h-[48px] line-clamp-2 max-lg:h-[40px] max-md:h-[32px]">
        {name}
      </p>
      <div className="item-prices flex gap-5">
        <div className="item-price-new text-zinc-700 font-semibold">
          ${new_price}
        </div>
        <div className="item-price-old text-zinc-400 font-medium">
          ${old_price}
        </div>
      </div>
    </div>
  )
}
