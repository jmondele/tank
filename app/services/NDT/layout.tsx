import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDT Services | Advanced Phased Array Ultrasonic Testing (PAUT) & TOFD",
  description: "State-of-the-art non-destructive testing services featuring PAUT, TOFD, ultrasonic, magnetic particle, and liquid penetrant testing. Advanced NDT solutions for asset integrity management.",
};

export default function NDTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}