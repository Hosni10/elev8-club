import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        programs: "Programs",
        coaches: "Coaches",
        gallery: "Gallery",
        contact: "Contact"
      },
      hero: {
        headline: "ELEVATE YOUR GAME. ELEVATE YOUR FUTURE.",
        subhead: "A science-led football academy shaping the next generation of elite athletes through holistic development and proven methodologies.",
        join: "Join the Academy",
        learn: "Learn More"
      },
      about: {
        title: "WHO WE ARE",
        desc: "We are a science-led football academy that takes a holistic approach to player development. Our work is guided by a clear football identity and a consistent game idea that shapes every session.",
        stats: {
          years: "10+ Years Experience",
          countries: "4 Countries",
          champs: "5 Championships",
          ratio: "1:12 Coach Ratio"
        }
      },
      story: {
        title: "OUR STORY",
        desc: "With over a decade of experience in the UAE, our founder built teams from scratch, winning championships in the Man City League and Junior Premier League – including undefeated seasons – and competing in the DOFA Dubai final against global academies like Man City and Barça."
      },
      coaches: {
        title: "Elite Coaching & Performance Team",
        desc: "Led by highly qualified professionals with international experience across Egypt, Spain, Kuwait, and the UAE.",
        credentials: [
          "Master in High Performance Football Coaching (FSI – Spain)",
          "UEFA B License",
          "AFC C License",
          "Strength & Conditioning Diploma",
          "Performance Enhancement Diploma",
          "Physical Preparation Diploma"
        ]
      },
      methodology: {
        title: "Our 5 Pillars of Development",
        pillars: [
          { title: "Technical & Skill", desc: "Mastering the ball in high-pressure situations." },
          { title: "Physical & S&C", desc: "Building athletic endurance, speed, and power." },
          { title: "Tactical Awareness", desc: "Game intelligence and strategic positioning." },
          { title: "Psychological", desc: "Mental resilience and winning mindset." },
          { title: "Creativity", desc: "Confidence to express talent on the pitch." }
        ]
      },
      programs: {
        title: "TRAINING PROGRAMS",
        levels: [
          { title: "U6-U8", subtitle: "Fun & Fundamentals" },
          { title: "U10", subtitle: "Basic Tactics & Decision-Making" },
          { title: "U12-U14", subtitle: "Physical Preparation & Advanced Tactics" },
          { title: "Elite Teams", subtitle: "Official Leagues + International Exposure" }
        ]
      },
      achievements: {
        title: "PROVEN TRACK RECORD",
        items: [
          { title: "U11", desc: "Junior Premier League champions (Division 2)" },
          { title: "U13", desc: "3rd place in Man City League" },
          { title: "U15", desc: "DOFA quarter-finalist" },
          { title: "U16", desc: "Undefeated Man City League champions, Junior Premier League champions, DOFA finalists" },
          { title: "U17", desc: "Undefeated Man City League U18 champions, DOFA finalists & cup semi-finalists" }
        ]
      },
      diff: {
        title: "WHAT MAKES US DIFFERENT",
        items: [
          "Playing & coaching in 4 countries",
          "Not a one-size-fits-all academy",
          "Three studied philosophies",
          "Clear identity & game idea",
          "Proven track record",
          "Elite coaching qualifications",
          "Small groups (1:12)",
          "International exposure (UAE + Europe camps)"
        ]
      },
      testimonials: {
        title: "WHAT PARENTS SAY",
        items: [
          { text: "The coaching quality here is unmatched. My son has grown tremendously both as a player and a person.", author: "Parent, Dubai" },
          { text: "Professional, structured, and passionate. This is what a real football academy looks like.", author: "Parent, Cairo" }
        ]
      },
      partnership: {
        title: "PARTNERSHIP OPPORTUNITY",
        desc: "We are ready to establish and manage a professional football academy at your facility in New Cairo or 6th October. We provide the full system: coaching staff, training methodology, player development, and operational management.",
        cta: "Partner With Us"
      },
      contact: {
        title: "CONTACT US",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          ageGroup: "Child's Age Group",
          message: "Message",
          submit: "Send Message",
          success: "Message sent successfully!"
        },
        info: {
          location: "New Cairo, Egypt"
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "عن الأكاديمية",
        programs: "البرامج",
        coaches: "المدربون",
        gallery: "المعرض",
        contact: "اتصل بنا"
      },
      hero: {
        headline: "ارتقِ بلعبتك. ارتقِ بمستقبلك.",
        subhead: "أكاديمية كرة قدم تعتمد على العلم وتطوير اللاعبين بنهج شامل لبناء الجيل القادم من الرياضيين النخبة.",
        join: "انضم للأكاديمية",
        learn: "اعرف المزيد"
      },
      about: {
        title: "من نحن",
        desc: "نحن أكاديمية كرة قدم تعمل بالعلوم الرياضية، ونتبنى نهجاً شاملاً في تطوير اللاعب. عملنا موجه بهوية واضحة وفكرة لعب متسقة تشكل كل حصة تدريبية.",
        stats: {
          years: "خبرة ١٠+ سنوات",
          countries: "٤ دول",
          champs: "٥ بطولات",
          ratio: "نسبة ١٢:١ (لاعب/مدرب)"
        }
      },
      story: {
        title: "قصتنا",
        desc: "بخبرة تزيد عن ١٠ سنوات في الإمارات، قاد مؤسسنا فرقًا بدأت من الصفر حتى حصدت بطولات في دوري مان سيتي والجونيور بريمير ليج بدون هزيمة، ووصلت لنهائي دوفا ضد أكاديميات عالمية مثل مان سيتي وبرشلونة."
      },
      coaches: {
        title: "فريق النخبة للتدريب والأداء",
        desc: "بقيادة محترفين مؤهلين تأهيلاً عالياً بخبرات دولية في مصر، إسبانيا، الكويت، والإمارات.",
        credentials: [
          "ماجستير في تدريب الأداء العالي (FSI – إسبانيا)",
          "رخصة UEFA B",
          "رخصة AFC C",
          "دبلوم الإعداد البدني والقوة",
          "دبلوم تحسين الأداء",
          "دبلوم التأهيل البدني"
        ]
      },
      methodology: {
        title: "أركان التطوير الخمسة لدينا",
        pillars: [
          { title: "المهارة والتكنيك", desc: "إتقان التعامل مع الكرة تحت الضغط." },
          { title: "اللياقة والإعداد البدني", desc: "بناء التحمل، السرعة، والقوة الانفجارية." },
          { title: "الذكاء التكتيكي", desc: "الوعي بالملعب والتمركز الاستراتيجي." },
          { title: "الجانب النفسي والذهني", desc: "الصلابة العقلية وعقلية الفوز." },
          { title: "الإبداع والثقة", desc: "الثقة لإبراز الموهبة على أرض الملعب." }
        ]
      },
      programs: {
        title: "برامج التدريب",
        levels: [
          { title: "U6-U8", subtitle: "المتعة والأساسيات" },
          { title: "U10", subtitle: "التكتيك البسيط واتخاذ القرار" },
          { title: "U12-U14", subtitle: "الإعداد البدني والتكتيك المتقدم" },
          { title: "الفرق النخبوية", subtitle: "دوريات رسمية + احتكاك دولي" }
        ]
      },
      achievements: {
        title: "سجل حافل بالنجاحات",
        items: [
          { title: "U11", desc: "أبطال جونيور بريمير ليج (الدرجة الثانية)" },
          { title: "U13", desc: "المركز الثالث في دوري مانشستر سيتي" },
          { title: "U15", desc: "ربع نهائي بطولة دوفا دبي" },
          { title: "U16", desc: "أبطال دوري مان سيتي (بدون هزيمة)، أبطال جونيور بريمير ليج، نهائي دوفا" },
          { title: "U17", desc: "أبطال دوري مان سيتي U18 (بدون هزيمة)، نهائي دوفا ونصف نهائي الكأس" }
        ]
      },
      diff: {
        title: "ما الذي يميزنا؟",
        items: [
          "لعب وتدريب في ٤ دول",
          "لسنا أكاديمية بقالب واحد للجميع",
          "ثلاث فلسفات مدروسة",
          "هوية لعب واضحة",
          "سجل حافل بالنجاحات",
          "مؤهلات تدريبية نخبوية",
          "مجموعات صغيرة (١:١٢)",
          "احتكاك دولي (معسكرات الإمارات وأوروبا)"
        ]
      },
      testimonials: {
        title: "ماذا يقول أولياء الأمور",
        items: [
          { text: "جودة التدريب هنا لا مثيل لها. ابني نما بشكل هائل كلاعب وكشخص.", author: "ولي أمر، دبي" },
          { text: "محترف، منظم، وشغوف. هذا ما تبدو عليه أكاديمية كرة قدم حقيقية.", author: "ولي أمر، القاهرة" }
        ]
      },
      partnership: {
        title: "فرصة شراكة",
        desc: "نحن مستعدون لإنشاء وإدارة أكاديمية كرة قدم احترافية في منشأتك في القاهرة الجديدة أو السادس من أكتوبر. نحن نوفر النظام الكامل: الطاقم التدريبي، منهجية التدريب، تطوير اللاعبين، والإدارة التشغيلية.",
        cta: "شاركنا النجاح"
      },
      contact: {
        title: "تواصل معنا",
        form: {
          name: "الاسم الكامل",
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف",
          ageGroup: "المرحلة السنية للطفل",
          message: "الرسالة",
          submit: "إرسال الرسالة",
          success: "تم إرسال الرسالة بنجاح!"
        },
        info: {
          location: "القاهرة الجديدة، مصر"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
