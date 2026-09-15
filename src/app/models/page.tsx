import { ModelsPage } from "@/components_legacy/ModelsPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Models | AI Integration',
  description: 'Explore ANTERA\'s AI orchestration, model integration, and secure enterprise data platforms.',
};

export default function Page() {
  return <ModelsPage />;
}
