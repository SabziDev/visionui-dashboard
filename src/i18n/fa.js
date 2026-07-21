const fa = {
  words: {
    overview: "نمای کلی",
    h: " ساعت و",
    min: " دقیقه",
  },

  pagesMeta: {
    dashboard: {
      title: "داشبورد Visionui",
      desc: "یک داشبورد برای مدیریت کسب و کار",
    },
    tables: {
      title: "جداول",
      desc: "جداول",
    },
    billing: {
      title: "صورت حساب",
      desc: "صورت حساب",
    },
    profile: {
      title: "پروفایل ادمین",
      desc: "پروفایل ادمین",
    },

    signin: {
      title: "ورود به داشبورد - visionui",
      desc: "صفحه ورود",
    },

    notFound: {
      title: "صفحه پیدا نشد",
      desc: "صفحه ای که به دنبال آن هستید وجود ندارد یا منتقل شده است. لطفا آدرس را بررسی کنید یا به صفحه خانه بروید.",
    },
  },
  errors: {
    connection: "خطا در برقراری ارتباط با سرور",
    default: "عملیات ناموفق! دوباره تلاش کنید",
  },

  layouts: {
    header: {
      searchInput: {
        placeholder: "...جستجو",
      },

      pagesTitle: {
        dashboard: "داشبورد",
        tables: "جداول",
        billing: "صورت حساب",
        profile: "پروفایل",
      },
    },

    sidebar: {
      title: "پنل VISION UI",

      menu: {
        dashboard: "داشبورد",
        tables: "جداول",
        billing: "صورت حساب",
        profile: "پروفایل",

        accountPages: {
          title: "تنظیمات",
          switchLanguage: "تغییر به ",
          logout: "خروج",
        },
      },

      needHelp: {
        title: "به کمک نیاز دارید؟",
        desc: "لطفا مستندات ما را بررسی کنید.",
        btn: "مستندات",
      },
    },
  },
  pages: {
    private: {
      components: {
        projectsTable: {
          title: "پروژه ها",
          desc: "30 مورد در این ماه انجام شد",

          cols: {
            company: "شرکت ها",
            budget: "بودجه",
            completion: "تکمیل",
          },
          notSet: "تنظیم نشده",
        },
      },

      dashboard: {
        todayStats: {
          money: {
            title: "درآمد امروز",
          },
          users: {
            title: "کاربران امروز",
          },
          clients: {
            title: "مشتری های جدید",
          },
          sales: {
            title: "فروش کلی",
          },
        },
        welcomeCard: {
          welcomeBack: "خوش برگشتید،",
          greeting:
            "از دیدن دوباره‌اتان خوشحالیم! هر سوالی دارید از من بپرسید.",
          btn: "بپرس",
        },
        satisfactionRate: {
          title: "نرخ رضایت",
          desc: "از تمام پروژه‌ها",
          btn: "بر اساس لایک‌ها",
        },
        referralTracking: {
          title: "پیگیری دعوت شده‌ها",
          desc: "از ماه گذشته تا امروز",
          invited: "فرد دعوت شده",
          totalScore: "امتیاز کل",
        },
        salesOverview: {
          title: "نمای کلی فروش",
          desc: ["(+5) مورد دیگر", " در 2021"],

          chartMonths: [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
          ],

          tooltip: {
            currentYear: "امسال",
            lastYear: "سال گذشته",
          },
        },
        activeUsers: {
          title: "کاربران فعال",
          desc: ["(+23)", "  نسبت به هفته گذشته"],

          badges: {
            users: "کاربران",
            clicks: "کلیک ها",
            sales: "فروش ها",
            items: "آیتم ها",
          },
        },
        ordersOverview: {
          title: "نمای کلی سفارشات",
          desc: "+30% در این ماه",
        },
      },
      tables: {
        authorTable: {
          title: "لیست نویسندگان",

          function: {
            manager: { job: "مدیر", side: "سازمان" },
            programmer: { job: "برنامه نویس", side: "دولوپر" },
            executive: { job: "اجرایی", side: "پروژه ها" },
            designer: { job: "طراح", side: "طراح UI/UX" },
          },

          cols: {
            author: "نویسنده",
            function: "حوزه کاری",
            status: "وضعیت",
            employed: "تاریخ استخدام",
          },
          online: "آنلاین",
          offline: "آفلاین",
        },
      },
      profile: {
        welocmeback: {
          title: "خوش برگشتید!",
          desc: "از دیدنت خوشحالیم، ",
          btn: "ماشینت رو روشن کن",
        },
        carInfo: {
          title: "اطلاعات ماشین",
          desc: "سلام، ماشینتون آماده است!",

          currentLoad: "بارگذاری فعلی",
          fullCharge: "مانده تام شارژ کامل",
          batteryHealth: "سلامت باتری",
          efficiency: "کارایی",
          consumption: "مصرف",
          thisWeek: "این هفته",
        },
        profileInfo: {
          title: "اطلاعات پروفایل",
          desc: "سلام، من ابوالفضل سبزمحمدی هستم. درباره تصمیم‌گیری: اگر نمی‌توانید تصمیم بگیرید، پاسخ «نه» است. اگر با دو مسیرِ به‌یک‌اندازه دشوار روبرو هستید، آن مسیری را انتخاب کنید که در کوتاه‌مدت دردناک‌تر است (چرا که اجتناب از درد، توهمِ برابر بودنِ آن‌ها را ایجاد می‌کند).",

          fullName: "نام کامل: ",
          mobile: "موبایل: ",
          email: "ایمیل: ",
          location: "مکان: ",
          socialMedia: "شبکه های مجازی: ",
        },
      },
    },

    public: {
      signin: {
        title: "داشبورد VISION UI",
        desc: "الهام‌گرفته از آینده:",

        copyToast: "متن با موفقیت در کلیپ‌بورد کپی شد!",
        loggingToast: "در حال ورود به پنل...",

        form: {
          title: "از دیدنتان خوشحالیم!",
          desc: "برای ورود از ایمیل و رمز عبور خود استفاده کنید",

          inputs: {
            errMessage: ["لطفا از ", " برای ورود استفاده کنید."],

            email: {
              placeholder: "آدرس ایمیل",
            },
            password: {
              placeholder: "گذرواژه",
            },
            rememberMe: {
              label: "مرا به خاطر بسپار",
            },
          },

          submitBtn: "ورود",
        },
      },
    },

    notFound: {
      btn: "بازگشت به صفحه اصلی",
    },
  },
  components: {
    appLoadError: {
      title: "مشکلی پیش آمد",
      desc: "لطفا صفحه را رفرش کنید",

      btn: "تلاش مجدد",
    },
  },

  projects: {
    adobexd: "ورژن Chakra Soft UI",
    fixErrors: "رفع خطاهای پلتفرم",
    spotify: "اپلیکیشن موبایل ما را راه‌اندازی کنید",
    addNewPricingPage: "صفحه جدید قیمت‌گذاری را اضافه کنید",
    redesign: "طراحی مجدد فروشگاه آنلاین جدید",
  },
};

export default fa;
