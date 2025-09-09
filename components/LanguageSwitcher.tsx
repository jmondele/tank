"use client";

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const { locale, locales, asPath } = router;
  
  const languages = {
    en: { name: 'English', flag: '🇺🇸' },
    es: { name: 'Español', flag: '🇪🇸' }
  };
  
  const changeLanguage = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale });
    setIsOpen(false);
  };
  
  const currentLanguage = languages[locale as keyof typeof languages] || languages.en;

  return (
    <div className="language-switcher">
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="language-name">{currentLanguage.name}</span>
        <svg 
          className={`chevron ${isOpen ? 'open' : ''}`} 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="currentColor"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {locales?.map((loc) => {
            const lang = languages[loc as keyof typeof languages];
            if (!lang) return null;
            
            return (
              <button
                key={loc}
                className={`language-option ${loc === locale ? 'active' : ''}`}
                onClick={() => changeLanguage(loc)}
              >
                <span className="flag">{lang.flag}</span>
                <span className="language-name">{lang.name}</span>
              </button>
            );
          })}
        </div>
      )}
      
      <style jsx>{`
        .language-switcher {
          position: relative;
          display: inline-block;
        }
        
        .language-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
        }
        
        .language-button:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .flag {
          font-size: 16px;
          line-height: 1;
        }
        
        .language-name {
          font-size: 14px;
          white-space: nowrap;
        }
        
        .chevron {
          transition: transform 0.2s ease;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .chevron.open {
          transform: rotate(180deg);
        }
        
        .language-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 120px;
          background: #000000;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 4px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          z-index: 1000;
          backdrop-filter: blur(12px);
        }
        
        .language-option {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 8px 12px;
          background: none;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }
        
        .language-option:hover {
          background: rgba(85, 135, 184, 0.2);
          color: #5587b8;
        }
        
        .language-option.active {
          background: rgba(85, 135, 184, 0.3);
          color: #5587b8;
        }
        
        @media (max-width: 768px) {
          .language-name {
            display: none;
          }
          
          .language-button {
            padding: 8px 10px;
          }
          
          .language-dropdown {
            right: 0;
            min-width: 100px;
          }
        }
      `}</style>
    </div>
  );
}