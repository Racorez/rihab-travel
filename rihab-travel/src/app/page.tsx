"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import PackageCard from "@/components/ui/PackageCard";
import SearchFilterBar from "@/components/ui/SearchFilterBar";
import BookingModal from "@/components/ui/BookingModal";
import { packagesData } from "@/data/packages";
import Link from "next/link";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>();

  const heroSlides = [
    {
      title: "رحلة إيمانية لا تُنسى إلى بيت الله الحرام",
      badge: "باقات رجب وشعبان VIP 1446هـ",
      badgeIcon: "hotel_class",
      desc: "عيشوا أقدس اللحظات بإقامة حصرية في فنادق الصف الأول على ساحات الحرم المكي مباشرة، مع نخبة من المشايخ وكبار الدعاة لرعايتكم.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDFQYLoYO-Rs_1YdbqPQ6801uEtu0wP5CxczWzZYaAQ5ESXTbCzZUBr5BdZzya-5tMqUoPUQSbOXFetlwMU4C8nS_egHBbOhlpIN_L6g4lfK9u_tJ7HD-uYKlMP8g1Ab4OFyZcLw-h_80xwPGfIC0NTo7aEAcjTDwccXn2MmMKbNrx0WiEUC8ctCs392TciVWlyy4W3J21MWbSrwnPlalHCbrFQpRuZv6M4erWPedDs",
      ctaLabel: "استكشف الباقات المتاحة",
      ctaLink: "#packages-section",
    },
    {
      title: "أرقى خدمات ضيوف الرحمن في رحاب المدينة المنورة",
      badge: "طيبة الطيبة وسكينة الروح",
      badgeIcon: "spa",
      desc: "تنعّموا بجوار خير الأنام ﷺ بإقامة ممتازة في فنادق المنطقة المركزية الشمالية مع تنقلات ميسرة وإشراف ديني متخصص طوال مدة الزيارة.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJGnrLjXaukkekJVVOohWwkiq9OQE9HGLPOPiqhsIv-3FxWRvzCd1Wb5C8aCFAA_78Rv_QsSdeZFhPWBfo3y2ZEibhXDuHGcO_h4MUKbyG8tqSNB09mrc_3rT6mpVVNRZwNSnFeriOcl281nqC9KtDwpLFxCrTI8Bj_8jP4pvXK_IuEShoDDApcVgMeRJzyvEU_nLSIENMg6k6hPMh8Pwsyf6l96aXO4YtEMlTv3XA",
      ctaLabel: "تصفح برامج المدينة ومكة",
      ctaLink: "#packages-section",
    },
    {
      title: "باقات الحج والعمرة الفاخرة لعام 1446هـ",
      badge: "تنقلات فائقة الفخامة",
      badgeIcon: "train",
      desc: "طيران مباشر، مقاعد درجة رجال الأعمال بقطار الحرمين السريع، وإجراءات تأشيرة سريعة لتتفرغ تماماً للعبادة والخشوع.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvnTU5-mdeGv5tvbUoHOWFlIUriZ7uPENRcjGQaBQdQadVGk_OsLFtW_XtjShov62TKW2AysKnOsO5Mqi0l85pKM1-LBdIyVE4vGMddFVRrp3wHG0wGhOOgUoCnuC789mdkyFVNnPSIrfJJebB3FHuu9PfwrJ7AdQwMBky7hNquXhbtXngKlsPunC8xNQs1QV_jzdu5g-RpjlqRZDiQ6uCS7R_Dwmz8-8d-TD4hBlm",
      ctaLabel: "احجز مقعدك المبكر",
      ctaLink: "#booking-filter-bar",
    },
  ];

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const filteredPackages =
    activeCategory === "all"
      ? packagesData
      : packagesData.filter((p) => p.category === activeCategory);

  const openBookingFor = (pkgId?: string) => {
    setBookingPackageId(pkgId);
    setIsBookingOpen(true);
  };

  return (
    <>
      <Header onOpenBooking={() => openBookingFor()} />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        {/* SECTION 1: HERO SLIDER & QUICK BOOKING BAR */}
        <section className="relative w-full overflow-hidden bg-primary text-on-primary">
          <div
            className="relative w-full h-[620px] md:h-[680px] lg:h-[720px] transition-all duration-700 ease-in-out"
            id="hero-slider"
          >
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  activeSlide === idx
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${slide.bgImage}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/30" />

                {/* Content */}
                <div className="relative max-w-[1360px] mx-auto h-full px-6 lg:px-12 flex flex-col justify-center pb-24 md:pb-28 text-right">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-secondary-fixed text-xs font-bold mb-4 shadow-sm border border-white/10">
                      <span className="material-symbols-outlined text-[16px] text-secondary-container">
                        {slide.badgeIcon}
                      </span>
                      <span>{slide.badge}</span>
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-amiri text-on-primary font-bold leading-tight mb-4 drop-shadow-md">
                      {slide.title}
                    </h1>

                    <p className="text-sm sm:text-base text-surface-container-high mb-8 leading-relaxed max-w-xl">
                      {slide.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={slide.ctaLink}
                        className="px-8 py-3.5 rounded-full bg-secondary-container text-on-secondary-fixed font-bold text-sm shadow-lg hover:bg-secondary transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                      >
                        <span>{slide.ctaLabel}</span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_downward
                        </span>
                      </a>

                      <button
                        type="button"
                        onClick={() => openBookingFor()}
                        className="px-6 py-3.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary hover:bg-surface-container-lowest/30 transition-all font-bold text-sm flex items-center gap-2 cursor-pointer border border-white/20 active:scale-95"
                      >
                        <span className="material-symbols-outlined text-[20px] text-primary-fixed">
                          chat
                        </span>
                        <span>تحدث مع خبير العمرة</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls & Dots */}
          <div className="absolute bottom-24 lg:bottom-28 right-6 lg:right-12 z-20 flex items-center gap-3">
            <button
              onClick={() =>
                setActiveSlide(
                  (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
                )
              }
              aria-label="السابق"
              className="w-10 h-10 rounded-full bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 backdrop-blur-md text-on-primary flex items-center justify-center transition-all shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>

            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary-container/70 backdrop-blur-md border border-white/10">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`rounded-full transition-all cursor-pointer ${
                    activeSlide === i
                      ? "w-4 h-2 bg-secondary-container"
                      : "w-2 h-2 bg-surface-container-high/60"
                  }`}
                  aria-label={`الشريحة ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveSlide((prev) => (prev + 1) % heroSlides.length)
              }
              aria-label="التالي"
              className="w-10 h-10 rounded-full bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 backdrop-blur-md text-on-primary flex items-center justify-center transition-all shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
          </div>

          {/* DOCKED SEARCH & FILTER BAR */}
          <SearchFilterBar className="-mt-12 mb-12" />
        </section>

        {/* SECTION 2: LIVE HARAMAIN PRAYER TIMES & WEATHER BAR */}
        <section className="max-w-[1360px] mx-auto px-6 lg:px-12 mb-12">
          <div className="bg-surface-container-low rounded-2xl p-4 sm:p-5 border border-surface-container-high/60 flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Prayer times indicator */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  schedule
                </span>
              </div>
              <div>
                <span className="text-xs font-bold text-primary block">
                  مواقيت الصلاة بتوقيت المسجد الحرام (مكة المكرمة):
                </span>
                <span className="text-xs text-on-surface-variant">
                  اليوم: الفجر 05:08 | الشروق 06:27 | الظهر 12:12 | العصر 03:32 |
                  المغرب 05:56 | العشاء 07:26
                </span>
              </div>
            </div>

            {/* Weather status */}
            <div className="flex items-center gap-6 text-xs font-semibold text-on-surface-variant border-t lg:border-t-0 lg:border-r border-surface-container-high pt-2 lg:pt-0 lg:pr-6">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-amber-500">
                  sunny
                </span>
                <span>مكة المكرمة: 31°C مشمس</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-sky-500">
                  partly_cloudy_day
                </span>
                <span>المدينة المنورة: 27°C معتدل</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: UMRAH PACKAGES (شبكة كروت برامج العمرة) */}
        <section
          className="py-8 px-6 lg:px-12 max-w-[1360px] mx-auto w-full"
          id="packages-section"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold mb-2">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                <span>برامج معتمدة ومضمونة</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-amiri text-primary font-bold">
                باقات وبرامج العمرة المختارة
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mt-1">
                باقات متكاملة تشمل التأشيرة، تذاكر الطيران، الإقامة بأفخم الفنادق،
                والتنقلات المكيفة بإشراف ديني كامل.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-surface-container rounded-xl p-1.5 self-start md:self-auto">
              {[
                { id: "all", label: "الكل" },
                { id: "vip", label: "VIP 5 نجوم" },
                { id: "four_star", label: "باقات 4 نجوم" },
                { id: "economy", label: "الاقتصادية الميسرة" },
                { id: "ramadan", label: "العشر الأواخر" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-primary-container text-on-primary shadow-xs"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onBookNow={(p) => openBookingFor(p.id)}
              />
            ))}
          </div>

          {/* View All Packages Link */}
          <div className="text-center pt-2 pb-8">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-bold text-sm transition-all border border-outline-variant/30 shadow-xs"
            >
              <span>استعراض كافة البرامج وتفاصيل الرحلات</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </Link>
          </div>
        </section>

        {/* SECTION 4: THE FOUR PILLARS OF SANCTUARY HOSPITALITY */}
        <section className="py-16 bg-surface-container-low border-y border-surface-container-high/60">
          <div className="max-w-[1360px] mx-auto px-6 lg:px-12 text-right">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">
                لماذا يختار ضيوف الرحمن وكالة رحاب؟
              </span>
              <h2 className="text-2xl sm:text-3xl font-amiri text-primary font-bold">
                أركان الضيافة الإيمانية المتكاملة
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                رحلة العمرة رحلة روح لا تحتمل المشقة؛ لذا صممنا كل تفصيلة لتوفر لكم
                السكينة والاطمئنان.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "apartment",
                  title: "فنادق صف أول مباشر",
                  desc: "إقامة استثنائية في فنادق ساحات الحرمين المباشرة كدار التوحيد وسويس أوتيل المقام دون الحاجة لأي مشقة في المشي.",
                },
                {
                  icon: "train",
                  title: "قطار الحرمين السريع VIP",
                  desc: "تنقل مريح وسريع بين مكة المكرمة والمدينة المنورة في ساعتين فقط على متن مقاعد درجة رجال الأعمال الفاخرة.",
                },
                {
                  icon: "menu_book",
                  title: "إشراف ديني ومرافقة دعوية",
                  desc: "نخبة من علماء الأزهر الشريف يرافقون كل فوج لشرح فقه المناسك، تنظيم الزيارات النبوية، والإجابة عن الفتاوى.",
                },
                {
                  icon: "support_agent",
                  title: "خدمة معتمرين 24/7",
                  desc: "مندوبون ميدانيون بالمطارات ومداخل الفنادق جاهزون على مدار الساعة لخدمتكم واستخراج تصاريح الروضة الشريفة.",
                },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow flex flex-col text-right"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary font-amiri mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PILGRIM TESTIMONIALS */}
        <section className="py-16 px-6 lg:px-12 max-w-[1360px] mx-auto w-full text-right">
          <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">
                تجارب حقيقية
              </span>
              <h2 className="text-2xl sm:text-3xl font-amiri text-primary font-bold">
                ماذا يقول معتمرونا الكرام؟
              </h2>
            </div>
            <div className="flex items-center gap-1 text-secondary">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[20px] text-amber-500"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
              ))}
              <span className="text-sm font-bold text-on-surface mr-2">
                تقييم 4.9 من 5 (أكثر من 3,200 معتمر موثق)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "د. عبد الرحمن المنشاوي",
                role: "معتمر باقة الهدى VIP - رجب 1445هـ",
                comment:
                  "كانت تجربة استثنائية بكل المقاييس. فندق دار التوحيد صف أول مباشر وخدمة استلام الحقائب وتصاريح الروضة تمت بسلاسة تامة. بارك الله في جهود وكالة رحاب.",
              },
              {
                name: "أ. فاطمة الزهراء الشربيني",
                role: "معتمرة باقة العشر الأواخر 1445هـ",
                comment:
                  "مرافقة الشيخ الفاضل للفوج أضافت بعداً روحانياً عظيماً للعمرة، وركوب قطار الحرمين وفر علينا إرهاق السفر الطويل. شكراً لفريق العمل الوفي.",
              },
              {
                name: "م. إبراهيم خليل القاضي",
                role: "حجز عائلي لـ 6 أفراد - شوال 1445هـ",
                comment:
                  "تنظيم متقن ومواعيد دقيقة من لحظة وصولنا لمطار جدة وحتى توديعنا بالمدينة. كل التقدير لخدمة العملاء الذين كانوا متواجدين معنا على الواتساب لحظة بلحظة.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/60 shadow-xs flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span
                        key={j}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    &quot;{review.comment}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-container flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm">
                    {review.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary">{review.name}</h4>
                    <p className="text-[11px] text-on-surface-variant">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: VIP CUSTOM INQUIRY BANNER */}
        <section className="max-w-[1360px] mx-auto px-6 lg:px-12 mb-16">
          <div className="bg-gradient-to-r from-primary to-primary-container rounded-3xl p-8 sm:p-12 text-on-primary flex flex-col md:flex-row items-center justify-between gap-8 text-right shadow-xl">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-secondary-fixed text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-[16px]">
                  groups
                </span>
                <span>خدمة الهيئات والمجموعات العائلية</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-amiri font-bold leading-tight mb-3">
                هل تبحث عن برنامج مخصص لعائلتك أو شركتك؟
              </h3>
              <p className="text-xs sm:text-sm text-surface-container-high leading-relaxed">
                يسعدنا تصميم جدول زمني خاص يراعي متطلباتكم الخاصة مع حجز فنادق محددة،
                طيران خاص، وسيارات عائلية فارهة بسائق خاص.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openBookingFor()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-secondary-container text-on-secondary-fixed font-bold text-sm shadow-md hover:bg-secondary transition-all cursor-pointer active:scale-95"
              >
                طلب عرض سعر مخصص
              </button>
              <a
                href="https://wa.me/201023456789?text=أرغب%20في%20ترتيب%20برنامج%20عمرة%20مخصص%20لمجموعة"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all border border-white/20"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>واتساب مباشر</span>
              </a>
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
