import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OrderItem } from '../models/OrderModel';
import { round2 } from '../utils';
import { ShippingAddress } from './../models/OrderModel';

// import { it } from 'node:test';

// gestion d'un panier 
type Cart = {
    items: OrderItem[]
    itemsPrice: number
    taxPrice: number
    shippingPrice:number
    totalPrice: number

    paymentMethod:string
    shippingAddress:ShippingAddress
}

const initialState: Cart={items:[], itemsPrice:0, taxPrice:0, shippingPrice:0, totalPrice:0, paymentMethod:'Paypal',shippingAddress:{
  fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
} }

// export const cartStore = create<Cart>(()=>initialState)
export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: 'cartStore',
  })
)
// fonction personnalisée pour interagir avec le magasin d'état du panier.
export default function useCartService() {
    const {items, itemsPrice, taxPrice, shippingPrice, totalPrice,paymentMethod,shippingAddress,} = cartStore()
    
    return{
        // increase = pour augmenter la quantité d'un article dans le panier.
        items,itemsPrice,taxPrice, shippingPrice, totalPrice,paymentMethod,shippingAddress,
        increase:(item:OrderItem)=>{
            const exist = items.find((x)=>x.slug===item.slug)
            // vérifie si l'article existe déjà dans le panier. Si c'est le cas, il augmente la quantité, sinon, il ajoute l'article au panier avec une quantité de 1.
            const updatedCartItems = exist 
            ? items.map((x)=>x.slug === item.slug ? {...exist, qty: exist.qty + 1} : x
            ) : [...items,{...item, qty: 1}]
            // mise à jour du panier aprés calcul des prix des articles
            const {itemsPrice, shippingPrice, taxPrice, totalPrice} = calcPrice(updatedCartItems)
            cartStore.setState({
              items: updatedCartItems,
              itemsPrice,
              shippingPrice,
              taxPrice,
              totalPrice,
            })
        }, decrease: (item: OrderItem) => {
          const exist = items.find((x) => x.slug === item.slug)
          if (!exist) return
          const updatedCartItems =
            exist.qty === 1
              ? items.filter((x: OrderItem) => x.slug !== item.slug)
              : items.map((x) => (item.slug ? { ...exist, qty: exist.qty - 1 } : x))
          const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
            calcPrice(updatedCartItems)
          cartStore.setState({
            items: updatedCartItems,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
          })
        },
        saveShippingAddress:(shippingAddress: ShippingAddress) =>{
          cartStore.setState({
            shippingAddress,
          })
        },
        savePaymentMethod:(paymentMethod:string) =>{
          cartStore.setState({
            paymentMethod,
          })
        },
        clear: () => {
          cartStore.setState({
            items: [],
          })
    },
    init:()=>cartStore.setState(initialState),
  }
}
// fonction utilitaire pour calculer les différents coûts du panier.
const calcPrice = (items: OrderItem[]) => {
    // itemPrice est le cout total de l'article
    const itemsPrice = round2(
        items.reduce((acc, item) => acc + item.price * item.qty, 0)
      ),
    //   shippingPrice est le coût de l'expédition, gratuit si le itemsPrice dépasse 100.
      shippingPrice = round2(itemsPrice > 100 ? 0 : 100),
    //   taxPrice est calculé comme 15% du itemsPrice.
      taxPrice = round2(Number(0.15 * itemsPrice)),
      totalPrice = round2(itemsPrice + shippingPrice + taxPrice)
    //   round2 est probablement une fonction utilitaire pour arrondir les nombres à deux décimales.
    return { itemsPrice, shippingPrice, taxPrice, totalPrice }
  }
  