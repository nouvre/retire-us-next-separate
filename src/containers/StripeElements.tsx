import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

interface ComponentProps {
    children: React.ReactChild;
}

const StripeElements: React.FC<ComponentProps> = ({ children }) => (
    <Elements stripe={stripePromise}>{ children }</Elements>
);

export default StripeElements;
