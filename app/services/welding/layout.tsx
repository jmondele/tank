import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welder Qualification Services",
  description: "Comprehensive ASME Section IX welder qualification and certification services. Professional WPQ testing, PQR validation, and WPS development for critical welding applications and compliance.",
};

export default function WeldingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}