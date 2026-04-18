export const navLinks = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'latest-rentals', label: 'الإيجارات' },
  { id: 'cities', label: 'المدن' },
  { id: 'best-selling', label: 'الأكثر مبيعًا' },
  { id: 'why-us', label: 'من نحن' },
];

export const heroSlides = [
  {
    id: 1,
    image: '/image/3.jpg',
    title: 'استأجر راحتك وين ما تكون',
    description: 'شقق وفنادق للإيجار اليومي، الشهري، أو السنوي , بكل سهولة وثقة.',
  },
  {
    id: 2,
    image: '/image/2.jpg',
    title: 'استأجر راحتك وين ما تكون',
    description: 'خيارات إقامة متنوعة ومجهزة بالكامل في أفضل المواقع المناسبة لك.',
  },
  {
    id: 3,
    image: '/image/1.jpg',
    title: 'استأجر راحتك وين ما تكون',
    description: 'احجز وحدتك المناسبة بسرعة مع صور واضحة وتفاصيل دقيقة وأسعار مباشرة.',
  },
];

export const latestRentals = [
  {
    id: 1,
    image: '/image/1.jpg',
    images: ['/image/1.jpg', '/image/2.jpg', '/image/3.jpg'],
    tag: 'شقة للإيجار',
    propertyType: 'شقق',
    status: 'متاحة الآن',
    furnishing: 'مفروش بالكامل',
    title: 'شقة سكنية',
    location: 'مدينة نصر - الحي العاشر',
    rating: 5,
    beds: 4,
    baths: 3,
    area: 92.86,
    price: '22,000',
  },
  {
    id: 2,
    image: '/image/2.jpg',
    images: ['/image/2.jpg', '/image/3.jpg', '/image/1.jpg'],
    tag: 'فيلا للإيجار',
    propertyType: 'فيلا',
    status: 'متاحة الآن',
    furnishing: 'مفروش بالكامل',
    title: 'فيلا الريم',
    location: 'التجمع الخامس - بالقرب من شارع التسعين',
    rating: 5,
    beds: 4,
    baths: 3,
    area: 92.86,
    price: '22,000',
  },
  {
    id: 3,
    image: '/image/3.jpg',
    images: ['/image/3.jpg', '/image/1.jpg', '/image/2.jpg'],
    tag: 'مكتب للإيجار',
    propertyType: 'مكتب تجاري',
    status: 'متاحة الآن',
    furnishing: 'مفروش بالكامل',
    title: 'مكتب كابيتال سنتر',
    location: 'العاصمة الإدارية - الحي المالي',
    rating: 5,
    beds: 4,
    baths: 2,
    area: 92.86,
    price: '22,000',
  },
];

export const cityCategories = [
  {
    id: 1,
    image: '/image/1.jpg',
    title: 'مدينتي',
    subtitle: '+120 عقار جديد',
  },
  {
    id: 2,
    image: '/image/2.jpg',
    title: 'القاهرة الجديدة',
    subtitle: '+80 عقار جديد',
  },
  {
    id: 3,
    image: '/image/3.jpg',
    title: 'مدينة نصر',
    subtitle: '+155 عقار جديد',
  },
  {
    id: 4,
    image: '/image/2.jpg',
    title: 'المعادي',
    subtitle: '+65 عقار جديد',
  },
];

export const bestSellingRentals = [
  {
    id: 4,
    image: '/image/3.jpg',
    images: ['/image/3.jpg', '/image/1.jpg', '/image/2.jpg'],
    tag: 'شقة للإيجار',
    propertyType: 'شقق',
    status: 'متاحة الآن',
    furnishing: 'مفروش بالكامل',
    title: 'شقة سكنية',
    location: 'مدينة نصر - الحي العاشر',
    rating: 5,
    beds: 4,
    baths: 3,
    area: 92.86,
    price: '22,000',
  },
  {
    id: 5,
    image: '/image/1.jpg',
    images: ['/image/1.jpg', '/image/2.jpg', '/image/3.jpg'],
    tag: 'فيلا للإيجار',
    propertyType: 'فيلا',
    status: 'متاحة الآن',
    furnishing: 'مفروش بالكامل',
    title: 'فيلا الريم',
    location: 'التجمع الخامس - بالقرب من شارع التسعين',
    rating: 5,
    beds: 4,
    baths: 3,
    area: 92.86,
    price: '22,000',
  },
  {
    id: 6,
    image: '/image/2.jpg',
    images: ['/image/2.jpg', '/image/3.jpg', '/image/1.jpg'],
    tag: 'مكتب للإيجار',
    propertyType: 'مكتب تجاري',
    status: 'متاحة الآن',
    furnishing: 'مفروش بالكامل',
    title: 'مكتب كابيتال سنتر',
    location: 'العاصمة الإدارية - الحي المالي',
    rating: 5,
    beds: 4,
    baths: 2,
    area: 92.86,
    price: '22,000',
  },
];

export const whyChooseUsItems = [
  {
    id: 1,
    title: 'أفضل الأسعار',
    description: 'نوفر باقات إيجار متنوعة مع مراجعة دقيقة للأسعار المناسبة للسوق.',
  },
  {
    id: 2,
    title: 'خيارات موثوقة',
    description: 'ننتقي الوحدات المعروضة بعناية لتناسب الأفراد والعائلات والشركات.',
  },
  {
    id: 3,
    title: 'دعم سريع',
    description: 'فريقنا يتابع معك من أول الاستفسار وحتى إتمام الحجز أو التعاقد.',
  },
  {
    id: 4,
    title: 'تجربة استخدام سهلة',
    description: 'عرض واضح للصور والمعلومات الأساسية لتسهيل المقارنة واتخاذ القرار.',
  },
];

export const footerSections = [
  {
    title: 'روابط مهمة',
    links: ['الرئيسية', 'الإيجارات', 'الأكثر مبيعًا', 'تواصل معنا'],
  },
  {
    title: 'المدن',
    links: ['مدينة نصر', 'القاهرة الجديدة', 'المعادي', 'مدينتي'],
  },
  {
    title: 'تواصل',
    links: ['info@aqary.com', '+20 101 234 5678', 'القاهرة - مصر الجديدة'],
  },
];
