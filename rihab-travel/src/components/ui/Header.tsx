"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "برامج العمرة", href: "/packages" },
    { label: "دليل المعتمر", href: "/guide" },
    { label: "من نحن", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] border-b border-surface-container-high/40">
        <div className="h-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-15 h-15 rounded-full overflow-hidden shadow-md group-hover:scale-105 transition-transform border border-secondary/40 shrink-0 bg-primary-container relative">
              <Image
                src="/images/logo.png"
                alt="شعار وكالة رحاب للعمرة والحج"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>

          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-surface-container-low/70 px-3 py-1.5 rounded-full border border-surface-container-high/40 shadow-xs">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-primary-container text-on-primary shadow-sm"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions & CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone support */}
            <a
              href="tel:+20223456789"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-primary transition-colors border border-outline-variant/30"
              title="مركز المساعدة وخدمة العملاء"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>

            {/* WhatsApp Floating link button */}
            <a
              href="https://wa.me/201023456789?text=السلام%20عليكم%20أرغب%20في%20معلومات%20عن%20باقات%20العمرة"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
              title="تواصل مباشرة عبر واتساب"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>

            {/* Main Reservation CTA */}
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                type="button"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-primary-container text-on-primary text-xs sm:text-sm font-bold shadow-md hover:bg-primary transition-all cursor-pointer hover:shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                  travel_explore
                </span>
                <span>احجز رحلتك الآن</span>
              </button>
            ) : (
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-primary-container text-on-primary text-xs sm:text-sm font-bold shadow-md hover:bg-primary transition-all hover:shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                  travel_explore
                </span>
                <span>احجز رحلتك الآن</span>
              </Link>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
              aria-label="القائمة الرئيسية"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Golden Ornamental Line */}
        <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-secondary to-transparent opacity-40"></div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="إغلاق القائمة"
            className="fixed inset-0 bg-black/40 backdrop-blur-xs cursor-pointer border-0 w-full h-full"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-20 right-0 bottom-0 w-72 bg-surface-container-lowest p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-surface-container-high">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 pb-4 mb-2 border-b border-surface-container-high">
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-secondary/40 shrink-0 bg-primary-container relative">
                  <Image
                    src="/images/logo.png"
                    alt="شعار وكالة رحاب"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-sm font-bold text-primary font-amiri leading-tight">
                    وكالة رحاب للسياحة والحج
                  </span>
                  <span className="text-[10px] text-secondary font-medium">
                    Sanctuary Elegance
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                تصفح البوابة
              </span>
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? "bg-primary-container text-on-primary"
                        : "text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_left
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-surface-container-high flex flex-col gap-3">
              <a
                href="tel:+20223456789"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-container text-primary font-medium text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>هاتف: 0223456789</span>
              </a>
              <a
                href="https://wa.me/201023456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#25D366]/15 text-[#128C7E] font-medium text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>محادثة واتساب 24/7</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
