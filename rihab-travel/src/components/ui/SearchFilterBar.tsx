"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchFilterBarProps {
  onSearch?: (filters: { destination: string; season: string; tier: string }) => void;
  className?: string;
}

export default function SearchFilterBar({ onSearch, className = "" }: SearchFilterBarProps) {
  const router = useRouter();
  const [destination, setDestination] = useState("both");
  const [season, setSeason] = useState("rajab");
  const [tier, setTier] = useState("vip");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ destination, season, tier });
    } else {
      router.push(`/packages?destination=${destination}&season=${season}&tier=${tier}`);
    }
  };

  return (
    <div
      className={`relative z-30 max-w-[1240px] mx-auto px-4 ${className}`}
      id="booking-filter-bar"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-surface-container-lowest rounded-2xl shadow-xl p-5 md:p-6 text-on-surface border border-surface-container-high/60"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Filter 1: الوجهة */}
          <div className="flex flex-col text-right gap-1.5">
            <label className="text-xs font-bold text-on-surface-variant flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                mosque
              </span>
              <span>وجهة الرحلة</span>
            </label>
            <div className="relative bg-surface-container-low rounded-xl px-3.5 py-2.5 border border-outline-variant/30 focus-within:border-primary transition-colors">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-on-surface focus:outline-none cursor-pointer appearance-none"
              >
                <option value="both">مكة المكرمة والمدينة المنورة (كاملة)</option>
                <option value="makkah">مكة المكرمة فقط</option>
                <option value="madinah">المدينة المنورة فقط</option>
                <option value="hajj">باقات الحج الفاخر 1446هـ</option>
              </select>
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] absolute left-3 top-3 pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          {/* Filter 2: توقيت الرحلة */}
          <div className="flex flex-col text-right gap-1.5">
            <label className="text-xs font-bold text-on-surface-variant flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                calendar_month
              </span>
              <span>موسم / شهر السفر</span>
            </label>
            <div className="relative bg-surface-container-low rounded-xl px-3.5 py-2.5 border border-outline-variant/30 focus-within:border-primary transition-colors">
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-on-surface focus:outline-none cursor-pointer appearance-none"
              >
                <option value="rajab">عمرة رجب 1446هـ (يناير / فبراير)</option>
                <option value="shaaban">عمرة شعبان 1446هـ (فبراير / مارس)</option>
                <option value="ramadan">عمرة رمضان المبارك 1446هـ</option>
                <option value="shawwal">عمرة شوال وعيد الفطر</option>
              </select>
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] absolute left-3 top-3 pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          {/* Filter 3: فئة الإقامة */}
          <div className="flex flex-col text-right gap-1.5">
            <label className="text-xs font-bold text-on-surface-variant flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                apartment
              </span>
              <span>فئة الفندق / الإقامة</span>
            </label>
            <div className="relative bg-surface-container-low rounded-xl px-3.5 py-2.5 border border-outline-variant/30 focus-within:border-primary transition-colors">
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-on-surface focus:outline-none cursor-pointer appearance-none"
              >
                <option value="vip">فنادق 5 نجوم VIP (صف أول ساحات)</option>
                <option value="four_star">باقة 4 نجوم مميزة (قريبة من الحرم)</option>
                <option value="economy">الباقة الاقتصادية الميسرة (حافلات ترددية)</option>
              </select>
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] absolute left-3 top-3 pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          {/* Filter 4: زر البحث */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-primary-container text-on-primary font-bold text-sm shadow-md hover:bg-primary transition-all flex items-center justify-center gap-2 h-[48px] cursor-pointer active:scale-95 hover:shadow-lg"
            >
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                search
              </span>
              <span>بحث عن رحلة متاحة</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
