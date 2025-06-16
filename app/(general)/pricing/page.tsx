import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page SEO Title",
  description: "Pricing SEO Description",
  keywords: ['Pricing Page', 'Pricing']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}