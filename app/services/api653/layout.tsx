import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API 653 Tank Inspections | Aboveground Storage Tank Services",
  description: "Expert API 653 aboveground storage tank inspections, repairs, and reconstructions. Professional tank integrity assessments with certified inspectors for petroleum and chemical facilities.",
};

export default function API653Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}