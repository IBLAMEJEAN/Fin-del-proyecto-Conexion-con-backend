"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutButton() {
  const handleClick = async () => {
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
    });

    const data = await res.json();

    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: data.sessionId });
  };

  return (
    <button
      className="bg-indigo-600 text-white px-4 py-2 rounded"
      onClick={handleClick}
    >
      Pagar con Stripe
    </button>
  );
}
