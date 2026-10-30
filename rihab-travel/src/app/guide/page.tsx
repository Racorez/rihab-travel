"use client";

import React, { useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BookingModal from "@/components/ui/BookingModal";
import Link from "next/link";

export default function GuidePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"rituals" | "packing" | "sites" | "duas">(
    "rituals"
  );

  // Packing list state
  const [packingItems, setPackingItems] = useState([
    { id: 1, text: "جواز السفر الأصلي سارٍ لأكثر من 6 أشهر", checked: true, category: "docs" },
    { id: 2, text: "تأشيرة العمرة وتأمين السفر المعتمد مطبوعين", checked: true, category: "docs" },
    { id: 3, text: "تثبيت تطبيق 'نُسك' Nusuk وتأكيد تصريح الروضة الشريفة", checked: true, category: "docs" },
    { id: 4, text: "إحرام قطني مريح (طقمين للرجال) مع حزام إحرام آمن", checked: false, category: "clothes" },
    { id: 5, text: "حذاء مريح وسهل الخلع للمشي وحذاء مخصص للطواف", checked: false, category: "clothes" },
    { id: 6, text: "مقص صغير للأظافر والشعر (يُوضع في حقيبة الشحن وليس اليد)", checked: false, category: "clothes" },
    { id: 7, text: "أدوية شخصية مع روشتة الطبيب ومسكنات وخافض حرارة", checked: false, category: "medical" },
    { id: 8, text: "مرطب غير معطر وكريم للحماية من التسلخات", checked: false, category: "medical" },
    { id: 9, text: "مصحف جيب وكتيب أدعية العمرة والمأثورات", checked: false, category: "spiritual" },
    { id: 10, text: "شاحن متنقل (باور بانك) متوافق مع شروط الطيران", checked: false, category: "devices" },
  ]);

  const toggleCheck = (id: number) => {
    setPackingItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const rituals = [
    {
      step: 1,
      title: "الإحرام من الميقات",
      subtitle: "النية والتجرد وبداية الرحلة الإيمانية",
      icon: "person",
      desc: "الاغتسال والتطيب في البدن (لا في ثياب الإحرام) ولبس رداءي الإحرام الأبيضين للرجال، ثم عقد النية قائلاً: 'لبيك اللهم عمرة'. وبعدها التلبية المستمرة بصوت خاشع.",
      points: [
        "التلبية: 'لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك'",
        "محظورات الإحرام: قص الشعر أو الأظافر، مس الطيب، تغطية الرأس للرجال، ولبس المخيط للرجال",
        "تستمر التلبية حتى رؤية الكعبة المشرفة وبدء الطواف",
      ],
    },
    {
      step: 2,
      title: "طواف القدوم حول الكعبة",
      subtitle: "سبعة أشواط تبدأ من محاذاة الحجر الأسود",
      icon: "sync",
      desc: "دخول المسجد الحرام بالقدم اليمنى والدعاء بمأثور الدخول. يبدأ كل شوط من الحجر الأسود بالتكبير، وتكون الكعبة عن يسار المعتمر، وينتهي الشوط عند الحجر الأسود.",
      points: [
        "الاضطباع للرجال (كشف الكتف الأيمن) في طواف العمرة كاملاً",
        "الرمل (المشي السريع المقارب الخطى) في الأشواط الثلاثة الأولى للرجال إن تيسر",
        "استلام الركن اليماني بيدك إن تيسر، والدعاء بينه وبين الحجر: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار'",
        "صلاة ركعتين خلف مقام إبراهيم عليه السلام، ثم الشرب من ماء زمزم والتضلع منه",
      ],
    },
    {
      step: 3,
      title: "السعي بين الصفا والمروة",
      subtitle: "سبعة أشواط تخليداً لصبر أمنا هاجر عليها السلام",
      icon: "directions_walk",
      desc: "الخروج إلى الصفا وقراءة قوله تعالى: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ'، ثم استقبال القبلة والحمد والتكبير والدعاء بما تيسر، وبدء الشوط نحو المروة.",
      points: [
        "السعي 7 أشواط: الذهاب من الصفا إلى المروة شوط، والعودة من المروة إلى الصفا شوط",
        "الهرولة للرجال فقط بين العلمين الأخضرين بالمسعى",
        "ينتهي السعي بالوصول إلى المروة في الشوط السابع",
      ],
    },
    {
      step: 4,
      title: "الحلق أو التقصير والتحلل",
      subtitle: "تمام النسك وقبول الطاعة بإذن الله",
      icon: "content_cut",
      desc: "بعد ختام الشوط السابع عند المروة، يحلق الرجل رأسه بالكامل (وهو الأفضل لحديث النبي ﷺ: رحم الله المحلقين ثلاثاً) أو يقصر من سائر شعره. والمرأة تقصر من أطراف ضفائرها قدر أنملة.",
      points: [
        "بذلك تتم مناسك العمرة كاملة ويتحلل المعتمر تحللاً تاماً ويباح له كل ما حرم عليه بالإحرام",
        "يُستحب للمعتمر الإكثار من الصلاة والطواف النافلة طوال مدة إقامته بمكة المكرمة",
      ],
    },
  ];

  const historicalSites = [
    {
      city: "مكة المكرمة",
      title: "غار حراء وجبل النور",
      desc: "المكان الطاهر الذي شهد نزول الوحي الخاتم على قلب النبي المصطفى ﷺ لأول مرة، يقع شمال شرق المسجد الحرام بارتفاع 642 متراً.",
      icon: "terrain",
    },
    {
      city: "مكة المكرمة",
      title: "غار ثور المبارك",
      desc: "الغار الذي مكث فيه رسول الله ﷺ وصاحبه الصديق أبو بكر ثلاث ليالٍ أثناء الهجرة النبوية الشريفة إلى المدينة.",
      icon: "landscape",
    },
    {
      city: "المدينة المنورة",
      title: "مسجد قباء الشريف",
      desc: "أول مسجد أسس على التقوى في الإسلام، والصلاة فيه تعدل أجر عمرة تامة لقوله ﷺ: 'من تطهر في بيته ثم أتى مسجد قباء فصلى فيه كان له كأجر عمرة'.",
      icon: "mosque",
    },
    {
      city: "المدينة المنورة",
      title: "جبل أحد ومقبرة الشهداء",
      desc: "الجبل الذي قال فيه النبي ﷺ: 'أحد جبل يحبنا ونحبه'، ويضم مقبرة سيد الشهداء حمزة بن عبد المطلب وصحابته الأبرار رضي الله عنهم.",
      icon: "military_tech",
    },
  ];

  const duasList = [
    {
      title: "دعاء رؤية الكعبة المشرفة",
      arabic: "اللَّهُمَّ زِدْ هَذَا البَيْتَ تَشْرِيفاً وَتَعْظِيماً وَتَكْرِيماً وَمَهَابَةً، وَزِدْ مَن شَرَّفَهُ وَكَرَّمَهُ مِمَّن حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيفاً وَتَكْرِيماً وَتَعْظِيماً وَبِرّاً.",
    },
    {
      title: "الدعاء بين الركن اليماني والحجر الأسود",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
    },
    {
      title: "دعاء صعود الصفا والمروة",
      arabic: "لا إِلَهَ إِلا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ المُلْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لا إِلَهَ إِلا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الأَحْزَابَ وَحْدَهُ.",
    },
    {
      title: "دعاء شرب ماء زمزم المبارك",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً وَاسِعاً، وَشِفَاءً مِنْ كُلِّ دَاءٍ وَسَقَمٍ.",
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
              <span className="text-white font-bold">دليل المعتمر الشامل</span>
            </div>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold mb-3 shadow-xs">
                <span className="material-symbols-outlined text-[16px]">
                  menu_book
                </span>
                <span>فقه وأحكام الزيارة 1446هـ</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-amiri font-bold leading-tight">
                دليل المعتمر الشامل - خطوة بخطوة من الإحرام إلى التحلل
              </h1>
              <p className="text-xs sm:text-sm text-surface-container-high mt-2 leading-relaxed">
                مرجع موثق أعده كبار المشايخ والدعاة بوكالة رحاب؛ ليرشدكم خطوة بخطوة لأداء
                عمرة صحيحة متقبلة وفق سنة المصطفى ﷺ مع قائمة تفاعلية لحقيبة السفر.
              </p>
            </div>
          </div>
        </section>

        {/* NAVIGATION TABS */}
        <div className="bg-surface-container-lowest border-b border-surface-container-high py-3 px-6 lg:px-12 sticky top-20 z-30 shadow-xs">
          <div className="max-w-[1360px] mx-auto flex items-center gap-2 overflow-x-auto">
            {[
              { id: "rituals" as const, label: "مناسك العمرة الأربعة", icon: "mosque" },
              { id: "packing" as const, label: "قائمة حقيبة المعتمر", icon: "luggage" },
              { id: "sites" as const, label: "المزارات والمعالم التاريخية", icon: "history_edu" },
              { id: "duas" as const, label: "أدعية العمرة المأثورة", icon: "auto_stories" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary-container text-on-primary shadow-xs"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: RITUALS (مناسك العمرة) */}
        {activeTab === "rituals" && (
          <section className="max-w-[1360px] mx-auto px-6 lg:px-12 py-12 space-y-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                الترتيب الشرعي
              </span>
              <h2 className="text-2xl sm:text-3xl font-amiri font-bold text-primary">
                أركان ومناسك العمرة بالتفصيل
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rituals.map((r) => (
                <div
                  key={r.step}
                  className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-xs space-y-4 text-right flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-fixed font-bold text-base flex items-center justify-center shadow-xs">
                        {r.step}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-bold text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          {r.icon}
                        </span>
                        <span>الركن {r.step}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-amiri text-primary">
                      {r.title}
                    </h3>
                    <p className="text-xs text-secondary font-bold">
                      {r.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-on-surface leading-relaxed">
                      {r.desc}
                    </p>

                    <div className="pt-2 border-t border-surface-container space-y-2">
                      <span className="text-[11px] font-bold text-on-surface-variant block">
                        تنبيهات وسنن هامة:
                      </span>
                      {r.points.map((pt, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-2 text-xs text-on-surface-variant"
                        >
                          <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 2: PACKING LIST (حقيبة المعتمر) */}
        {activeTab === "packing" && (
          <section className="max-w-[1360px] mx-auto px-6 lg:px-12 py-12 space-y-8">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                قائمة تفاعلية
              </span>
              <h2 className="text-2xl sm:text-3xl font-amiri font-bold text-primary">
                ماذا تضع في حقيبة العمرة؟
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                انقر فوق أي بند لإلغاء أو تأكيد تجهيزه قبل المغادرة لضمان عدم نسيان أي
                مستند أساسي.
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <span className="text-xs font-bold text-primary">
                  تم إنجاز {packingItems.filter((i) => i.checked).length} من{" "}
                  {packingItems.length} عناصر
                </span>
                <span className="text-xs text-secondary font-bold font-cairo">
                  {Math.round(
                    (packingItems.filter((i) => i.checked).length /
                      packingItems.length) *
                      100
                  )}
                  % جاهزية الحقيبة
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div
                  className="h-full bg-secondary-container transition-all duration-300"
                  style={{
                    width: `${
                      (packingItems.filter((i) => i.checked).length /
                        packingItems.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              <div className="space-y-2 pt-2">
                {packingItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleCheck(item.id)}
                    className={`w-full p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all text-right ${
                      item.checked
                        ? "bg-primary-container/10 border-primary text-primary"
                        : "bg-surface-container-low border-surface-container-high text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          item.checked
                            ? "bg-primary text-on-primary border-primary"
                            : "border-outline-variant bg-white"
                        }`}
                      >
                        {item.checked && (
                          <span className="material-symbols-outlined text-[16px]">
                            check
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-medium ${
                          item.checked ? "line-through opacity-80" : ""
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-container">
                      {item.category === "docs"
                        ? "وثائق"
                        : item.category === "clothes"
                        ? "ملابس"
                        : item.category === "medical"
                        ? "طبي"
                        : "إيمانيات"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: SACRED HISTORICAL SITES (المزارات النبوية) */}
        {activeTab === "sites" && (
          <section className="max-w-[1360px] mx-auto px-6 lg:px-12 py-12 space-y-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                معالم ومحطات نبوية
              </span>
              <h2 className="text-2xl sm:text-3xl font-amiri font-bold text-primary">
                مزارات مكة المكرمة وطيبة الطيبة
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                تنظم وكالة رحاب جولات حافلات سياحية خاصة لزيارة كافة هذه المعالم بصحبة
                المشرفين.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {historicalSites.map((site, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
                      {site.city}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      {site.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-amiri text-primary">
                    {site.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {site.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 4: ESSENTIAL UMRAH DUAS (أدعية العمرة) */}
        {activeTab === "duas" && (
          <section className="max-w-[1360px] mx-auto px-6 lg:px-12 py-12 space-y-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                صحيح السنة المطهرة
              </span>
              <h2 className="text-2xl sm:text-3xl font-amiri font-bold text-primary">
                أدعية ومأثورات مناسك العمرة
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {duasList.map((dua, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-xs space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold font-amiri text-primary">
                      {dua.title}
                    </h3>
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      format_quote
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container text-center leading-loose font-amiri text-base sm:text-lg text-primary font-semibold">
                    &quot;{dua.arabic}&quot;
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
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
