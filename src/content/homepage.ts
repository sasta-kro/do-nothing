import abstractGoldImage from "../../res/donothing_goldenWaves.png";
import concreteStairsImage from "../../res/donothing_concreteStairs.png";

export type NavigationLinkItem = {
  kind: "link";
  href: string;
  label: string;
};

export type NavigationLanguageItem = {
  kind: "language";
  label: string;
  chooserTitle: string;
  chooserBody: string;
};

export type NavigationItem = NavigationLinkItem | NavigationLanguageItem;

export type PricingTier = {
  tierLabel: string;
  title: string;
  price: string;
  billingLabel: string;
  features: string[];
  buttonLabel: string;
  cardVariant: "base" | "featured" | "outlined";
  buttonVariant: "ghost" | "gold" | "light";
  accentFeatureIndex?: number;
};

export type FooterDocumentPopover = {
  charterLabel: string;
  documentTitle: string;
  documentSubtitle: string;
  bodyLines: string[];
  sealLabel: string;
};

export type FooterLink = {
  href: string;
  label: string;
  documentPopover?: FooterDocumentPopover;
};

export type FooterDocumentLink = FooterLink & {
  documentPopover: FooterDocumentPopover;
};

export type HomepageCopy = {
  brandName: string;
  heroTitleTop: string;
  heroTitleBottom: string;
  heroDescriptionLine1: string;
  heroDescriptionLine2: string;
  featureTitle: string;
  featureDescription: string;
  spotlightTitle: string;
  spotlightLabel: string;
  abstractWordmark: string;
  inquiryButtonLabel: string;
  inquiryNoticeTitle: string;
  inquiryNoticeBody: string;
  languageChooserCurrentLabel: string;
  languageChooserComingSoonLabel: string;
  testimonialQuote: string;
  testimonialSignature: string;
  testimonialCaption: string;
  copyrightLabel: string;
};

export type HomepageContent = {
  navigationItems: NavigationItem[];
  pricingTiers: PricingTier[];
  homepageCopy: HomepageCopy;
  footerLinks: FooterLink[];
};

export type HomepageLocaleCode = "en" | "ru";

export type HomepageLanguageCode = HomepageLocaleCode | "my" | "th";

export type HomepageLanguageOption = {
  code: HomepageLanguageCode;
  nativeLabel: string;
  englishLabel: string;
  availability: "available" | "coming-soon";
};

export function hasFooterDocumentPopover(
  footerLink: FooterLink,
): footerLink is FooterDocumentLink {
  return footerLink.documentPopover !== undefined;
}

const englishHomepageContent: HomepageContent = {
  navigationItems: [
    { kind: "link", href: "#heritage", label: "About" },
    { kind: "link", href: "#atelier", label: "Reviews" },
    {
      kind: "language",
      label: "Language",
      chooserTitle: "Language Selection",
      chooserBody:
        "Russian is available now. Burmese and Thai are still being prepared.",
    },
  ],
  pricingTiers: [
    {
      tierLabel: "Entry Tier",
      title: "Do Nothing Free",
      price: "0",
      billingLabel: "/ Forever",
      features: [
        "Complete unproductivity",
        "Standard atmosphere access",
        "Guaranteed empty interface",
      ],
      buttonLabel: "Accept Poverty",
      cardVariant: "base",
      buttonVariant: "ghost",
    },
    {
      tierLabel: "Gilded Status",
      title: "Do Nothing Premium",
      price: "1",
      billingLabel: "/ Monthly",
      features: [
        "Includes all Free features",
        "Gilded inactivity log",
        "Synchronized breathing patterns",
        "Increased personal pride",
        "Bragging rights",
      ],
      buttonLabel: "Acquire Status",
      cardVariant: "base",
      buttonVariant: "ghost",
    },
    {
      tierLabel: "Elite Choice",
      title: "Do Nothing Luxury",
      price: "12",
      billingLabel: "/ Monthly",
      features: [
        "Includes all Premium features",
        "Quantum-level idleness",
        "Priority Do Not Disturb",
        "Hand-signed 'Nothing' card",
        "Advanced symbolic recognition",
        "Optional existential validation",
        "Non-contractual superiority",
      ],
      buttonLabel: "Ascend Now",
      cardVariant: "featured",
      buttonVariant: "gold",
    },
    {
      tierLabel: "Ultimate Zenith",
      title: "Do Nothing Infinite",
      price: "99",
      billingLabel: "/ Monthly",
      features: [
        "Includes all Luxury features",
        "Cosmic non-existence",
        "Exclusion from all reality",
        "Legacy of absolute nothingness",
        "Career boost for the resume",
        "Irrefutable proof of success",
        "Certified Infinite badge",
        "Full access to nothingness",
        "The right to do nothing, forever",
      ],
      buttonLabel: "Become Infinite",
      cardVariant: "outlined",
      buttonVariant: "light",
      accentFeatureIndex: 8,
    },
  ],
  homepageCopy: {
    brandName: "Do Nothing",
    heroTitleTop: "The Art of",
    heroTitleBottom: "Doing Nothing",
    heroDescriptionLine1:
      "Welcome to the world's most luxurious experience of nothingness.",
    heroDescriptionLine2:
      "No one delivers perfected nothingness with greater precision.",
    featureTitle: "Unparalleled Absence",
    featureDescription:
      'A decade of refinement shaped the science of nothingness. Our research teams, from Mount Mariana to Everest Trench division continue research into removing the letter "e" from all corporate communications to further reduce effort. Scheduled to announce on February 31st.',
    spotlightTitle: "100% Uptime",
    spotlightLabel: "Of doing absolutely nothing",
    abstractWordmark: "Nothingness",
    inquiryButtonLabel: "Inquire",
    inquiryNoticeTitle: "Sasta Inquiries",
    inquiryNoticeBody:
      "The formal inquiry office at sasta.dev is still being prepared for a more distinguished arrival. Admission will open soon.",
    languageChooserCurrentLabel: "Current",
    languageChooserComingSoonLabel: "Coming Soon",
    testimonialQuote:
      '"I paid $99 and received nothing. It was the most honest transaction of my life. I am now more absent than ever."',
    testimonialSignature: "The Earl of Nothingness",
    testimonialCaption: "Founding Member Since 2014",
    copyrightLabel: "© MMXIV Do Nothing by Sasta. All rights reserved.",
  },
  footerLinks: [
    {
      href: "#top",
      label: "Terms of Nothingness",
      documentPopover: {
        charterLabel: "Article 0",
        documentTitle: "Terms of Nothingness",
        documentSubtitle: "Royal Charter of Deliberate Inaction",
        bodyLines: [
          "No enforceable clauses were drafted, as perfected nothingness leaves little to negotiate.",
          "Continued curiosity constitutes ceremonial acceptance of elegant silence and ornamental absence.",
        ],
        sealLabel: "Filed in Absentia",
      },
    },
    {
      href: "#top",
      label: "Privacy Portfolio",
      documentPopover: {
        charterLabel: "Portfolio II",
        documentTitle: "Privacy Portfolio",
        documentSubtitle: "Confidential Register of Omission",
        bodyLines: [
          "Every possible measure has been taken to preserve strict discretion, maintain ceremonial confidentiality, and guard all patron records with exceptional care.",
          "The final safeguard is practiced in its most immaculate form, as no personal information is retained at any point.",
        ],
        sealLabel: "Sealed in Confidence",
      },
    },
    {
      href: "#top",
      label: "Ethics of Nothingness",
      documentPopover: {
        charterLabel: "Ordinance I",
        documentTitle: "Ethics of Nothingness",
        documentSubtitle: "Perpetual Code of Refined Restraint",
        bodyLines: [
          "The institution remains formally committed to upholding nothingness with composure, discretion, and ceremonial permanence.",
          "All members are encouraged to preserve dignified stillness, avoid needless exertion, and honor absence as an enduring standard.",
        ],
        sealLabel: "Ratified for Eternity",
      },
    },
  ],
};

const russianHomepageContent: HomepageContent = {
  navigationItems: [
    { kind: "link", href: "#heritage", label: "Наследие" },
    { kind: "link", href: "#atelier", label: "Отклики" },
    {
      kind: "language",
      label: "Язык",
      chooserTitle: "Выбор языка",
      chooserBody:
        "Русская редакция уже доступна. Бирманская и тайская версии еще готовятся.",
    },
  ],
  pricingTiers: [
    {
      tierLabel: "Ступень Вхождения",
      title: "Бесплатное Ничто",
      price: "0",
      billingLabel: "/ Навсегда",
      features: [
        "Абсолютная непродуктивность",
        "Стандартный доступ к атмосфере",
        "Гарантированно пустой интерфейс",
      ],
      buttonLabel: "Смириться с нищетой",
      cardVariant: "base",
      buttonVariant: "ghost",
    },
    {
      tierLabel: "Позолоченный Статус",
      title: "Премиальное Ничто",
      price: "1",
      billingLabel: "/ Ежемесячно",
      features: [
        "Включает все бесплатные привилегии",
        "Позолоченный журнал бездействия",
        "Синхронизированные ритмы дыхания",
        "Возросшее чувство собственного достоинства",
        "Эксклюзивное право на хвастовство",
      ],
      buttonLabel: "Приобрести статус",
      cardVariant: "base",
      buttonVariant: "ghost",
    },
    {
      tierLabel: "Выбор Элиты",
      title: "Роскошное Ничто",
      price: "12",
      billingLabel: "/ Ежемесячно",
      features: [
        "Включает все премиальные привилегии",
        "Праздность квантового уровня",
        "Приоритетный режим «Не беспокоить»",
        "Карточка «Ничто», подписанная вручную",
        "Продвинутое символическое признание",
        "Опциональное экзистенциальное подтверждение",
        "Внеконтрактное превосходство",
      ],
      buttonLabel: "Обрести возвышение",
      cardVariant: "featured",
      buttonVariant: "gold",
    },
    {
      tierLabel: "Истинный Зенит",
      title: "Бесконечное Ничто",
      price: "99",
      billingLabel: "/ Ежемесячно",
      features: [
        "Включает все привилегии Роскоши",
        "Космическое небытие",
        "Исключение из всякой реальности",
        "Наследие абсолютного ничто",
        "Престижная строчка для вашего резюме",
        "Неопровержимое доказательство успеха",
        "Сертифицированный знак «Бесконечность»",
        "Полный и безграничный доступ к ничто",
        "Право не делать абсолютно ничего, вечно",
      ],
      buttonLabel: "Стать бесконечным",
      cardVariant: "outlined",
      buttonVariant: "light",
      accentFeatureIndex: 8,
    },
  ],
  homepageCopy: {
    brandName: "Do Nothing",
    heroTitleTop: "Искусство",
    heroTitleBottom: "Ничегонеделания",
    heroDescriptionLine1:
      "Добро пожаловать в самый роскошный в мире опыт небытия.",
    heroDescriptionLine2:
      "Никто не способен предоставить доведенное до абсолюта ничто с большей филигранностью.",
    featureTitle: "Беспрецедентное Отсутствие",
    featureDescription:
      'Десятилетие утонченной шлифовки сформировало науку ничегонеделания. Наши исследовательские группы, от Марианской Вершины до подразделения впадины Эвереста, продолжают изыскания по удалению буквы "е" из всех корпоративных коммуникаций ради дальнейшего снижения усилий. Официальное заявление назначено на 31 февраля.',
    spotlightTitle: "100% Бесперебойность",
    spotlightLabel: "В абсолютном ничегонеделании",
    abstractWordmark: "Ничто",
    inquiryButtonLabel: "Запрос",
    inquiryNoticeTitle: "Служба запросов Sasta",
    inquiryNoticeBody:
      "Формальная приемная на sasta.dev все еще готовится к более выдающемуся прибытию. Двери распахнутся в скором времени.",
    languageChooserCurrentLabel: "Текущий",
    languageChooserComingSoonLabel: "Скоро",
    testimonialQuote:
      '"Я заплатил 99 долларов и не получил ровным счетом ничего. Это была самая честная сделка в моей жизни. Теперь я отсутствую как никогда прежде."',
    testimonialSignature: "Граф Небытия",
    testimonialCaption: "Почетный учредитель с 2014 года",
    copyrightLabel: "© MMXIV Do Nothing by Sasta. Все права защищены.",
  },
  footerLinks: [
    {
      href: "#top",
      label: "Условия Небытия",
      documentPopover: {
        charterLabel: "Статья 0",
        documentTitle: "Условия Небытия",
        documentSubtitle: "Королевская Хартия Намеренного Бездействия",
        bodyLines: [
          "Никаких подлежащих исполнению пунктов составлено не было, ибо совершенное ничто не оставляет предмета для торгов.",
          "Продолжающееся любопытство равносильно церемониальному принятию элегантного безмолвия и орнаментального отсутствия.",
        ],
        sealLabel: "Заверено Заочно",
      },
    },
    {
      href: "#top",
      label: "Портфолио Конфиденциальности",
      documentPopover: {
        charterLabel: "Портфолио II",
        documentTitle: "Портфолио Конфиденциальности",
        documentSubtitle: "Секретный Реестр Упущений",
        bodyLines: [
          "Были предприняты все мыслимые меры для сохранения строжайшей осмотрительности, поддержания церемониальной секретности и охраны всех записей о покровителях с исключительной тщательностью.",
          "Финальная мера защиты практикуется в ее самой безупречной форме, поскольку никакая личная информация ни на каком этапе не сохраняется.",
        ],
        sealLabel: "Скреплено Печатью Конфиденциальности",
      },
    },
    {
      href: "#top",
      label: "Этика Небытия",
      documentPopover: {
        charterLabel: "Ордонанс I",
        documentTitle: "Этика Небытия",
        documentSubtitle: "Вечный Кодекс Изысканной Сдержанности",
        bodyLines: [
          "Учреждение остается формально приверженным поддержанию ничто с невозмутимостью, тактом и церемониальным постоянством.",
          "Всем членам настоятельно рекомендуется сохранять исполненное достоинства спокойствие, избегать излишнего напряжения и чтить отсутствие как непреходящий эталон.",
        ],
        sealLabel: "Ратифицировано на Вечность",
      },
    },
  ],
};

export const defaultHomepageLocaleCode: HomepageLocaleCode = "en";

export const homepageLocaleContentByCode: Record<HomepageLocaleCode, HomepageContent> = {
  en: englishHomepageContent,
  ru: russianHomepageContent,
};

export const homepageLanguageOptions: HomepageLanguageOption[] = [
  {
    code: "en",
    nativeLabel: "English",
    englishLabel: "English",
    availability: "available",
  },
  {
    code: "ru",
    nativeLabel: "Русский",
    englishLabel: "Russian",
    availability: "available",
  },
  {
    code: "my",
    nativeLabel: "မြန်မာ",
    englishLabel: "Burmese",
    availability: "coming-soon",
  },
  {
    code: "th",
    nativeLabel: "ไทย",
    englishLabel: "Thai",
    availability: "coming-soon",
  },
];

export const homepageImages = {
  staircasePlaceholder: concreteStairsImage,
  abstractGoldPlaceholder: abstractGoldImage,
};
