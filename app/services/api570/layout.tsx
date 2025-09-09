import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API 570 Piping Inspections",
  description: "Comprehensive API 570 piping inspection, repair, and rerating services. Specialized in-service piping assessments for petrochemical and industrial facilities with certified inspectors.",
};

export default function API570Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}