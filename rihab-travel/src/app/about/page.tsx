"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BookingModal from "@/components/ui/BookingModal";
import Link from "next/link";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const stats = [
    { num: "45,000+", label: "معتمر وحاج خدمناهم بشرف" },
    { num: "15+", label: "عاماً من التميز والريادة" },
    { num: "98.6%", label: "نسبة رضا ضيوف الرحمن" },
    { num: "120+", label: "فوجاً سنوياً إلى الحرمين" },
  ];

  const scholars = [
    {
      name: "فضيلة الشيخ د. أحمد السيد عبد الرحمن",
      role: "أستاذ الفقه المقارن بجامعة الأزهر الشريف ورئيس اللجنة الدينية",
      bio: "يشرف على تدقيق المسارات الشرعية ومرافقة أفواج VIP والإجابة عن فتاوى المناسك.",
      initials: "أ.س",
    },
    {
      name: "فضيلة الشيخ محمد فتحي النجار",
      role: "إمام وخطيب بوزارة الأوقاف ومرشد ديني لأفواج العمرة",
      bio: "خبرة 12 عاماً في إدارة مناسك المعتمرين وتقديم الدروس الإيمانية بساحات الحرم.",
      initials: "م.ن",
    },
    {
      name: "فضيلة الدكتور مصطفى كمال الدين",
      role: "باحث شرعي متخصص في المعالم والتاريخ النبوي الشريف",
      bio: "يقود جولات المزارات النبوية بمكة والمدينة المنورة بالشرح التوثيقي الماتع.",
      initials: "م.ك",
    },
  ];

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="w-full pt-20 bg-surface min-h-screen text-right">
        {/* HERO BANNER */}
        <section className="bg-primary text-on-primary py-12 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fe932c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-[1360px] mx-auto relative z-10">
            <div className="flex items-center gap-2 text-xs text-primary-fixed-dim mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_left
              </span>
              <span className="text-white font-bold">عن وكالة رحاب</span>
            </div>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold mb-3 shadow-xs">
                <span className="material-symbols-outlined text-[16px]">
                  history
                </span>
                <span>خبرة راسخة منذ عام 2011م</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-amiri font-bold leading-tight">
                عن وكالة رحاب - رحلتكم الإيمانية بأيادٍ أمينة
              </h1>
              <p className="text-xs sm:text-sm text-surface-container-high mt-2 leading-relaxed">
                انطلقنا من رسالة سامية تجعل من خدمة ضيوف الرحمن شرفاً ومسؤولية عظمى،
                مقدمين مفهوماً راقياً يجمع بين السكينة الروحية والرفاهية العصرية.
              </p>
            </div>
          </div>
        </section>

        {/* METRICS COUNTER BAR */}
        <section className="max-w-[1360px] mx-auto px-6 lg:px-12 -mt-6 relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-lg text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary font-cairo mb-1">
                  {s.num}
                </div>
                <div className="text-xs text-on-surface-variant font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR STORY & VISION */}
        <section className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block">
                قصة التأسيس والمشوار
              </span>
              <h2 className="text-2xl sm:text-3xl font-amiri font-bold text-primary leading-tight">
                أكثر من 15 عاماً في خدمة ضيوف بيت الله الحرام
              </h2>
              <p className="text-xs sm:text-sm text-on-surface leading-relaxed">
                تأسست وكالة رحاب للسياحة برؤية ريادية تهدف إلى إزالة كل مشقة عن كاهل
                المعتمر والحاج. بدأنا كوكالة متخصصة في برامج العمرة الفاخرة، واليوم نعد
                من كبرى الوكالات السياحية المعتمدة رسمياً في جمهورية مصر العربية والمملكة
                العربية السعودية.
              </p>
              <p className="text-xs sm:text-sm text-on-surface leading-relaxed">
                نعتمد شراكات استراتيجية طويلة الأمد مع كبرى السلاسل الفندقية العالمية
                المطلة على ساحات الحرمين، إلى جانب عضويتنا الفعالة في منظمة النقل الجوي
                الدولي (IATA)، مما يضمن لعملائنا أفضل الأسعار وتأكيد فوري للحجوزات.
              </p>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-6 sm:p-8 border border-surface-container-high space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-surface-container-high/60">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md border border-secondary/40 shrink-0 bg-primary-container relative">
                  <Image
                    src="/images/logo.png"
                    alt="شعار وكالة رحاب"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary font-amiri">
                    ثوابتنا وقيمنا المؤسسية
                  </h3>
                  <span className="text-xs text-secondary font-medium">وكالة رحاب - Sanctuary Elegance</span>
                </div>
              </div>
              <div className="space-y-4 text-xs">
                {[
                  {
                    title: "الصدق والأمانة المطلقة",
                    desc: "مطابقة تامة بين ما يُعرض في برامجنا وما يجده المعتمر واقعاً على أرض الواقع دون أي مفاجآت.",
                  },
                  {
                    title: "إكرام ضيف الرحمن",
                    desc: "معاملة كل معتمر كفرد من أسرتنا، مع توفير أقصى درجات الرعاية والمتابعة الشخصية.",
                  },
                  {
                    title: "الإرشاد الشرعي الموثوق",
                    desc: "مرافقة علمية ودعوية مستمرة تضمن أداء المناسك على الوجه الأكمل المطابق للسنة النبوية.",
                  },
                ].map((val, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                        verified
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary mb-0.5">
                        {val.title}
                      </h4>
                      <p className="text-on-surface-variant leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OFFICIAL ACCREDITATIONS & LICENSES */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-surface-container-high shadow-xs">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                تراخيص واعتمادات حكومية
              </span>
              <h3 className="text-2xl font-amiri font-bold text-primary">
                ثقتكم في أيدٍ أمينة معتمدة
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high text-center space-y-2">
                <span className="material-symbols-outlined text-[36px] text-primary">
                  policy
                </span>
                <h4 className="font-bold text-sm text-primary">
                  وزارة السياحة والآثار المصرية
                </h4>
                <p className="text-xs text-on-surface-variant">
                  ترخيص سياحي رقم 1248 فئة (أ) ساري ومعتمد لكافة أعمال الحج والعمرة.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high text-center space-y-2">
                <span className="material-symbols-outlined text-[36px] text-secondary">
                  mosque
                </span>
                <h4 className="font-bold text-sm text-primary">
                  وزارة الحج والعمرة السعودية
                </h4>
                <p className="text-xs text-on-surface-variant">
                  وكيل عمرة رسمي موثق عبر البوابة الإلكترونية ومنصة نسك Nusuk.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high text-center space-y-2">
                <span className="material-symbols-outlined text-[36px] text-primary">
                  flight
                </span>
                <h4 className="font-bold text-sm text-primary">
                  عضوية المنظمة الدولية IATA
                </h4>
                <p className="text-xs text-on-surface-variant">
                  عضو رسمي بالاتحاد الدولي للنقل الجوي لإصدار تذاكر الطيران المباشرة.
                </p>
              </div>
            </div>
          </div>

          {/* RELIGIOUS ADVISORY BOARD */}
          <div className="space-y-8 pt-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                هيئة الإشراف والتوجيه الديني
              </span>
              <h3 className="text-2xl font-amiri font-bold text-primary">
                نخبة من علماء الأزهر الشريف بمرافقتكم
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                يرافق كل فوج مشرف ديني معتمد للإشابة عن الاستفسارات وتوجيه الحجيج
                والمعتمرين طوال مدة الرحلة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scholars.map((sch, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container-high shadow-xs space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-base font-amiri shadow-xs">
                      {sch.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary">{sch.name}</h4>
                      <p className="text-[11px] text-secondary font-medium">
                        {sch.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {sch.bio}
                  </p>
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
      />
    </>
  );
}
