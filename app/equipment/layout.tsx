import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Inspection Equipment",
  description: "State-of-the-art inspection equipment including Olympus X3 Y MX2, NDT testing tools, and precision measurement instruments for tank inspections.",
};

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}