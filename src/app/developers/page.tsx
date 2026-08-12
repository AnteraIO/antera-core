import { DevelopersPage } from "@/components_legacy/DevelopersPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developers | Documentation & Platforms',
  description: 'Access ANTERA documentation, platforms, and developer tools to build on our neural infrastructure.',
};

export default function Page() {
  return <DevelopersPage />;
}
