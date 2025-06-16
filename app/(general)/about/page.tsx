import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page SEO Title",
  description: "About SEO Description",
  keywords: ["About Page", "Information"],
};

export default function AboutPage() {
  return <span className="text-7xl">About Page</span>;
}
