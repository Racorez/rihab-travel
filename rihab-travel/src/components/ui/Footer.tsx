import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary pt-16 pb-12 mt-auto border-t border-primary-container">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Top Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-primary-container/80 text-right">
          <div className="flex items-center gap-4 bg-primary-container/40 p-4 rounded-2xl border border-primary-fixed-dim/15">
            <div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-secondary-fixed">ترخيص رسمي معتمد</h4>
              <p className="text-xs text-surface-container-high/80 mt-0.5">
                مرخصة من وزارة السياحة المصرية ترخيص رقم 1248 فئة (أ)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-primary-container/40 p-4 rounded-2xl border border-primary-fixed-dim/15">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed/20 text-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">mosque</span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary-fixed">عضوية منصة نُسك</h4>
              <p className="text-xs text-surface-container-high/80 mt-0.5">
                وكيل معتمد وموثق من وزارة الحج والعمرة بالمملكة العربية السعودية
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-primary-container/40 p-4 rounded-2xl border border-primary-fixed-dim/15">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed/20 text-secondary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">flight</span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-secondary-fixed">عضو الاتحاد الدولي IATA</h4>
              <p className="text-xs text-surface-container-high/80 mt-0.5">
                إصدار فوري لتذاكر الطيران على كافة الخطوط الدولية والمحلية
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 text-right">
          {/* Col 1: About Agency */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border border-secondary/40 shrink-0 bg-primary-container relative">
                <Image
                  src="/images/logo.png"
                  alt="شعار وكالة رحاب للعمرة والحج"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold font-amiri text-on-primary">
                وكالة رحاب للعمرة والحج السياحي
              </span>
            </div>
            <p className="text-surface-container-high text-sm leading-relaxed max-w-md">
              نكرس خبرتنا الممتدة لأكثر من 15 عاماً لنرتقي برحلتكم الإيمانية إلى أسمى معايير
              الضيافة والسكينة، بتوفير فنادق الصف الأول على ساحات الحرمين الشريفين، وقطار
              الحرمين السريع، ورعاية كبار الدعاة والمرشدين.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-primary-container hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors flex items-center justify-center text-sm"
                aria-label="فيسبوك"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-primary-container hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors flex items-center justify-center text-sm"
                aria-label="إنستغرام"
              >
                in
              </a>
              <a
                href="https://wa.me/201023456789"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-primary-container hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center text-sm"
                aria-label="واتساب"
              >
                wa
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-base text-secondary-fixed mb-1">روابط سريعة</h5>
            <Link
              href="/"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              الصفحة الرئيسية
            </Link>
            <Link
              href="/packages"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              باقات وبرامج العمرة
            </Link>
            <Link
              href="/package/al-huda-vip"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              برنامج الهدى VIP 5★
            </Link>
            <Link
              href="/guide"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              دليل المعتمر ومناسك العمرة
            </Link>
            <Link
              href="/about"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              عن الوكالة وهيئة الإشراف
            </Link>
            <Link
              href="/contact"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              تواصل معنا وحجز موعد
            </Link>
          </div>

          {/* Col 3: Seasons & Categories */}
          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-base text-secondary-fixed mb-1">مواسم العمرة 1446هـ</h5>
            <Link
              href="/packages?category=vip"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              عمرة رجب الفضيل
            </Link>
            <Link
              href="/packages?category=vip"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              عمرة شعبان المعظم
            </Link>
            <Link
              href="/packages?category=ramadan"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              العشر الأواخر من رمضان
            </Link>
            <Link
              href="/packages?category=four_star"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              باقات 4 نجوم ديلوكس
            </Link>
            <Link
              href="/packages?category=economy"
              className="text-surface-container-high hover:text-on-primary text-sm transition-colors"
            >
              الباقات الاقتصادية الميسرة
            </Link>
          </div>

          {/* Col 4: Contact & Emergency Support */}
          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-base text-secondary-fixed mb-1">خدمة المعتمرين 24/7</h5>
            <div className="flex items-start gap-2.5 text-sm text-surface-container-high">
              <span className="material-symbols-outlined text-[18px] text-secondary-container shrink-0 mt-0.5">
                location_on
              </span>
              <span>شارع الطيران - مدينة نصر - القاهرة</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-surface-container-high">
              <span className="material-symbols-outlined text-[18px] text-secondary-container shrink-0">
                call
              </span>
              <a href="tel:+20223456789" className="hover:text-secondary-fixed transition-colors">
                0223456789 / 01023456789
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-surface-container-high">
              <span className="material-symbols-outlined text-[18px] text-secondary-container shrink-0">
                chat
              </span>
              <a
                href="https://wa.me/201023456789"
                target="_blank"
                rel="noreferrer"
                className="text-[#25D366] hover:underline"
              >
                محادثة فورية عبر واتساب
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-surface-container-high">
              <span className="material-symbols-outlined text-[18px] text-secondary-container shrink-0">
                mail
              </span>
              <span>info@rihabtravel.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-container/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-container-high/70">
          <p>© 1446هـ - 2026م وكالة رحاب للعمرة والحج. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <Link href="/guide" className="hover:text-on-primary transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/guide" className="hover:text-on-primary transition-colors">
              الشروط والأحكام
            </Link>
            <Link href="/contact" className="hover:text-on-primary transition-colors">
              مساعدة ودعم
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
