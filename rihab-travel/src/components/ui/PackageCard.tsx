"use client";

import React from "react";
import Link from "next/link";
import { PackageItem } from "@/data/packages";

interface PackageCardProps {
  pkg: PackageItem;
  onBookNow?: (pkg: PackageItem) => void;
}

export default function PackageCard({ pkg, onBookNow }: PackageCardProps) {
  const whatsappUrl = `https://wa.me/201023456789?text=${encodeURIComponent(
    `السلام عليكم، أود الاستفسار والحجز لـ ${pkg.title}`
  )}`;

  return (
    <div className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 text-right">
      {/* Visual Header / Media */}
      <div className="relative w-full h-56 overflow-hidden bg-primary-container">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
          style={{ backgroundImage: `url("${pkg.imageUrl}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold shadow-md">
            {pkg.badge}
          </span>
        </div>

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary text-xs font-bold flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary">
              {pkg.distanceIcon || "explore"}
            </span>
            <span>{pkg.distanceBadge}</span>
          </span>
        </div>

        {/* Bottom image metadata */}
        <div className="absolute bottom-3 right-4 left-4 flex justify-between items-center text-on-primary z-10">
          <span className="text-xs font-medium bg-primary/70 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
            {pkg.duration}
          </span>
          <div className="flex items-center gap-1 text-secondary-fixed bg-black/30 backdrop-blur-xs px-2 py-0.5 rounded-md">
            <span
              className="material-symbols-outlined text-[16px] text-amber-400"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span className="text-xs font-bold text-white">
              {pkg.rating} ({pkg.reviewsCount})
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div>
          <h3 className="text-lg font-bold text-primary mb-1.5 font-amiri leading-snug group-hover:text-primary-container transition-colors">
            {pkg.title}
          </h3>
          <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-4">
            {pkg.subtitle}
          </p>

          {/* Details list */}
          <div className="space-y-2 text-xs text-on-surface border-t border-surface-container pt-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[17px] shrink-0">
                apartment
              </span>
              <span className="font-medium truncate">{pkg.makkahHotel}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[17px] shrink-0">
                hotel
              </span>
              <span className="font-medium truncate">{pkg.madinahHotel}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[17px] shrink-0">
                flight_takeoff
              </span>
              <span className="font-medium truncate">{pkg.airline}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[17px] shrink-0">
                train
              </span>
              <span className="font-medium truncate">{pkg.transportation}</span>
            </div>
          </div>
        </div>

        {/* Price & Action Dock */}
        <div className="pt-3 bg-surface-container-low/50 rounded-xl p-3.5 border border-surface-container">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xs text-on-surface-variant">تبدأ الأسعار من:</span>
            <div className="flex items-baseline gap-1 text-primary">
              <span className="text-xl font-bold font-cairo">
                {pkg.pricePerPerson.toLocaleString("ar-EG")}
              </span>
              <span className="text-xs font-bold text-secondary">
                {pkg.currency} / للفرد
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {onBookNow ? (
              <button
                type="button"
                onClick={() => onBookNow(pkg)}
                className="py-2.5 px-3 rounded-lg bg-surface-container-lowest text-primary font-bold text-xs shadow-xs hover:bg-surface-container transition-all flex items-center justify-center gap-1 border border-outline-variant/30 cursor-pointer"
              >
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  bolt
                </span>
                <span>حجز سريع</span>
              </button>
            ) : (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-surface-container-lowest text-primary font-bold text-xs shadow-xs hover:bg-[#25D366]/10 hover:text-[#128C7E] transition-all flex items-center justify-center gap-1.5 border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[#25D366] text-[18px]">
                  chat
                </span>
                <span>واتساب</span>
              </a>
            )}

            <Link
              href={`/package/${pkg.id}`}
              className="py-2.5 px-3 rounded-lg bg-primary-container text-on-primary font-bold text-xs shadow-xs hover:bg-primary transition-all flex items-center justify-center gap-1 active:scale-95"
            >
              <span>تفاصيل البرنامج</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_back
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
