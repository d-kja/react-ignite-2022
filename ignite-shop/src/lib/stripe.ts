import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'

export const stripe = (() => {
  const apiSecretKey = process.env.STRIPE_SECRET_KEY ?? ''

  const stripeInstance = new Stripe(apiSecretKey, {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'Nyyu.ignite-shop',
    },
  })

  return stripeInstance
})()

export const stripeClient = () => {
  const apiPublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? ''
  const stripeClientInstance = loadStripe(apiPublicKey)

  return stripeClientInstance
}
