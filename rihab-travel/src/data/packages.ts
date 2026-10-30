export interface PackageItem {
  id: string;
  numId: number;
  title: string;
  subtitle: string;
  description: string;
  category: "vip" | "four_star" | "economy" | "ramadan";
  badge: string;
  distanceBadge: string;
  distanceIcon: string;
  duration: string;
  durationDays: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  pricePerPerson: number;
  currency: string;
  makkahHotel: string;
  makkahHotelStars: number;
  makkahDistance: string;
  madinahHotel: string;
  madinahHotelStars: number;
  madinahDistance: string;
  airline: string;
  transportation: string;
  features: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    location: string;
  }[];
}

export const packagesData: PackageItem[] = [
  {
    id: "al-huda-vip",
    numId: 101,
    title: "برنامج الهدى VIP - صف أول مباشر",
    subtitle: "إقامة ملكية تطل مباشرة على الكعبة المشرفة وتجربة روحانية هانئة بلا مشقة",
    description: "باقة النخبة الملكية المصممة لتقديم أقصى درجات الراحة والسكينة لضيوف الرحمن، إقامة صف أول مباشر على ساحات المسجد الحرام والمسجد النبوي الشريف، مقاعد درجة رجال الأعمال بقطار الحرمين السريع، ورعاية دينية مستمرة من كبار الدعاة.",
    category: "vip",
    badge: "الأكثر طلباً",
    distanceBadge: "0 م من ساحة الحرم",
    distanceIcon: "explore",
    duration: "10 أيام / 9 ليالٍ",
    durationDays: 10,
    rating: 4.9,
    reviewsCount: 420,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHNZ3XZ02pA1tfaq-iiza0Rknl3fN1Pi_FOszZj4cIhuhqWW2iNQ5tHnYDrE4-BAYVhx1k1ftNcjmzKktVLR0kHCkR5VZAyNUVyaE8bRTEJp4cGbDFRx22Fbl1ZbXOZjfdo4cq7JnwB_Wvgl74Id11AOEO8TO7YmOQWYx0ZZvfLaQSXbbVCVWRXlfWs_5owY3KyAna8QIsrVaKIGveKrZGq3acrrhVOiPKvCLZ_zIi",
    pricePerPerson: 95000,
    currency: "ج.م",
    makkahHotel: "فندق دار التوحيد إنتركونتيننتال (5★)",
    makkahHotelStars: 5,
    makkahDistance: "مباشر على ساحة الحرم المكي",
    madinahHotel: "فندق دار التقوى بالمدينة (5★)",
    madinahHotelStars: 5,
    madinahDistance: "خطوات من الروضة الشريفة وباب السلام",
    airline: "مصر للطيران (القاهرة - جدة - المدينة)",
    transportation: "قطار الحرمين السريع (درجة أولى رجال أعمال)",
    features: [
      "إطلالة بانورامية مباشرة على الكعبة المشرفة",
      "بوفيه إفطار وعشاء فاخر مفتوح بأشهى المأكولات العالمية",
      "خدمة الكونسيرج الروحي واستقبال VIP بالمطارات",
      "مزارات نبوية تاريخية بحافلات خاصة فاخرة",
    ],
    inclusions: [
      "تأشيرة العمرة والتأمين الطبي الشامل المعتمد",
      "تذاكر الطيران المباشر ذهاب وعودة",
      "إقامة 5 ليالٍ بمكة بفندق دار التوحيد إنتركونتيننتال",
      "إقامة 4 ليالٍ بالمدينة بفندق دار التقوى",
      "بوفيه إفطار يومي فاخر بالفنادق",
      "التنقلات بين مكة والمدينة بقطار الحرمين درجة أولى",
      "مرشد ديني مرافق طوال الرحلة للمناسك والإرشاد",
      "حقيبة هدايا المعتمر (إحرام فاخر، كتيب أدعية، زمزم)",
    ],
    exclusions: [
      "المصروفات الشخصية والمشتريات الخاصة",
      "الوجبات غير المذكورة في البرنامج (الغداء)",
      "رسوم الأمتعة الزائدة عن الحد المسموح به في الطيران",
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول والإحرام وأداء مناسك العمرة",
        description: "التجمع بمطار القاهرة الدولي والسفر إلى مطار الملك عبد العزيز بجدة، استقبال VIP ثم التوجه إلى فندق دار التوحيد بمكة المكرمة للتسكين، ثم التجمع بصحبة المشرف الديني لأداء مناسك العمرة المباركة بخشوع.",
        location: "مكة المكرمة",
      },
      {
        day: 2,
        title: "يوم عبادة وتدبر في رحاب المسجد الحرام",
        description: "التفرغ للصلوات والطواف في صحن المطاف، درس ديني خاص مع الشيخ المرافق بعد صلاة العصر في بهو الفندق المطل على الحرم.",
        location: "المسجد الحرام",
      },
      {
        day: 3,
        title: "زيارة المعالم النبوية والمشاعر بمكة",
        description: "جولة صباحية بالحافلات المكيفة تشمل جبل النور وغار حراء، جبل ثور، ومشعري منى وعرفات مع شرح تاريخي وثائقي.",
        location: "مكة والمشاعر المقدسة",
      },
      {
        day: 4,
        title: "الانتقال للمدينة المنورة بقطار الحرمين السريع",
        description: "بعد الإفطار وطواف الوداع، التحرك لمحطة قطار الحرمين وركوب القطار السريع درجة أولى إلى مدينة المصطفى ﷺ، والوصول لفندق دار التقوى المطل على الساحات الشمالية.",
        location: "قطار الحرمين والمدينة المنورة",
      },
      {
        day: 5,
        title: "السلام على رسول الله ﷺ وزيارة الروضة الشريفة",
        description: "أداء صلاة الفجر في المسجد النبوي، والسلام على النبي ﷺ وصاحبيه، وأداء الزيارة بالروضة الشريفة وفق التصاريح المعتمدة المنسقة.",
        location: "المسجد النبوي الشريف",
      },
      {
        day: 6,
        title: "مزارات المدينة المنورة التاريخية",
        description: "زيارة مسجد قباء وأداء ركعتين بأجر عمرة، ثم زيارة جبل أحد ومقبرة الشهداء ومسجد القبلتين.",
        location: "المدينة المنورة",
      },
      {
        day: 7,
        title: "العودة الميمونة إلى أرض الوطن",
        description: "توديع المسجد النبوي الشريف، ثم التوجه لمطار الأمير محمد بن عبد العزيز بالمدينة للعودة بسلامة الله إلى مطار القاهرة الدولي حاملين ماء زمزم والذكريات الطيبة.",
        location: "مطار المدينة المنورة",
      },
    ],
  },
  {
    id: "al-noor-towers",
    numId: 102,
    title: "برنامج النور المميز - أبراج وقف الملك",
    subtitle: "باقة متوازنة تجمع فخامة برج الساعة والمصاعد الخاصة لساحات الحرم",
    description: "توازن استثنائي يجمع بين الرفاهية والقرب الشديد من الحرم المكي. مصاعد مباشرة تنقلك من أبراج البيت إلى صحن الطواف في دقائق معدودة، مع إقامة راقية بالمدينة المنورة.",
    category: "vip",
    badge: "رحلة مؤكدة",
    distanceBadge: "أبراج البيت وقف الملك",
    distanceIcon: "apartment",
    duration: "14 يوماً / 13 ليلة",
    durationDays: 14,
    rating: 4.8,
    reviewsCount: 310,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHaT01XwsEp47A7ZJnlC9Bsix83ZbGD6rF2DX8UvyGkN-kyGMLOStCoMIyDLnIZpc5mV4urYPoOyy0mqwqPgfAYMJWZ_CSfcWtzwb7Xa9IcG5z25FSHkUrQvKD_7Rb17cJ63eLO5yR7b4TwZFRf1M8iitnDKbQI0TmSuqqmsh01OUgZTueRl13njvpFIUOD4T3ICUBO93d65cg4V4k5x7xuOdMVTCSeYk9AA4GI1Wr",
    pricePerPerson: 68000,
    currency: "ج.م",
    makkahHotel: "سويس أوتيل المقام بمجمع الأبراج (5★)",
    makkahHotelStars: 5,
    makkahDistance: "مباشر عبر مجمع الأبراج لصحن الحرم",
    madinahHotel: "فندق أوبروي المدينة أو أنوار المدينة (5★)",
    madinahHotelStars: 5,
    madinahDistance: "100 م عن باب الملك فهد",
    airline: "الخطوط الجوية العربية السعودية",
    transportation: "حافلات مرسيدس VIP موديل 2024 مجهزة",
    features: [
      "مصاعد سريعة مخصصة لساحة الحرم مباشرة",
      "خدمة استلام وتسليم الحقائب من الغرف",
      "موقع استراتيجي وسط مجمع تسوق ومطاعم الأبراج",
      "برنامج دروس إيمانية يومية مع نخبة المشايخ",
    ],
    inclusions: [
      "تأشيرة العمرة ورسوم التأمين الطبي المعتمد",
      "طيران السعودية المباشر مع وجبة ساخنة على متن الطائرة",
      "إقامة 7 ليالٍ بمكة بسويس أوتيل المقام بالأبراج",
      "إقامة 6 ليالٍ بالمدينة بفندق أوبروي أو أنوار المدينة",
      "إفطار يومي بوفيه مفتوح راقٍ",
      "التنقلات بالكامل بحافلات VIP مكيفة وواي فاي مجاني",
      "تصاريح الصلاة بالروضة الشريفة عبر تطبيق نسك",
    ],
    exclusions: [
      "المصروفات الشخصية وطلبات الغرف الإضافية",
      "وجبات الغداء والعشاء",
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول والإحرام والتسكين بمكة",
        description: "السفر إلى جدة ثم الانتقال المباشر لأبراج الساعة بمكة وأداء العمرة مع الشيخ المشرف.",
        location: "مكة المكرمة",
      },
      {
        day: 4,
        title: "جولة المشاعر المقدسة وزيارة المعالم النبوية",
        description: "زيارة جبل النور والمشاعر ومنطقة بئر طوى التاريخية.",
        location: "مكة المكرمة",
      },
      {
        day: 8,
        title: "الانتقال إلى المدينة المنورة",
        description: "الانتقال بالحافلات السياحية الفاخرة إلى المدينة والتسكين بالقرب من الحرم النبوي.",
        location: "المدينة المنورة",
      },
      {
        day: 14,
        title: "العودة إلى القاهرة",
        description: "المغادرة من مطار الأمير محمد بن عبد العزيز بالمدينة إلى مطار القاهرة الدولي.",
        location: "العودة",
      },
    ],
  },
  {
    id: "al-safa-deluxe",
    numId: 103,
    title: "برنامج الصفا الأنيق - 4 نجوم ديلوكس",
    subtitle: "مسافة مشي يسيرة وقريبة جداً من مصليات التوسعة مع خدمة فندقية راقية",
    description: "الخيار الأفضل للباحثين عن جودة فندقية ممتازة وقرب على بعد دقائق سيرًا من الحرم، مع المحافظة على ميزانية مدروسة ومناسبة للعائلات.",
    category: "four_star",
    badge: "قيمة استثنائية",
    distanceBadge: "250 متر مشياً للحرم",
    distanceIcon: "directions_walk",
    duration: "10 أيام / 9 ليالٍ",
    durationDays: 10,
    rating: 4.7,
    reviewsCount: 512,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcVvcMkVEZKZPeXkxrBaWhClffAQ3J_sILZEU7IFMTE7ytictU-DiCjVTQ4GSJl5PzeWCYJYDqCVENoT-7_b09SLV3jwaKATrqqNMdrhGIliEYBdefdLdhblDFblu5qrwsy33FxdkD6Iax_L7vnwVvLULU69KQ8aGlrdno7_uTuh24CLnn4C2ejGH7x35RH5CjWbwosGIhirZHUfTFXoLfB9URziKXkgsrQjbCBpDM",
    pricePerPerson: 52000,
    currency: "ج.م",
    makkahHotel: "فندق الشهداء أو ما يعادله (4★ ديلوكس)",
    makkahHotelStars: 4,
    makkahDistance: "250 متر من ساحة أجياد",
    madinahHotel: "فندق فرونتيل الحارثية (4★ ديلوكس)",
    madinahHotelStars: 4,
    madinahDistance: "150 متر من الساحة المركزية",
    airline: "طيران ناس المباشر (القاهرة - جدة)",
    transportation: "حافلات حديثة مكيفة تشمل المزارات",
    features: [
      "مسافة مشي يسيرة 3 إلى 4 دقائق من أبواب الحرم",
      "خدمة إنترنت فائق السرعة بالغرف والمرافق",
      "طاقم إشرافي وطبي مرافق للوفد طوال الرحلة",
      "جولة مزارات كاملة بمكة والمدينة متضمنة",
    ],
    inclusions: [
      "التأشيرة والتأمين الطبي الرسمي",
      "تذاكر الطيران المباشر ذهاب وعودة",
      "إقامة 5 ليالٍ بمكة و4 ليالٍ بالمدينة",
      "بوفيه إفطار يومي بالفنادق",
      "التنقلات والمزارات بالكامل بحافلات مكيفة",
      "مرافقة دعوية وإرشادية",
    ],
    exclusions: [
      "وجبات الغداء والعشاء",
      "المصروفات الشخصية",
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول وأداء العمرة",
        description: "الوصول لمكة والتسكين ثم أداء العمرة المباركة بصحبة المشرفين.",
        location: "مكة المكرمة",
      },
      {
        day: 5,
        title: "السفر للمدينة المنورة",
        description: "التحرك للمدينة المنورة والتسكين في فرونتيل الحارثية والسلام على النبي ﷺ.",
        location: "المدينة المنورة",
      },
      {
        day: 10,
        title: "العودة بسلامة الله",
        description: "التوجه للمطار والعودة لأرض الوطن.",
        location: "مطار جدة / المدينة",
      },
    ],
  },
  {
    id: "al-baraka-economy",
    numId: 104,
    title: "برنامج البركة الاقتصادي الميسر",
    subtitle: "أفضل خيار اقتصادي يجمع الخدمة الموثوقة مع الحافلات الترددية الدورية",
    description: "برنامج ميسر يتيح أداء العمرة بتكلفة اقتصادية ملائمة، مع فنادق حديثة وخطوط حافلات ترددية تنطلق على مدار 24 ساعة للصلوات الخمس بدون أي تأخير.",
    category: "economy",
    badge: "اقتصادي ميسر",
    distanceBadge: "باصات ترددية 24/7 للحرم",
    distanceIcon: "airport_shuttle",
    duration: "14 يوماً / 13 ليلة",
    durationDays: 14,
    rating: 4.6,
    reviewsCount: 680,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEBaUghHgjmRrrmaTxD5g128sg5jQqnnJRXSt3YZZzIiUhaUWx5aLeFlXu_Lf9iD56UyZqJtAWsSby-Bq3h7a7tD9jnuFWQwciNF4n5ksbUR7dCFYXHYJ16yOLgwIotOYmt0fmrGRKIwMq-kX6CCPzzPuIVNEWP7gn7uQoQM9S7-mIYCACHP4rowQe4CtGol1WobgbzxyeiI7XmPdjWj282lFTr7YyWb6WkJdpXuX9",
    pricePerPerson: 36000,
    currency: "ج.م",
    makkahHotel: "فندق إبراهيم الخليل / العزيزية الحديث (3★)",
    makkahHotelStars: 3,
    makkahDistance: "باصات ترددية خاصة كل 10 دقائق لساحات كدي ومحطة الحرم",
    madinahHotel: "فندق مودة الواحة أو رويال ديار (3★)",
    madinahHotelStars: 3,
    madinahDistance: "350 متر عن ساحات المسجد النبوي",
    airline: "طيران اقتصادي مباشر (القاهرة - ينبع / جدة)",
    transportation: "حافلات سياحية حديثة مكيفة",
    features: [
      "حافلات ترددية على مدار 24 ساعة مخصصة لمعتمري الوكالة",
      "غرف واسعة مجهزة بكافة سبل الراحة ومكيفات ممتازة",
      "أفضل معادلة بين السعر المناسب والخدمة الصادقة",
      "مشرف ديني وإداري ملازم للفندق طوال اليوم",
    ],
    inclusions: [
      "تأشيرة العمرة والتأمين الطبي المعتمد",
      "تذاكر الطيران ذهاب وعودة",
      "إقامة 7 ليالٍ بمكة و6 ليالٍ بالمدينة",
      "الانتقالات بحافلات حديثة مكيفة",
      "خدمة النقل الترددي للصلوات",
      "إشراف كامل من مشرفي وكالة رحاب",
    ],
    exclusions: [
      "الوجبات اليومية",
      "المصروفات الشخصية",
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول وبدء المناسك",
        description: "الوصول لمكة المكرمة عبر حافلاتنا وأداء العمرة مع المشرف.",
        location: "مكة المكرمة",
      },
      {
        day: 8,
        title: "التوجه لطيبة الطيبة",
        description: "السفر للمدينة المنورة والإقامة بالقرب من المسجد النبوي.",
        location: "المدينة المنورة",
      },
      {
        day: 14,
        title: "ختام الرحلة المباركة والعودة",
        description: "التوجه للمطار والعودة للوطن بحفظ الله ورعايته.",
        location: "مطار العودة",
      },
    ],
  },
  {
    id: "ramadan-last-ten",
    numId: 105,
    title: "باقة العشر الأواخر من رمضان المبارك 1446هـ",
    subtitle: "عمرة تعادل حجة مع النبي ﷺ وشهود ليلة القدر والختمة في صحن الكعبة",
    description: "أسمى رحلات العمرة طوال العام، شهود صلوات التراويح والتهجد وليلة القدر المباركة، إقامة فاخرة بأبراج البيت مع موائد إفطار وسحور رمضانية عامرة وأجواء روحانية لا تتكرر.",
    category: "ramadan",
    badge: "ليالي القدر والختمة",
    distanceBadge: "إطلالة الحرم والتوسعة",
    distanceIcon: "brightness_high",
    duration: "15 يوماً / 14 ليلة",
    durationDays: 15,
    rating: 5.0,
    reviewsCount: 380,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFQYLoYO-Rs_1YdbqPQ6801uEtu0wP5CxczWzZYaAQ5ESXTbCzZUBr5BdZzya-5tMqUoPUQSbOXFetlwMU4C8nS_egHBbOhlpIN_L6g4lfK9u_tJ7HD-uYKlMP8g1Ab4OFyZcLw-h_80xwPGfIC0NTo7aEAcjTDwccXn2MmMKbNrx0WiEUC8ctCs392TciVWlyy4W3J21MWbSrwnPlalHCbrFQpRuZv6M4erWPedDs",
    pricePerPerson: 125000,
    currency: "ج.م",
    makkahHotel: "فندق فيرمونت برج الساعة الملكي (5★)",
    makkahHotelStars: 5,
    makkahDistance: "مباشر ومصاعد خاصة لصحن المطاف",
    madinahHotel: "أنوار المدينة موفنبيك (5★)",
    madinahHotelStars: 5,
    madinahDistance: "مباشر على الساحة الشمالية",
    airline: "الخطوط السعودية / مصر للطيران",
    transportation: "قطار الحرمين السريع درجة رجال الأعمال",
    features: [
      "شهود ليلة 27 وليلة ختم القرآن بالمسجد الحرام",
      "بوفيه إفطار وسحور رمضاني فاخر يومياً",
      "جلسات تدبر روحانية يومية لتهجد ليالي الوتر",
      "صلاة عيد الفطر المبارك بالحرم الشريف",
    ],
    inclusions: [
      "تأشيرة العمرة وتأمين الطوارئ المعتمد",
      "طيران مباشر مجدول",
      "إقامة 10 ليالٍ الأخيرة بمكة المكرمة",
      "إقامة 4 ليالٍ بالمدينة المنورة",
      "وجبات الإفطار والسحور اليومية بوفيه مفتوح",
      "قطار الحرمين السريع بين المدينتين",
      "إشراف ديني لكبار علماء الأزهر الشريف",
    ],
    exclusions: [
      "المصروفات الشخصية",
      "الهدايا والمشتريات الخاصة",
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول بمستهل العشر الأواخر",
        description: "الوصول لمكة المكرمة والتسكين في فندق فيرمونت برج الساعة وأداء العمرة.",
        location: "مكة المكرمة",
      },
      {
        day: 7,
        title: "ليلة 27 المباركة بالمسجد الحرام",
        description: "يوم مخصص للعبادة والدعاء وصلاة التراويح والتهجد بين ملايين المصلين.",
        location: "المسجد الحرام",
      },
      {
        day: 11,
        title: "الانتقال للمدينة المنورة وصلاة العيد",
        description: "ركوب قطار الحرمين إلى المدينة المنورة والاستعداد لصلاة عيد الفطر المبارك بالمسجد النبوي.",
        location: "المدينة المنورة",
      },
      {
        day: 15,
        title: "العودة الميمونة",
        description: "المغادرة إلى مطار القاهرة بعد وداع الحرمين الشريفين.",
        location: "العودة",
      },
    ],
  },
  {
    id: "shaban-umrah",
    numId: 106,
    title: "باقة نسمات شعبان وجمعة الحرم",
    subtitle: "عمرة الاستعداد لشهر الصيام في أجواء ربيعية مريحة وأسعار مميزة",
    description: "استمتعوا بالهدوء والسكينة في شهر رفع الأعمال إلى الله، مع جمعتين في الحرمين الشريفين وتنظيم متقن لكافة محطات رحلتكم المباركة.",
    category: "vip",
    badge: "موسم شعبان",
    distanceBadge: "100 م من ساحة الحرم",
    distanceIcon: "hotel_class",
    duration: "10 أيام / 9 ليالٍ",
    durationDays: 10,
    rating: 4.8,
    reviewsCount: 290,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJGnrLjXaukkekJVVOohWwkiq9OQE9HGLPOPiqhsIv-3FxWRvzCd1Wb5C8aCFAA_78Rv_QsSdeZFhPWBfo3y2ZEibhXDuHGcO_h4MUKbyG8tqSNB09mrc_3rT6mpVVNRZwNSnFeriOcl281nqC9KtDwpLFxCrTI8Bj_8jP4pvXK_IuEShoDDApcVgMeRJzyvEU_nLSIENMg6k6hPMh8Pwsyf6l96aXO4YtEMlTv3XA",
    pricePerPerson: 58000,
    currency: "ج.م",
    makkahHotel: "بولمان زمزم مكة (5★)",
    makkahHotelStars: 5,
    makkahDistance: "داخل مجمع أبراج البيت",
    madinahHotel: "هيلتون المدينة المنورة (5★)",
    madinahHotelStars: 5,
    madinahDistance: "خطوات من باب السلام",
    airline: "طيران ناس أو العربية للطيران",
    transportation: "حافلات VIP مكيفة حديثة",
    features: [
      "جمعة في المسجد الحرام وجمعة في المسجد النبوي",
      "بوفيه إفطار راقٍ يومياً",
      "تنظيم تصاريح الروضة الشريفة مؤكد",
      "هدايا تذكارية ومياه زمزم معبأة آلياً",
    ],
    inclusions: [
      "التأشيرة والتأمين الرسمي",
      "الطيران المباشر ذهاب وعودة",
      "إقامة 5 ليالٍ بمكة و4 بالمدينة",
      "إفطار بوفيه مفتوح بالفندقين",
      "الانتقالات بالكامل بين المدن والمزارات",
    ],
    exclusions: [
      "وجبات الغداء والعشاء",
      "المصروفات الشخصية",
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول وبدء العمرة",
        description: "الوصول إلى مكة والتسكين في بولمان زمزم وأداء العمرة المباركة.",
        location: "مكة المكرمة",
      },
      {
        day: 6,
        title: "الانتقال إلى المدينة المنورة",
        description: "السفر للمدينة المنورة والتسكين في هيلتون المدينة وزيارة المسجد النبوي.",
        location: "المدينة المنورة",
      },
      {
        day: 10,
        title: "العودة إلى القاهرة",
        description: "السفر للمطار والعودة للديار المصرية سالمين غانمين.",
        location: "العودة",
      },
    ],
  },
];
