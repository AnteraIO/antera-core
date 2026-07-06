import { SolutionsPage } from "@/components_legacy/SolutionsPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Digital Transformation',
  description: 'Tailored digital solutions for Finance, Telecom, Healthcare, and SMEs to accelerate growth and automation.',
};

export default function Page() {
  return <SolutionsPage />;
}
