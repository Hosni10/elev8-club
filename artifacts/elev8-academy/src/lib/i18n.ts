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
        desc: "Founded by a UEFA & MSc licensed Head Coach with a 10-year international legacy across 4 countries, Elev8 brings a distinct football identity to New Cairo. We move beyond traditional drills, adopting a dedicated Holistic approach to Player and Human Athlete development.",
        stats: {
          years: "10+ Years Experience",
          countries: "4 Countries",
          champs: "5 Championships",
          ratio: "1:12 Coach Ratio"
        }
      },
      story: {
        title: "OUR STORY: WHERE SCIENCE MEETS THE PITCH",
        desc: "Elev8 is built on over a decade of elite international experience across Spain, the UAE, Kuwait, and Egypt. Our founder’s legacy is built on creating championship-winning teams from scratch, securing major titles in the Man City League and Junior Premier League, and reaching the DOFA Dubai final while competing at the highest level against global giants such as Juventus, AC Milan, LaLiga academies, Manchester City Dubai, and Barça Dubai.\n\n But we are more than just trophies. Our story is driven by a deep academic foundation. Led by a Head Coach with a Master’s Degree (MSc) in High-Performance Coaching from Spain and UEFA, AFC, and CAF licenses, we bring a world-class laboratory to the pitch.\n\n We don't just coach football; we architect the 'Human Athlete.' Through our unique 8-Structure methodology and a holistic approach to performance optimization, we bridge the gap between local talent and global professional standards. Now in New Cairo, Elev8 is here to provide an authentic, science-led pathway for the next generation of champions."
      },
      coaches: {
        title: "ELITE COACHING & PERFORMANCE TEAM",
        desc: "Led by highly qualified professionals with international experience across Egypt, Spain, Kuwait, and the UAE.",
        credentials: [
          "MSc in High Performance Football Coaching (Spain)",
          "UEFA Licensed Coach",
          "AFC Licensed Coach",
          "CAF Licensed Coach",
          "Strength & Conditioning Diploma For Football",
          "Athletic Performance Enhancement Diploma",
          "Physical preparation & Work Load Management",
          "Physical Preparation & Recovery Specialist"
        ]
      },
      methodology: {
        title: "OUR 8 PILLARS OF HOLISTIC DEVELOPMENT",
        subhead: "Architecting the 'Human Athlete' through an integrated, science-led approach.",
        pillars: [
          { title: "COORDINATIVE", desc: "Full ball mastery and perfect motor synchronization." },
          { title: "COGNITIVE", desc: "Elite speed of thought and sharp decision-making." },
          { title: "BIO-ENERGETIC", desc: "Optimized energy systems for sustained peak intensity." },
          { title: "SOCIO-AFFECTIVE", desc: "Collective intelligence and shared group dynamics." },
          { title: "EMOTIONAL-VOLITIONAL", desc: "Strong willpower and emotional stability under pressure." },
          { title: "CONDITIONING", desc: "Professional-grade strength, speed, and endurance." },
          { title: "CREATIVE-EXPRESSIVE", desc: "Pitch innovation and unique solution-finding." },
          { title: "MENTAL", desc: "Championship mindset and psychological resilience." }
        ]
      },
      programs: {
        title: "TRAINING PROGRAMS",
        levels: [
          {
            title: "U6 - U8",
            subtitle: "Coordinative Foundation",
            desc: "Building precise motor coordination and ball mastery through a holistic, science-led approach."
          },
          {
            title: "U10",
            subtitle: "Tactical Intelligence & Superiorities",
            desc: "Enhancing decision-making through game understanding and identifying superiorities (Numerical, Positional, and Qualitative)."
          },
          {
            title: "U12 - U14",
            subtitle: "Performance Optimization",
            desc: "Advanced tactical integration, specialized conditioning, and mastering complex game moments."
          },
          {
            title: "Elite Teams",
            subtitle: "Professional Pathway",
            desc: "Competitive league exposure, individual career tracking, and global-standard preparation."
          }
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
          {
            title: "MSc & Triple-Continental Licenses",
            desc: "Master’s degree from Spain (FSI) combined with UEFA, AFC, and CAF certifications."
          },
          {
            title: "Holistic \"Human Athlete\" Approach",
            desc: "An original 8-pillar system that develops the person, not just the player."
          },
          {
            title: "Triple Global Philosophies",
            desc: "Expertly integrating Structured Training, Tactical Periodization, and Cognitive-Ecological models."
          },
          {
            title: "Tactical & Cognitive Intelligence",
            desc: "Focus on elite decision-making, space dynamics, and mastering pitch superiorities."
          },
          {
            title: "Strict Coach-to-Player Ratio",
            desc: "No commercial crowding; we guarantee individualized attention for every athlete."
          },
          {
            title: "Global Championship Pedigree",
            desc: "A proven track record of success against giants like Juventus, AC Milan, and Man City."
          },
          {
            title: "Bespoke Football Identity",
            desc: "A unique game idea and original methodology built from a decade of international expertise."
          },
          {
            title: "Clear Professional Pathway",
            desc: "A defined trajectory from foundation stages to licensed club competition in Egypt."
          }
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
          "ماجستير العلوم في تدريب كرة القدم عالي الأداء (إسبانيا)",
          "مدرب معتمد من UEFA",
          "مدرب معتمد من AFC",
          "مدرب معتمد من CAF",
          "دبلوم الإعداد البدني والقوة لكرة القدم",
          "دبلوم تحسين الأداء الرياضي",
          "الإعداد البدني وإدارة الأحمال التدريبية",
          "أخصائي الإعداد البدني والاستشفاء"
        ]
      },
      methodology: {
        title: "أركاننا الثمانية للتطوير الشامل",
        subhead: "هندسة \"الرياضي المتكامل\" عبر نهج متكامل قائم على العلم.",
        pillars: [
          { title: "التنسيقي", desc: "إتقان كامل للكرة وتزامن حركي مثالي." },
          { title: "المعرفي", desc: "سرعة تفكير نخبوية ودقة عالية في اتخاذ القرار." },
          { title: "الحيوي-الطاقي", desc: "تحسين أنظمة الطاقة للحفاظ على أعلى شدة أداء." },
          { title: "الاجتماعي-الوجداني", desc: "ذكاء جماعي وديناميكيات مشتركة داخل الفريق." },
          { title: "الانفعالي-الإرادي", desc: "إرادة قوية وثبات انفعالي تحت الضغط." },
          { title: "الإعداد البدني", desc: "قوة وسرعة وتحمل بمعايير احترافية." },
          { title: "الإبداعي-التعبيري", desc: "ابتكار داخل الملعب وقدرة فريدة على إيجاد الحلول." },
          { title: "الذهني", desc: "عقلية الأبطال وصلابة نفسية عالية." }
        ]
      },
      programs: {
        title: "برامج التدريب",
        levels: [
          {
            title: "U6 - U8",
            subtitle: "القاعدة التنسيقية",
            desc: "بناء تنسيق حركي دقيق وإتقان التعامل مع الكرة عبر نهج شامل قائم على العلم."
          },
          {
            title: "U10",
            subtitle: "الذكاء التكتيكي والتفوقات",
            desc: "تطوير اتخاذ القرار من خلال فهم اللعبة وتحديد التفوقات (العددية، والتمركزية، والنوعية)."
          },
          {
            title: "U12 - U14",
            subtitle: "تحسين الأداء",
            desc: "دمج تكتيكي متقدم، إعداد بدني متخصص، وإتقان لحظات اللعب المعقدة."
          },
          {
            title: "الفرق النخبوية",
            subtitle: "المسار الاحترافي",
            desc: "احتكاك تنافسي في الدوريات، تتبع فردي للمسار الرياضي، وإعداد بمعايير عالمية."
          }
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
          {
            title: "ماجستير ورخص قارية ثلاثية",
            desc: "درجة ماجستير من إسبانيا (FSI) إلى جانب شهادات UEFA وAFC وCAF."
          },
          {
            title: "نهج \"الرياضي المتكامل\" الشامل",
            desc: "منظومة أصلية من 8 أركان تطوّر الإنسان قبل اللاعب."
          },
          {
            title: "ثلاث فلسفات عالمية",
            desc: "دمج احترافي بين التدريب المنظم، الدورية التكتيكية، والنموذج المعرفي-البيئي."
          },
          {
            title: "ذكاء تكتيكي ومعرفي",
            desc: "تركيز على اتخاذ القرار النخبوي، ديناميكيات المساحات، وإتقان التفوقات داخل الملعب."
          },
          {
            title: "نسبة مدرب إلى لاعب صارمة",
            desc: "بدون ازدحام تجاري؛ نضمن اهتماماً فردياً لكل لاعب."
          },
          {
            title: "سجل بطولي عالمي",
            desc: "سجل نجاح مثبت أمام أندية كبرى مثل يوفنتوس، ميلان، ومانشستر سيتي."
          },
          {
            title: "هوية كروية مصممة خصيصاً",
            desc: "فكرة لعب فريدة ومنهجية أصلية مبنية على عقد من الخبرة الدولية."
          },
          {
            title: "مسار احترافي واضح",
            desc: "مسار محدد من مراحل التأسيس حتى المنافسة الرسمية مع الأندية المرخصة في مصر."
          }
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
