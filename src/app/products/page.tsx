import { ProductsPage } from "@/components_legacy/ProductsPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | AI & Digital Solutions',
  description: 'Discover ANTERA\'s range of AI-driven products and digital platforms designed for modern enterprises.',
};

export default function Page() {
  return <ProductsPage />;
}
