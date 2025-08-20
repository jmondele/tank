"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav role="navigation" aria-label="Main" className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="inner">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image
              src="/tank_iso.png"
              alt="Tank Inspection Logo"
              width={60}
              height={60}
              priority
            />
            <span>Tank Inspection Services</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="desktop-menu">
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

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-logo" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/tank_iso.png"
                  alt="Tank Inspection Logo"
                  width={40}
                  height={40}
                />
                <span>Tank Inspection Services</span>
              </Link>
              <button 
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            
            <nav className="mobile-nav">
              <div className="mobile-nav-section">
                <h3>Services</h3>
                <div className="service-links">
                  <Link href="/services/api653" onClick={() => setMobileMenuOpen(false)}>API 653</Link>
                  <Link href="/services/api570" onClick={() => setMobileMenuOpen(false)}>API 570</Link>
                  <Link href="/services/api510" onClick={() => setMobileMenuOpen(false)}>API 510</Link>
                  <Link href="/services/ndt" onClick={() => setMobileMenuOpen(false)}>NDT</Link>
                </div>
              </div>
              
              <Link href="/certificates" onClick={() => setMobileMenuOpen(false)}>Certificates</Link>
              <Link href="/equipment" onClick={() => setMobileMenuOpen(false)}>Equipment</Link>
              <Link href="/safety" onClick={() => setMobileMenuOpen(false)}>Safety</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
            </nav>
          </div>
        </div>
      )}

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
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }

        .logo span {
          color: #5587b8;
          font-weight: 700;
          font-size: 20px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          white-space: nowrap;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .desktop-menu li {
          display: flex;
          align-items: center;
          position: relative;
        }

        .navLink,
        .linkBtn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          line-height: 1.2;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: white;
          background: none;
          border: 0;
          cursor: pointer;
          padding: 6px 0;
          white-space: nowrap;
          transition: color 0.2s ease;
          text-decoration: none;
          position: relative;
          appearance: none;
          -webkit-appearance: none;
        }

        .navLink:hover,
        .linkBtn:hover { 
          color: var(--brand); 
        }

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
          border-top: 6px solid white;
          position: relative;
          top: 1px;
          margin-left: 4px;
          transition: transform 0.15s ease;
        }
        
        .caret.up { 
          transform: rotate(180deg); 
        }

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

        /* Mobile hamburger button */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          width: 24px;
          height: 18px;
          position: relative;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: white;
          border-radius: 1px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger span:nth-child(1) {
          margin-bottom: 6px;
        }

        .hamburger span:nth-child(2) {
          margin-bottom: 6px;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile menu overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #000000;
          z-index: 1000;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .mobile-menu-content {
          height: 100%;
          overflow-y: auto;
          padding: 0;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #333;
        }

        .mobile-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #5587b8;
          font-weight: 700;
          font-size: 16px;
        }

        .mobile-close-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
          font-size: 20px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-close-btn:hover {
          background-color: #333;
        }

        .mobile-nav {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-section {
          margin-bottom: 40px;
        }

        .mobile-nav-section h3 {
          color: #5587b8;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #333;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .mobile-nav > a {
          display: block;
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          padding: 20px 0;
          margin: 0;
          border-bottom: 1px solid #333;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          transition: all 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .mobile-nav > a:hover {
          color: #5587b8;
          padding-left: 10px;
        }

        .mobile-nav > a:last-child {
          border-bottom: none;
        }

        .mobile-nav-section a {
          display: block;
          border-bottom: 1px solid #222;
          padding: 18px 0 18px 24px;
          margin: 0;
          font-size: 18px;
          color: #ccc;
          text-decoration: none;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          transition: all 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .mobile-nav-section a:hover {
          color: #5587b8;
          padding-left: 32px;
        }

        .mobile-nav-section a:last-child {
          border-bottom: 2px solid #333;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .inner {
            padding: 10px 16px;
          }
          
          .logo span {
            font-size: 16px;
          }
          
          .desktop-menu { 
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .inner {
            padding: 8px 16px;
          }
          
          .logo span {
            font-size: 14px;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
}