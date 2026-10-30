"use client";

import React, { useState } from "react";
import Image from "next/image";
import { packagesData } from "@/data/packages";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackageId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultPackageId,
}: BookingModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState(
    defaultPackageId || packagesData[0].id
  );
  const [roomType, setRoomType] = useState<"double" | "triple" | "quad" | "single">(
    "double"
  );
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("2026-11-15");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("RHB-104829");

  if (!isOpen) return null;

  const currentPkg =
    packagesData.find((p) => p.id === selectedPkgId) || packagesData[0];

  // Room pricing multipliers
  const multiplier = {
    single: 1.4,
    double: 1.0,
    triple: 0.9,
    quad: 0.85,
  }[roomType];

  const pricePerAdult = Math.round(currentPkg.pricePerPerson * multiplier);
  const pricePerChild = Math.round(currentPkg.pricePerPerson * 0.6);
  const totalPrice = adults * pricePerAdult + children * pricePerChild;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingRef(`RHB-${Date.now().toString().slice(-6)}`);
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `السلام عليكم ورحمة الله،
أود تأكيد طلب حجز رحلة عمرة عبر البوابة:
- الباقة: ${currentPkg.title}
- نوع الغرفة: ${
      roomType === "double"
        ? "ثنائية"
        : roomType === "triple"
        ? "ثلاثية"
        : roomType === "quad"
        ? "رباعية"
        : "مفردة VIP"
    }
- عدد البالغين: ${adults}
- عدد الأطفال: ${children}
- تاريخ السفر المقترح: ${travelDate}
- الاسم الكريم: ${fullName || "غير محدد"}
- رقم الهاتف: ${phone || "غير محدد"}
- إجمالي التقدير: ${totalPrice.toLocaleString("ar-EG")} ج.م
${notes ? `- ملاحظات: ${notes}` : ""}`;

    window.open(
      `https://wa.me/201023456789?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="إغلاق النافذة"
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity cursor-pointer border-0 w-full h-full"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-surface-container-high z-10 max-h-[90vh] flex flex-col text-right">
        {/* Header */}
        <div className="bg-primary text-on-primary px-6 py-5 flex items-center justify-between border-b border-primary-container">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden shadow-sm border border-secondary/40 shrink-0 bg-primary-container relative">
              <Image
                src="/images/logo.png"
                alt="شعار وكالة رحاب"
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold font-amiri">
                طلب حجز واستفسار سريع - باقات 1446هـ
              </h3>
              <p className="text-xs text-primary-fixed-dim">
                وكالة رحاب للعمرة والحج السياحي
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 mx-auto flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-[36px]">
                  check_circle
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary font-amiri">
                تم تسجيل طلب الحجز بنجاح!
              </h4>
              <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                رقم الحجز المرجعي:{" "}
                <span className="font-mono font-bold text-primary">
                  {bookingRef}
                </span>
                . سيتواصل معكم خبير العمرة بالوكالة خلال ساعتين عبر الواتساب لتأكيد المواعيد
                والتأشيرات.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-[#1ebd59] transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>المتابعة عبر واتساب الآن</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-surface-container text-on-surface font-semibold text-sm hover:bg-surface-container-high transition-all"
                >
                  إغلاق النافذة
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Package selector */}
              <div>
                <label htmlFor="modal-pkg-select" className="block text-xs font-bold text-on-surface-variant mb-1.5">
                  اختر باقة العمرة المرغوبة:
                </label>
                <select
                  id="modal-pkg-select"
                  name="selectedPkgId"
                  aria-label="اختر باقة العمرة المرغوبة"
                  value={selectedPkgId}
                  onChange={(e) => setSelectedPkgId(e.target.value)}
                  className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm font-semibold text-primary focus:outline-none focus:border-primary"
                >
                  {packagesData.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} ({pkg.pricePerPerson.toLocaleString("ar-EG")} ج.م)
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Tier Buttons */}
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-2">
                  نوع الغرفة والإشغال:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "double" as const, label: "ثنائية (أساسي)", desc: "سريران" },
                    { id: "triple" as const, label: "ثلاثية (-10%)", desc: "3 أسرة" },
                    { id: "quad" as const, label: "رباعية (-15%)", desc: "4 أسرة" },
                    { id: "single" as const, label: "مفردة (+40%)", desc: "سرير فردي" },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setRoomType(tier.id)}
                      className={`p-3 rounded-xl border text-right transition-all cursor-pointer ${
                        roomType === tier.id
                          ? "border-primary bg-primary-container/10 text-primary font-bold shadow-xs"
                          : "border-outline-variant/30 bg-surface-container-low text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      <div className="text-xs font-bold">{tier.label}</div>
                      <div className="text-[11px] text-on-surface-variant mt-0.5">
                        {tier.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Travelers count */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
                  <span className="text-xs font-bold text-on-surface">البالغون (+12 سنة)</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded-lg bg-surface-container-lowest text-primary font-bold flex items-center justify-center border shadow-xs"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded-lg bg-surface-container-lowest text-primary font-bold flex items-center justify-center border shadow-xs"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
                  <span className="text-xs font-bold text-on-surface">الأطفال (2-11 سنة)</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 rounded-lg bg-surface-container-lowest text-primary font-bold flex items-center justify-center border shadow-xs"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-7 h-7 rounded-lg bg-surface-container-lowest text-primary font-bold flex items-center justify-center border shadow-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Dynamic Price Summary Box */}
              <div className="p-4 rounded-2xl bg-secondary-fixed/30 border border-secondary/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-on-secondary-fixed-variant font-medium">
                    إجمالي التكلفة التقديرية للرحلة:
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    شامل التأشيرة، الطيران، الإقامة، والتنقلات
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-primary font-cairo">
                    {totalPrice.toLocaleString("ar-EG")}{" "}
                    <span className="text-xs text-secondary">ج.م</span>
                  </div>
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-on-surface-variant mb-1">
                    الاسم الكامل: *
                  </label>
                  <input
                    id="modal-name"
                    name="fullName"
                    aria-label="الاسم الكامل"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: أحمد عبد الله المحمدي"
                    className="w-full p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-on-surface-variant mb-1">
                    رقم الهاتف / الواتساب: *
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    aria-label="رقم الهاتف أو الواتساب"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01012345678"
                    className="w-full p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-date" className="block text-xs font-bold text-on-surface-variant mb-1">
                    تاريخ السفر التقريبي:
                  </label>
                  <input
                    id="modal-date"
                    name="travelDate"
                    aria-label="تاريخ السفر التقريبي"
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="modal-notes" className="block text-xs font-bold text-on-surface-variant mb-1">
                    ملاحظات أو رغبات خاصة:
                  </label>
                  <input
                    id="modal-notes"
                    name="notes"
                    aria-label="ملاحظات أو رغبات خاصة"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثل: غرفة متصلة، كرسي متحرك للمسنين"
                    className="w-full p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary font-bold text-sm shadow-md hover:bg-primary transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 hover:shadow-lg"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                    send
                  </span>
                  <span>تأكيد طلب الحجز وإرساله للمشرف</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
