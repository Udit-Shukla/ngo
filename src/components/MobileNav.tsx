"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="p-2 hover:bg-muted rounded-md transition-colors"
        aria-label="Toggle mobile menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Image
                src="/image.png"
                alt="NGO Logo"
                width={100}
                height={50}
                className="h-10 w-auto"
              />
              <button 
                onClick={toggleMenu}
                className="p-2 hover:bg-muted rounded-md transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-8">
              <ul className="space-y-6">
                <li>
                  <Link 
                    href="/about" 
                    onClick={toggleMenu}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects" 
                    onClick={toggleMenu}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/gallery" 
                    onClick={toggleMenu}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    onClick={toggleMenu}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <Link 
                  href="/volunteer" 
                  onClick={toggleMenu}
                  className="block w-full px-4 py-3 text-center font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Volunteer
                </Link>
                <Link 
                  href="/donate" 
                  onClick={toggleMenu}
                  className="block w-full px-4 py-3 text-center font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Donate
                </Link>
              </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Making a difference in communities
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 