"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapperRef = useRef<HTMLLIElement | null>(null);
  const pathname = usePathname();
  const isServicesActive = pathname?.startsWith("/services");

  // Close dropdown if clicking outside
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [open]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav role="navigation" aria-label="Main" className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="inner">
        {/* Logo - Fixed href to point to home */}
        <Link href="/" className="logo flex items-center gap-2">
          <Image
            src="/tank_iso.png"
            alt="Tank Inspection Logo"
            width={80}
            height={80}
            priority
          />
          <span className="font-extrabold text-[#5587b8]">Tank Inspection Services</span>
        </Link>

        {/* Menu */}
        <ul className="menu">
          <li
            ref={wrapperRef}
            className={`services ${open ? "open" : ""}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className={`linkBtn ${isServicesActive ? "active" : ""}`}
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              Services <span className={`caret ${open ? "up" : ""}`} aria-hidden="true" />
            </button>

            <div className="dropdown" role="menu" aria-label="Services">
              <Link href="/services/api653" role="menuitem">API 653</Link>
              <Link href="/services/api570" role="menuitem">API 570</Link>
              <Link href="/services/api510" role="menuitem">API 510</Link>
              <Link href="/services/ndt" role="menuitem">NDT</Link>
            </div>
          </li>

          <li><Link className="navLink" href="/certificates">Certificates</Link></li>
          <li><Link className="navLink" href="/equipment">Equipment</Link></li>
          <li><Link className="navLink" href="/safety">Safety</Link></li>
          <li><Link className="navLink" href="/about">About us</Link></li>
          <li><Link className="navLink" href="/contact">Contact us</Link></li>
        </ul>
      </div>

      <style jsx>{`
        :root { 
          --brand: #5587b8; 
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #000000;
          border-bottom: 1px solid #222;
          transition: box-shadow 0.3s ease;
        }
        
        .nav.scrolled { 
          box-shadow: 0 10px 12px rgba(0,0,0,0.6); 
        }

        .inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          color: var(--brand);
          font-weight: 700;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .menu {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .menu li {
          display: flex;
          align-items: center;
          position: relative;
        }

        /* Unified style for all nav items */
        .navLink,
        .linkBtn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          line-height: 1.2;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
          background: none;
          border: 0;
          cursor: pointer;
          padding: 6px 0;
          white-space: nowrap;
          transition: color 0.2s ease;
          text-decoration: none;
          position: relative;
        }

        .navLink:hover,
        .linkBtn:hover { 
          color: var(--brand); 
        }

        /* Underline animation */
        .navLink::after,
        .linkBtn::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 2px;
          background-color: var(--brand);
          transition: width 0.25s ease;
        }
        
        .navLink:hover::after,
        .linkBtn:hover::after { 
          width: 100%; 
        }

        /* Active link stays underlined */
        .navLink.active::after,
        .linkBtn.active::after { 
          width: 100%; 
        }

        .navLink.active,
        .linkBtn.active { 
          color: var(--brand); 
        }

        .services { 
          position: relative; 
        }

        .caret {
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid var(--brand);
          position: relative;
          top: 2px;
          transition: transform 0.15s ease;
        }
        
        .caret.up { 
          transform: rotate(180deg); 
        }

        /* Dropdown menu */
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 180px;
          background: #000000;
          border: 1px solid #333;
          border-radius: 10px;
          padding: 6px;
          margin-top: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          display: none;
          z-index: 30;
        }

        /* Dropdown links */
        .dropdown :global(a) {
          position: relative;
          display: block;
          padding: 10px 12px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
          white-space: nowrap;
          transition: color 0.2s ease;
          text-decoration: none;
          border-radius: 6px;
        }

        /* Underline effect inside dropdown */
        .dropdown :global(a)::after {
          content: "";
          position: absolute;
          left: 12px;
          bottom: 6px;
          width: 0;
          height: 2px;
          background-color: var(--brand);
          transition: width 0.25s ease;
        }

        .dropdown :global(a:hover) { 
          color: var(--brand);
          background-color: #1a1a1a;
        }
        
        .dropdown :global(a:hover)::after { 
          width: calc(100% - 24px); 
        }

        .dropdown :global(a.active)::after { 
          width: calc(100% - 24px); 
        }
        
        .dropdown :global(a.active) { 
          color: var(--brand); 
        }

        .services:hover .dropdown,
        .services.open .dropdown { 
          display: block; 
        }

        @media (max-width: 768px) {
          .inner {
            padding: 12px 16px;
          }
          
          .logo span {
            display: none;
          }
          
          .menu { 
            gap: 12px;
            flex-wrap: wrap;
          }
          
          .navLink,
          .linkBtn {
            font-size: 14px;
            padding: 4px 0;
          }
          
          .dropdown {
            min-width: 160px;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (max-width: 480px) {
          .inner {
            flex-direction: column;
            gap: 12px;
            padding: 12px 16px;
          }
          
          .logo {
            justify-self: center;
          }
          
          .menu { 
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .navLink,
          .linkBtn {
            font-size: 13px;
            padding: 6px 8px;
            border-radius: 4px;
            background-color: transparent;
          }
          
          .dropdown {
            min-width: 140px;
            left: 50%;
            transform: translateX(-50%);
          }
          
          .dropdown :global(a) {
            padding: 8px 10px;
            font-size: 14px;
          }
        }
      `}</style>
    </nav>
  );
}