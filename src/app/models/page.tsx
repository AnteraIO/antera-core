import { ModelsPage } from "@/components_legacy/ModelsPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Models | AI Research',
  description: 'Explore ANTERA\'s neural models and research papers on advanced AI technologies.',
};

export default function Page() {
  return <ModelsPage />;
}
