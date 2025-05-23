"use client"

import { Drawer } from 'vaul';
import { useCart } from "@/stores/cart";
import { CartEmpty } from "./cart-empty";
import { CartList } from "./cart-list";

export const Cart = () => {
  const cart = useCart();

  return (
    <Drawer.Root 
      direction="right" 
      open={cart.open} 
      onOpenChange={(open) => cart.setOpen(open)}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
          style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
        >
          <div className="bg-white h-full w-full grow p-4 flex flex-col rounded-[16px]">
            <Drawer.Title className="font-medium mb-4 text-zinc-900">Carrinho</Drawer.Title>
            
            {cart.items.length <= 0 && <CartEmpty />}
            {cart.items.length > 0 && <CartList />}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}