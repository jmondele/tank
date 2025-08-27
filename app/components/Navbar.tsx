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
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("click", onClickOutside);
    }
    return () => document.removeEventListener("click", onClickOutside);
  }, [open]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav role="navigation" aria-label="Main" className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="inner">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image
              src="/tank_isoblue.png"
              alt="Tank Inspection Logo"
              width={100}
              height={100}
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
                onClick={() => setOpen(prev => !prev)}
              >
                Services <span className={`caret ${open ? "up" : ""}`} aria-hidden="true" />
              </button>

              <div 
                className="dropdown" 
                role="menu" 
                aria-label="Services"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  left: '0',
                  minWidth: '200px',
                  background: '#000000',
                  border: '1px solid #333',
                  borderRadius: '8px',
                  padding: '8px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                  display: open ? 'flex' : 'none',
                  flexDirection: 'column',
                  zIndex: 1000
                }}
              >
                <Link 
                  href="/services/api653" 
                  role="menuitem" 
                  className={pathname === "/services/api653" ? "active" : ""}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    margin: '2px 0',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: pathname === "/services/api653" ? '#5587b8' : '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    backgroundColor: pathname === "/services/api653" ? '#1a1a1a' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5587b8';
                    e.currentTarget.style.backgroundColor = '#1a1a1a';
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== "/services/api653") {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  API 653
                </Link>
                <Link 
                  href="/services/api570" 
                  role="menuitem" 
                  className={pathname === "/services/api570" ? "active" : ""}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    margin: '2px 0',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: pathname === "/services/api570" ? '#5587b8' : '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    backgroundColor: pathname === "/services/api570" ? '#1a1a1a' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5587b8';
                    e.currentTarget.style.backgroundColor = '#1a1a1a';
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== "/services/api570") {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  API 570
                </Link>
                <Link 
                  href="/services/api510" 
                  role="menuitem" 
                  className={pathname === "/services/api510" ? "active" : ""}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    margin: '2px 0',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: pathname === "/services/api510" ? '#5587b8' : '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    backgroundColor: pathname === "/services/api510" ? '#1a1a1a' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5587b8';
                    e.currentTarget.style.backgroundColor = '#1a1a1a';
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== "/services/api510") {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  API 510
                </Link>
                <Link 
                  href="/services/NDT" 
                  role="menuitem" 
                  className={pathname === "/services/NDT" ? "active" : ""}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    margin: '2px 0',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: pathname === "/services/NDT" ? '#5587b8' : '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    backgroundColor: pathname === "/services/NDT" ? '#1a1a1a' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5587b8';
                    e.currentTarget.style.backgroundColor = '#1a1a1a';
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== "/services/NDT") {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  NDT
                </Link>
                <Link 
                  href="/services/welding" 
                  role="menuitem" 
                  className={pathname === "/services/api653" ? "active" : ""}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    margin: '2px 0',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: pathname === "/services/api653" ? '#5587b8' : '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    backgroundColor: pathname === "/services/api653" ? '#1a1a1a' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5587b8';
                    e.currentTarget.style.backgroundColor = '#1a1a1a';
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== "/services/api653") {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Welder Qualification
                </Link>
              </div>
            </li>

            <li>
              <Link className={`navLink ${pathname === "/certificates" ? "active" : ""}`} href="/certificates">
                Certificates
              </Link>
            </li>
            <li>
              <Link className={`navLink ${pathname === "/equipment" ? "active" : ""}`} href="/equipment">
                Equipment
              </Link>
            </li>
            <li>
              <Link className={`navLink ${pathname === "/safety" ? "active" : ""}`} href="/safety">
                Safety
              </Link>
            </li>
            <li>
              <Link className={`navLink ${pathname === "/about" ? "active" : ""}`} href="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className={`navLink ${pathname === "/contact" ? "active" : ""}`} href="/contact">
                Contact us
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
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
                ×
              </button>
            </div>
            
            <div style={{
              padding: '24px 20px',
              backgroundColor: '#000000',
              height: '100%',
              overflow: 'auto'
            }}>
              <div style={{
                marginBottom: '40px'
              }}>
                <div style={{
                  color: '#5587b8',
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  paddingBottom: '8px',
                  borderBottom: '2px solid #333'
                }}>
                  Services
                </div>
                
                <div style={{ display: 'block', color: '#ccc', fontSize: '18px', padding: '18px 24px', borderBottom: '1px solid #222' }}>
                  <Link href="/services/api653" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                    API 653
                  </Link>
                </div>
                
                <div style={{ display: 'block', color: '#ccc', fontSize: '18px', padding: '18px 24px', borderBottom: '1px solid #222' }}>
                  <Link href="/services/api570" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                    API 570
                  </Link>
                </div>
                
                <div style={{ display: 'block', color: '#ccc', fontSize: '18px', padding: '18px 24px', borderBottom: '1px solid #222' }}>
                  <Link href="/services/api510" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                    API 510
                  </Link>
                </div>
                
                <div style={{ display: 'block', color: '#ccc', fontSize: '18px', padding: '18px 24px', borderBottom: '2px solid #333' }}>
                  <Link href="/services/NDT" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                    NDT
                  </Link>
                </div>
                <div style={{ display: 'block', color: '#ccc', fontSize: '18px', padding: '18px 24px', borderBottom: '1px solid #222' }}>
                  <Link href="/services/welding" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                    Welder Qualification
                  </Link>
                </div>
              </div>
              
              <div style={{ display: 'block', color: 'white', fontSize: '20px', padding: '20px 0', borderBottom: '1px solid #333' }}>
                <Link href="/certificates" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Certificates
                </Link>
              </div>
              
              <div style={{ display: 'block', color: 'white', fontSize: '20px', padding: '20px 0', borderBottom: '1px solid #333' }}>
                <Link href="/equipment" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Equipment
                </Link>
              </div>
              
              <div style={{ display: 'block', color: 'white', fontSize: '20px', padding: '20px 0', borderBottom: '1px solid #333' }}>
                <Link href="/safety" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Safety
                </Link>
              </div>
              
              <div style={{ display: 'block', color: 'white', fontSize: '20px', padding: '20px 0', borderBottom: '1px solid #333' }}>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                  About us
                </Link>
              </div>
              
              <div style={{ display: 'block', color: 'white', fontSize: '20px', padding: '20px 0' }}>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Contact us
                </Link>
              </div>
            </div>
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

        .services .dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 200px;
          background: #000000;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 4px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          display: none;
          z-index: 1000;
          flex-direction: column;
        }

        .services.open .dropdown,
        .services:hover .dropdown { 
          display: flex;
        }

        .services .dropdown a {
          display: flex !important;
          width: 100%;
          padding: 14px 18px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #ffffff;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
          border-radius: 6px;
          margin: 2px 0;
          line-height: 1.2;
          box-sizing: border-box;
          cursor: pointer;
          align-items: center;
        }

        .services .dropdown a:hover { 
          color: var(--brand);
          background-color: #1a1a1a;
        }
        
        .services .dropdown a.active { 
          color: var(--brand); 
          background-color: #1a1a1a;
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
          width: 100vw;
          height: 100vh;
          background: #000000;
          z-index: 1000;
          animation: slideIn 0.3s ease-out;
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
          height: 100vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #333;
          flex-shrink: 0;
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
          font-size: 24px;
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
          flex: 1;
          background: #000000;
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