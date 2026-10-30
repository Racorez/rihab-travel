"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import PackageCard from "@/components/ui/PackageCard";
import BookingModal from "@/components/ui/BookingModal";
import { packagesData } from "@/data/packages";
import Link from "next/link";

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(130000);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("recommended");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Filter logic
  const filteredPackages = useMemo(() => {
    let result = packagesData.filter((pkg) => {
      // Category filter
      if (selectedCategory !== "all" && pkg.category !== selectedCategory) {
        return false;
      }
      // Price filter
      if (pkg.pricePerPerson > maxPrice) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesMakkah = pkg.makkahHotel.toLowerCase().includes(query);
        const matchesMadinah = pkg.madinahHotel.toLowerCase().includes(query);
        if (!matchesTitle && !matchesMakkah && !matchesMadinah) {
          return false;
        }
      }
      return true;
    });

    // Sort logic
    if (sortBy === "price_asc") {
      result = [...result].sort((a, b) => a.pricePerPerson - b.pricePerPerson);
    } else if (sortBy === "price_desc") {
      result = [...result].sort((a, b) => b.pricePerPerson - a.pricePerPerson);
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, maxPrice, searchQuery, sortBy]);

  const openBookingFor = (pkgId?: string) => {
    setBookingPackageId(pkgId);
    setIsBookingOpen(true);
  };

  const faqs = [
    {
      q: "ما هي الأوراق المطلوبة لاستخراج تأشيرة العمرة 1446هـ؟",
      a: "جواز سفر سارٍ لمدة لا تقل عن 6 أشهر، صورتان شخصيتان بخلفية بيضاء، وشهادة التطعيمات المعتمدة. تقوم وكالتنا بإنهاء كافة إجراءات التأشيرة والتأمين الطبي إلكترونياً عبر منصة نسك دون الحاجة لحضوركم إلى القنصلية.",
    },
    {
      q: "هل تشمل الباقات تذاكر الطيران وقطار الحرمين؟",
      a: "نعم، كافة باقاتنا (VIP، 4 نجوم، والاقتصادية) شاملة تذاكر الطيران ذهاب وعودة والانتقالات كاملة. باقات VIP تشمل تذاكر قطار الحرمين السريع درجة رجال الأعمال.",
    },
    {
      q: "ما هي سياسة السداد وطرق الدفع المتاحة؟",
      a: "يمكنكم دفع 30% كدفعة مقدمة لتأكيد حجز الطيران والفندق، ويُستكمل باقي المبلغ قبل موعد السفر بـ 10 أيام. نقبل الدفع النقدي بفروعنا، التحويل البنكي، أو بطاقات الائتمان.",
    },
    {
      q: "هل يمكن تفصيل برنامج خاص لعائلتي أو لمجموعة خاصة؟",
      a: "بكل تأكيد. لدينا قسم متخصص في خدمة الوفود والعائلات الكبيرة لتنسيق طيران خاص، حجز أجنحة فندقية متصلة، وتوفير سيارات عائلية VIP بسائق خاص.",
    },
  ];

  return (
    <>
      <Header onOpenBooking={() => openBookingFor()} />

      <main className="w-full pt-20 bg-surface min-h-screen text-right">
        {/* HERO BANNER */}
        <section className="bg-primary text-on-primary py-12 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fe932c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-[1360px] mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-primary-fixed-dim mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_left
              </span>
              <span className="text-white font-bold">برامج وباقات العمرة</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold mb-3 shadow-xs">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  <span>موسم 1446هـ - رحلات مؤكدة</span>
                </span>
                <h1 className="text-3xl sm:text-4xl font-amiri font-bold leading-tight">
                  برامج وباقات العمرة لموسم 1446هـ
                </h1>
                <p className="text-xs sm:text-sm text-surface-container-high max-w-xl mt-2 leading-relaxed">
                  اختر الباقة الأنسب لتطلعاتك من بين تشكيلة واسعة تلبي كافة الاحتياجات؛
                  من برامج الصف الأول الملكية وحتى الخيارات الاقتصادية الميسرة.
                </p>
              </div>

              {/* Quick WhatsApp Assistance */}
              <div className="flex items-center gap-3 bg-primary-container/60 p-3 rounded-2xl border border-primary-fixed-dim/20">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white block">
                    مستشار العمرة جاهز لمساعدتكم
                  </span>
                  <a
                    href="https://wa.me/201023456789"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-secondary-fixed hover:underline"
                  >
                    انقر لبدء محادثة فورية
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATALOG CONTENT AREA */}
        <section className="max-w-[1360px] mx-auto px-6 lg:px-12 py-12">
          {/* Top Control Bar: Search & Sort */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 border border-surface-container-high/60 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px] absolute right-3 top-3">
                search
              </span>
              <input
                id="package-search-input"
                name="search"
                aria-label="البحث عن فندق أو برنامج"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث باسم الفندق أو البرنامج..."
                className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute left-3 top-3 text-on-surface-variant hover:text-primary"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            {/* Results count & Sort */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-bold text-primary bg-primary-container/10 px-3 py-1.5 rounded-lg border border-primary/20">
                عرض {filteredPackages.length} من {packagesData.length} باقات
              </span>

              <div className="flex items-center gap-2">
                <label className="text-xs text-on-surface-variant whitespace-nowrap">
                  الترتيب:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="py-2 px-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs font-semibold text-on-surface focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="recommended">الأكثر طلباً وموصى به</option>
                  <option value="price_asc">السعر: من الأقل للأعلى</option>
                  <option value="price_desc">السعر: من الأعلى للأقل</option>
                  <option value="rating">الأعلى تقييماً</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* SIDEBAR FILTERS */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container-high/60 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                  <h3 className="font-bold text-base text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      tune
                    </span>
                    <span>تصفية النتائج</span>
                  </h3>
                  {(selectedCategory !== "all" ||
                    maxPrice < 130000 ||
                    searchQuery) && (
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setMaxPrice(130000);
                        setSearchQuery("");
                      }}
                      className="text-xs text-secondary hover:underline cursor-pointer"
                    >
                      إعادة ضبط
                    </button>
                  )}
                </div>

                {/* Filter 1: Category */}
                <div>
                  <h4 className="text-xs font-bold text-on-surface-variant uppercase mb-3">
                    فئة البرنامج
                  </h4>
                  <div className="space-y-2">
                    {[
                      { id: "all", label: "كافة الباقات المتاحة" },
                      { id: "vip", label: "باقات VIP 5 نجوم (صف أول)" },
                      { id: "four_star", label: "باقات 4 نجوم ديلوكس" },
                      { id: "economy", label: "الباقات الاقتصادية الميسرة" },
                      { id: "ramadan", label: "عمرة العشر الأواخر" },
                    ].map((cat) => (
                      <label
                        key={cat.id}
                        className="flex items-center gap-2.5 text-xs text-on-surface cursor-pointer p-1.5 rounded-lg hover:bg-surface-container transition-colors"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.id}
                          onChange={() => setSelectedCategory(cat.id)}
                          className="accent-primary w-4 h-4"
                        />
                        <span>{cat.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filter 2: Max Price Range */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-on-surface-variant mb-2">
                    <span>الحد الأقصى للسعر:</span>
                    <span className="text-primary font-cairo">
                      {maxPrice.toLocaleString("ar-EG")} ج.م
                    </span>
                  </div>
                  <input
                    id="max-price-range"
                    name="maxPrice"
                    aria-label="الحد الأقصى للسعر"
                    type="range"
                    min={35000}
                    max={130000}
                    step={5000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-on-surface-variant mt-1">
                    <span>35,000 ج.م</span>
                    <span>130,000 ج.م</span>
                  </div>
                </div>

                {/* Inclusions highlight */}
                <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20 space-y-2 text-xs">
                  <div className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      check_circle
                    </span>
                    <span>ضمان وكالة رحاب لجميع الباقات:</span>
                  </div>
                  <ul className="text-on-surface-variant space-y-1 list-disc list-inside">
                    <li>تأشيرة العمرة الرسمية والتأمين الشامل</li>
                    <li>تذاكر طيران مؤكدة ذهاب وعودة</li>
                    <li>إشراف ديني ومرافقة دعوية لكافة الأفواج</li>
                    <li>خدمة عملاء وخط ساخن بالمملكة 24 ساعة</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PACKAGES GRID */}
            <div className="lg:col-span-3">
              {filteredPackages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPackages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      onBookNow={(p) => openBookingFor(p.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-surface-container-lowest rounded-2xl p-12 text-center border border-surface-container-high/60 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container mx-auto flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-[32px]">
                      search_off
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-primary">
                    لم نجد برامج مطابقة لمعايير البحث
                  </h4>
                  <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                    جرب تغيير نطاق السعر أو اختيار فئة برامج أخرى، أو تواصل معنا
                    لتفصيل برنامج خاص بكم.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setMaxPrice(130000);
                      setSearchQuery("");
                    }}
                    className="px-6 py-2.5 rounded-full bg-primary-container text-on-primary text-xs font-bold shadow-xs hover:bg-primary transition-all"
                  >
                    عرض كافة البرامج
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="mt-16 pt-12 border-t border-surface-container-high">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">
                أسئلة شائعة
              </span>
              <h3 className="text-2xl font-amiri font-bold text-primary">
                كل ما تحتاج لمعرفته حول الحجز وبرامج العمرة
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-xl border border-surface-container-high/60 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-right flex items-center justify-between gap-4 font-bold text-sm text-primary hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="material-symbols-outlined text-[20px] text-secondary shrink-0">
                      {openFaq === idx ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 pt-1 text-xs text-on-surface-variant leading-relaxed border-t border-surface-container bg-surface-container-low/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultPackageId={bookingPackageId}
      />
    </>
  );
}
