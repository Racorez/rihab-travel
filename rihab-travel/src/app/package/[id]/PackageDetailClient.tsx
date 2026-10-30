"use client";

import React, { useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BookingModal from "@/components/ui/BookingModal";
import { PackageItem } from "@/data/packages";
import Link from "next/link";

interface PackageDetailClientProps {
  pkg: PackageItem;
}

export default function PackageDetailClient({ pkg }: PackageDetailClientProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<"double" | "triple" | "quad" | "single">(
    "double"
  );
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const galleryImages = [
    pkg.imageUrl,
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDFQYLoYO-Rs_1YdbqPQ6801uEtu0wP5CxczWzZYaAQ5ESXTbCzZUBr5BdZzya-5tMqUoPUQSbOXFetlwMU4C8nS_egHBbOhlpIN_L6g4lfK9u_tJ7HD-uYKlMP8g1Ab4OFyZcLw-h_80xwPGfIC0NTo7aEAcjTDwccXn2MmMKbNrx0WiEUC8ctCs392TciVWlyy4W3J21MWbSrwnPlalHCbrFQpRuZv6M4erWPedDs",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJGnrLjXaukkekJVVOohWwkiq9OQE9HGLPOPiqhsIv-3FxWRvzCd1Wb5C8aCFAA_78Rv_QsSdeZFhPWBfo3y2ZEibhXDuHGcO_h4MUKbyG8tqSNB09mrc_3rT6mpVVNRZwNSnFeriOcl281nqC9KtDwpLFxCrTI8Bj_8jP4pvXK_IuEShoDDApcVgMeRJzyvEU_nLSIENMg6k6hPMh8Pwsyf6l96aXO4YtEMlTv3XA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvnTU5-mdeGv5tvbUoHOWFlIUriZ7uPENRcjGQaBQdQadVGk_OsLFtW_XtjShov62TKW2AysKnOsO5Mqi0l85pKM1-LBdIyVE4vGMddFVRrp3wHG0wGhOOgUoCnuC789mdkyFVNnPSIrfJJebB3FHuu9PfwrJ7AdQwMBky7hNquXhbtXngKlsPunC8xNQs1QV_jzdu5g-RpjlqRZDiQ6uCS7R_Dwmz8-8d-TD4hBlm",
  ];

  // Room pricing multiplier
  const multiplier = {
    single: 1.4,
    double: 1.0,
    triple: 0.9,
    quad: 0.85,
  }[selectedRoom];

  const pricePerAdult = Math.round(pkg.pricePerPerson * multiplier);
  const pricePerChild = Math.round(pkg.pricePerPerson * 0.6);
  const totalPrice = adults * pricePerAdult + children * pricePerChild;

  const whatsappInquiryUrl = `https://wa.me/201023456789?text=${encodeURIComponent(
    `السلام عليكم، أرغب في حجز باقة: ${pkg.title}\nنوع الغرفة: ${selectedRoom}\nعدد المسافرين: ${adults} بالغين، ${children} أطفال\nالإجمالي التقديري: ${totalPrice.toLocaleString("ar-EG")} ج.م`
  )}`;

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="w-full pt-20 bg-surface min-h-screen text-right">
        {/* TOP BREADCRUMB & TITLE BAR */}
        <div className="bg-surface-container-lowest border-b border-surface-container-high py-4 px-6 lg:px-12">
          <div className="max-w-[1360px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <Link href="/" className="hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_left
              </span>
              <Link href="/packages" className="hover:text-primary transition-colors">
                برامج العمرة
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_left
              </span>
              <span className="text-primary font-bold truncate max-w-xs sm:max-w-md">
                {pkg.title}
              </span>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs font-bold border border-secondary/20">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>رحلة معتمدة 1446هـ</span>
            </span>
          </div>
        </div>

        {/* MAIN DETAIL GRID */}
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT / MAIN COLUMN (2 COLS) */}
            <div className="lg:col-span-2 space-y-10">
              {/* Media Gallery */}
              <div className="space-y-4">
                <div className="relative w-full h-80 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden bg-primary-container shadow-lg border border-surface-container-high">
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-500"
                    style={{
                      backgroundImage: `url("${galleryImages[activeGalleryIndex]}")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold shadow-md">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        {pkg.distanceIcon}
                      </span>
                      <span>{pkg.distanceBadge}</span>
                    </span>
                  </div>

                  {/* Title overlay on bottom */}
                  <div className="absolute bottom-4 right-6 left-6 text-white">
                    <h1 className="text-2xl sm:text-3xl font-amiri font-bold drop-shadow-md">
                      {pkg.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-surface-container-high/90 mt-1 line-clamp-1">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveGalleryIndex(i)}
                      className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeGalleryIndex === i
                          ? "border-secondary scale-102 shadow-md"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url("${img}")` }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* SPECIFICATION TILES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    icon: "timelapse",
                    label: "المدة الزمنية",
                    value: pkg.duration,
                  },
                  {
                    icon: "flight",
                    label: "خطوط الطيران",
                    value: pkg.airline,
                  },
                  {
                    icon: "train",
                    label: "وسيلة التنقل",
                    value: pkg.transportation,
                  },
                  {
                    icon: "hotel_class",
                    label: "تصنيف الفنادق",
                    value: "5 نجوم صف أول",
                  },
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container-high shadow-xs flex flex-col gap-1 text-right"
                  >
                    <span className="material-symbols-outlined text-[24px] text-secondary">
                      {spec.icon}
                    </span>
                    <span className="text-[11px] text-on-surface-variant mt-1">
                      {spec.label}
                    </span>
                    <span className="text-xs font-bold text-primary truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* PROGRAM OVERVIEW & PHILOSOPHY */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-xs space-y-4">
                <h3 className="text-xl font-bold font-amiri text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    description
                  </span>
                  <span>عن هذا البرنامج المبارك</span>
                </h3>
                <p className="text-sm text-on-surface leading-relaxed">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {pkg.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low text-xs text-on-surface font-medium"
                    >
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* HOTELS SPOTLIGHT */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-xs space-y-6">
                <h3 className="text-xl font-bold font-amiri text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    apartment
                  </span>
                  <span>أماكن الإقامة والضيافة بالفنادق</span>
                </h3>

                {/* Makkah Hotel Card */}
                <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high flex flex-col sm:flex-row items-center gap-5">
                  <div className="w-full sm:w-44 h-32 rounded-xl bg-primary-container shrink-0 overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHNZ3XZ02pA1tfaq-iiza0Rknl3fN1Pi_FOszZj4cIhuhqWW2iNQ5tHnYDrE4-BAYVhx1k1ftNcjmzKktVLR0kHCkR5VZAyNUVyaE8bRTEJp4cGbDFRx22Fbl1ZbXOZjfdo4cq7JnwB_Wvgl74Id11AOEO8TO7YmOQWYx0ZZvfLaQSXbbVCVWRXlfWs_5owY3KyAna8QIsrVaKIGveKrZGq3acrrhVOiPKvCLZ_zIi")',
                      }}
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold">
                      مكة المكرمة
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 text-right w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-primary">
                        {pkg.makkahHotel}
                      </h4>
                      <div className="flex text-amber-500">
                        {[...Array(pkg.makkahHotelStars)].map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        explore
                      </span>
                      <span>الموقع: {pkg.makkahDistance}</span>
                    </p>
                    <p className="text-xs text-on-surface leading-relaxed">
                      بوفيه إفطار وعشاء فاخر، مصاعد مخصصة لساحة الحرم، إطلالات مباشرة على
                      الكعبة، وخدمات غرف فندقية بمواصفات عالمية 5 نجوم.
                    </p>
                  </div>
                </div>

                {/* Madinah Hotel Card */}
                <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high flex flex-col sm:flex-row items-center gap-5">
                  <div className="w-full sm:w-44 h-32 rounded-xl bg-primary-container shrink-0 overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJGnrLjXaukkekJVVOohWwkiq9OQE9HGLPOPiqhsIv-3FxWRvzCd1Wb5C8aCFAA_78Rv_QsSdeZFhPWBfo3y2ZEibhXDuHGcO_h4MUKbyG8tqSNB09mrc_3rT6mpVVNRZwNSnFeriOcl281nqC9KtDwpLFxCrTI8Bj_8jP4pvXK_IuEShoDDApcVgMeRJzyvEU_nLSIENMg6k6hPMh8Pwsyf6l96aXO4YtEMlTv3XA")',
                      }}
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold">
                      المدينة المنورة
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 text-right w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-primary">
                        {pkg.madinahHotel}
                      </h4>
                      <div className="flex text-amber-500">
                        {[...Array(pkg.madinahHotelStars)].map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        explore
                      </span>
                      <span>الموقع: {pkg.madinahDistance}</span>
                    </p>
                    <p className="text-xs text-on-surface leading-relaxed">
                      يقع على بُعد خطوات معدودة من باب السلام والروضة الشريفة مع أجواء
                      طيبة العطرة وإفطار يومي مميز وخدمة ضيافة رفيعة.
                    </p>
                  </div>
                </div>
              </div>

              {/* DAY BY DAY TIMELINE */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-amiri text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      calendar_month
                    </span>
                    <span>الجدول الزمني ومسار الرحلة المباركة</span>
                  </h3>
                  <span className="text-xs text-on-surface-variant font-medium">
                    {pkg.itinerary.length} محطات رئيسية
                  </span>
                </div>

                <div className="relative border-r-2 border-secondary/30 pr-6 mr-3 space-y-8">
                  {pkg.itinerary.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -right-[31px] top-1 w-4 h-4 rounded-full bg-secondary-container border-2 border-white shadow-xs group-hover:scale-125 transition-transform" />

                      <div className="space-y-1.5">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-primary text-on-primary text-[10px] font-bold">
                            اليوم {item.day}
                          </span>
                          <span className="text-xs text-secondary font-bold">
                            {item.location}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-primary font-amiri">
                          {item.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* INCLUSIONS & EXCLUSIONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container-high shadow-xs space-y-4">
                  <h4 className="font-bold text-base text-emerald-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px]">
                      check_circle
                    </span>
                    <span>البرنامج يشمل الآتي:</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-on-surface">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0 mt-0.5">
                          done
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container-high shadow-xs space-y-4">
                  <h4 className="font-bold text-base text-rose-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-rose-600 text-[20px]">
                      cancel
                    </span>
                    <span>البرنامج لا يشمل:</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-on-surface">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-rose-500 text-[16px] shrink-0 mt-0.5">
                          close
                        </span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (1 COL): STICKY BOOKING CALCULATOR */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-surface-container-lowest rounded-3xl p-6 border border-surface-container-high shadow-xl space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-on-surface-variant block mb-1">
                    السعر للفرد في الغرفة الثنائية
                  </span>
                  <div className="flex items-baseline gap-1 text-primary">
                    <span className="text-3xl font-bold font-cairo">
                      {pkg.pricePerPerson.toLocaleString("ar-EG")}
                    </span>
                    <span className="text-xs font-bold text-secondary">
                      {pkg.currency} / فرد
                    </span>
                  </div>
                </div>

                {/* Room Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-on-surface-variant">
                    اختر نوع وتوزيع الغرفة:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "double" as const, label: "ثنائية (أساسي)" },
                      { id: "triple" as const, label: "ثلاثية (-10%)" },
                      { id: "quad" as const, label: "رباعية (-15%)" },
                      { id: "single" as const, label: "مفردة (+40%)" },
                    ].map((room) => (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setSelectedRoom(room.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer text-xs font-semibold ${
                          selectedRoom === room.id
                            ? "border-primary bg-primary-container text-on-primary shadow-xs"
                            : "border-outline-variant/30 bg-surface-container-low text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        {room.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Travelers counter */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>عدد البالغين (+12 سنة)</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 rounded-lg bg-surface-container text-primary font-bold flex items-center justify-center border"
                      >
                        -
                      </button>
                      <span className="font-bold text-sm w-4 text-center">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-7 h-7 rounded-lg bg-surface-container text-primary font-bold flex items-center justify-center border"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>الأطفال (2-11 سنة)</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 rounded-lg bg-surface-container text-primary font-bold flex items-center justify-center border"
                      >
                        -
                      </button>
                      <span className="font-bold text-sm w-4 text-center">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-7 h-7 rounded-lg bg-surface-container text-primary font-bold flex items-center justify-center border"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calculated Total Price */}
                <div className="p-4 rounded-2xl bg-secondary-fixed/30 border border-secondary/30 space-y-1">
                  <span className="text-[11px] text-on-secondary-fixed-variant block">
                    إجمالي السعر التقديري لطلبك:
                  </span>
                  <div className="text-2xl font-bold text-primary font-cairo">
                    {totalPrice.toLocaleString("ar-EG")}{" "}
                    <span className="text-xs text-secondary">{pkg.currency}</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant block">
                    شامل التأشيرة، تذاكر الطيران، الإقامة، والتنقلات
                  </span>
                </div>

                {/* Actions */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary font-bold text-sm shadow-md hover:bg-primary transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      travel_explore
                    </span>
                    <span>طلب حجز فوري للمقاعد</span>
                  </button>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-6 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-xs hover:bg-[#1ebd59] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>استفسر عبر واتساب مباشرة</span>
                  </a>
                </div>

                {/* Guarantees */}
                <div className="pt-4 border-t border-surface-container text-xs space-y-2 text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      security
                    </span>
                    <span>حجز آمن ومعتمد بترخيص وزارة السياحة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      support_agent
                    </span>
                    <span>خدمة عملاء ومرشد ديني مرافق طوال الرحلة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultPackageId={pkg.id}
      />
    </>
  );
}
