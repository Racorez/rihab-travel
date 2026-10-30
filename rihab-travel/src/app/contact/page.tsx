"use client";

import React, { useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BookingModal from "@/components/ui/BookingModal";
import Link from "next/link";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    packageCategory: "vip",
    travelers: "2",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `السلام عليكم ورحمة الله،
أود الاستفسار والتواصل مع خدمة عملاء وكالة رحاب:
- الاسم: ${formData.name || "غير محدد"}
- الهاتف: ${formData.phone || "غير محدد"}
- الباقة المرغوبة: ${formData.packageCategory}
- عدد الأفراد: ${formData.travelers}
- الرسالة: ${formData.message || "طلب استشارة لرحلة عمرة"}`;

    window.open(
      `https://wa.me/201023456789?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const branches = [
    {
      city: "القاهرة (المقر الرئيسي)",
      address: "شارع الطيران - بجوار مسجد رابعة العدوية - مدينة نصر",
      phone: "0223456789 / 01023456789",
      hours: "يومياً من 9:00 ص إلى 10:00 م (عدا الجمعة من 1:00 م)",
      icon: "apartment",
    },
    {
      city: "الإسكندرية",
      address: "طريق 14 مايو - برج الصفوة الإداري - سموحة",
      phone: "034234567 / 01098765432",
      hours: "السبت إلى الخميس: 9:30 ص إلى 9:00 م",
      icon: "storefront",
    },
    {
      city: "مكتب المملكة (مكة والمدينة)",
      address: "شارع أجياد العام - جوار الحرم المكي الشريف",
      phone: "+966501234567",
      hours: "خدمة معتمرين واستقبال على مدار 24 ساعة طوال أيام الأسبوع",
      icon: "mosque",
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
              <span className="text-white font-bold">تواصل معنا</span>
            </div>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold mb-3 shadow-xs">
                <span className="material-symbols-outlined text-[16px]">
                  support_agent
                </span>
                <span>خدمة معتمرين متميزة</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-amiri font-bold leading-tight">
                تواصل معنا - في خدمتكم على مدار الساعة
              </h1>
              <p className="text-xs sm:text-sm text-surface-container-high mt-2 leading-relaxed">
                يسعد فريقنا المتخصص الرد على كافة استفساراتكم ومساعدتكم في اختيار باقة
                العمرة المثالية وإنهاء كافة إجراءات السفر والتأشيرات بكل يسر وسهولة.
              </p>
            </div>
          </div>
        </section>

        {/* 3 QUICK CHANNELS */}
        <section className="max-w-[1360px] mx-auto px-6 lg:px-12 -mt-6 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">call</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary">الخط الساخن المباشر</h4>
                <a
                  href="tel:+20223456789"
                  className="text-xs text-secondary font-bold font-cairo block mt-0.5 hover:underline"
                >
                  0223456789 / 01023456789
                </a>
                <span className="text-[11px] text-on-surface-variant">
                  طاقم متواجد للرد الفوري
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">chat</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary">محادثة واتساب 24/7</h4>
                <a
                  href="https://wa.me/201023456789"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#128C7E] font-bold block mt-0.5 hover:underline"
                >
                  انقر للمحادثة الآن
                </a>
                <span className="text-[11px] text-on-surface-variant">
                  رد آلي وتواصل مباشر مع المشرف
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">mail</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary">البريد الإلكتروني</h4>
                <span className="text-xs text-secondary font-bold block mt-0.5">
                  info@rihabtravel.com
                </span>
                <span className="text-[11px] text-on-surface-variant">
                  لقسم الشركات والوفود
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN FORM & BRANCHES GRID */}
        <section className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* INQUIRY FORM (3 COLS) */}
            <div className="lg:col-span-3 bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container-high shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                  استمارة التواصل المباشر
                </span>
                <h2 className="text-2xl font-amiri font-bold text-primary">
                  أرسل استفسارك وسنعاود الاتصال بكم
                </h2>
                <p className="text-xs text-on-surface-variant mt-1">
                  املأ النموذج أدناه لتحديد الباقة والمواعيد المفضلة، وسيتواصل معكم خبير
                  العمرة لترتيب كافة التفاصيل.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-[36px]">
                      check_circle
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-amiri text-primary">
                    شكراً لتواصلكم معنا!
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    تم استلام طلبكم بنجاح. سيتواصل معكم أحد مسؤولي خدمة العملاء عبر
                    الهاتف أو الواتساب خلال أقل من ساعتين.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="px-6 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs inline-flex items-center gap-2 shadow-xs"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>إرسال نفس الاستفسار عبر واتساب الآن</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-on-surface-variant mb-1">
                        الاسم الكريم: *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        aria-label="الاسم الكريم"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="مثال: د. محمد حسام"
                        className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-on-surface-variant mb-1">
                        رقم الهاتف / الواتساب: *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        aria-label="رقم الهاتف أو الواتساب"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="01012345678"
                        className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="contact-pkg" className="block text-xs font-bold text-on-surface-variant mb-1">
                        الباقة المفضلة:
                      </label>
                      <select
                        id="contact-pkg"
                        name="packageCategory"
                        aria-label="الباقة المفضلة"
                        value={formData.packageCategory}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            packageCategory: e.target.value,
                          })
                        }
                        className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:border-primary cursor-pointer"
                      >
                        <option value="vip">برامج VIP 5 نجوم</option>
                        <option value="four_star">باقات 4 نجوم ديلوكس</option>
                        <option value="economy">الباقة الاقتصادية الميسرة</option>
                        <option value="ramadan">عمرة العشر الأواخر</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-travelers" className="block text-xs font-bold text-on-surface-variant mb-1">
                        عدد المسافرين:
                      </label>
                      <select
                        id="contact-travelers"
                        name="travelers"
                        aria-label="عدد المسافرين"
                        value={formData.travelers}
                        onChange={(e) =>
                          setFormData({ ...formData, travelers: e.target.value })
                        }
                        className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:border-primary cursor-pointer"
                      >
                        <option value="1">فرد واحد</option>
                        <option value="2">فردان (غرفة ثنائية)</option>
                        <option value="3">3 أفراد</option>
                        <option value="4">4 أفراد فأكثر (عائلي)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-date" className="block text-xs font-bold text-on-surface-variant mb-1">
                        تاريخ السفر المقترح:
                      </label>
                      <input
                        id="contact-date"
                        name="date"
                        aria-label="تاريخ السفر المقترح"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="block text-xs font-bold text-on-surface-variant mb-1">
                      تفاصيل أو أسئلة خاصة:
                    </label>
                    <textarea
                      id="contact-msg"
                      name="message"
                      aria-label="تفاصيل أو أسئلة خاصة"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="هل تود الاستفسار عن فندق معين، قطار الحرمين، أو إضافة أفراد مسنين يحتاجون رعاية؟"
                      className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary font-bold text-sm shadow-md hover:bg-primary transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 hover:shadow-lg"
                    >
                      <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                        send
                      </span>
                      <span>إرسال الاستفسار الآن</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* BRANCHES DIRECTORY (2 COLS) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                    فروعنا ومكاتبنا
                  </span>
                  <h3 className="text-xl font-amiri font-bold text-primary">
                    أين تجدوننا؟
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1">
                    يسعدنا استقبالكم شخصياً في أي من فروعنا لإنهاء الحجز واستلام جوازات
                    السفر.
                  </p>
                </div>

                <div className="space-y-4">
                  {branches.map((b, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          {b.icon}
                        </span>
                        <h4 className="font-bold text-sm text-primary">
                          {b.city}
                        </h4>
                      </div>
                      <p className="text-xs text-on-surface flex items-start gap-1.5">
                        <span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">
                          location_on
                        </span>
                        <span>{b.address}</span>
                      </p>
                      <p className="text-xs text-on-surface flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0">
                          call
                        </span>
                        <span className="font-cairo">{b.phone}</span>
                      </p>
                      <p className="text-[11px] text-on-surface-variant flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0">
                          schedule
                        </span>
                        <span>{b.hours}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
