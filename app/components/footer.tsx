"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left: Logo / Brand */}
        <div className="footer-brand">
          <span className="brand-name">Tank Inspection Services</span>
          <p className="copy">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: Navigation */}
        <ul className="footer-menu">
          <li><Link href="/services/api653">API 653</Link></li>
          <li><Link href="/services/api570">API 570</Link></li>
          <li><Link href="/services/api510">API 510</Link></li>
          <li><Link href="/services/ndt">NDT</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Right: Social links */}
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #000000; /* black footer */
          color: #ffffff;
          padding: 40px 20px;
          margin-top: 40px;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          font-family: var(--font-nunito), sans-serif;
        }

        .footer-brand {
          flex: 1;
          min-width: 200px;
        }

        .brand-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #5587b8; /* brand color */
        }

        .copy {
          font-size: 0.9rem;
          margin-top: 8px;
          color: #aaa;
        }

        .footer-menu {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin: 0;
          padding: 0;
        }

        .footer-menu a {
          font-weight: 700;
          font-size: 1rem;
          color: #5587b8;
          position: relative;
          transition: color 0.2s ease;
        }

        .footer-menu a:hover {
          color: #6aa2d1;
        }

        .footer-menu a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 2px;
          background-color: #5587b8;
          transition: width 0.25s ease;
        }

        .footer-menu a:hover::after {
          width: 100%;
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-social a {
          color: #5587b8;
          font-weight: 700;
          font-size: 1rem;
        }

        .footer-social a:hover {
          color: #6aa2d1;
        }

        @media (max-width: 700px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-menu {
            justify-content: center;
          }
          .footer-social {
            flex-direction: row;
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}
