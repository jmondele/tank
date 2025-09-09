import type { Metadata } from "next";
import CertificatesClient from "./CertificatesClient";

export const metadata: Metadata = {
  title: "Certifications - API & Industry Certified",
  description: "View our professional certifications and qualifications. API 653, API 570, API 510 certified inspectors and industry accreditations.",
};

export default function Certificates() {
  return <CertificatesClient />;
}