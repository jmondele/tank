import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API 510 Pressure Vessel Inspections",
  description: "Professional API 510 pressure vessel inspection, alteration, and rerating services. Expert in-service vessel evaluations for industrial equipment safety and regulatory compliance.",
};

export default function API510Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}