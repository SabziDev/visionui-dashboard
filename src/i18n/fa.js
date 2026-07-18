const fa = {
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

    table: {
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

  projects: {
    adobexd: "ورژن Chakra Soft UI",
    fixErrors: "رفع خطاهای پلتفرم",
    spotify: "اپلیکیشن موبایل ما را راه‌اندازی کنید",
    addNewPricingPage: "صفحه جدید قیمت‌گذاری را اضافه کنید",
    redesign: "طراحی مجدد فروشگاه آنلاین جدید",
  },
};

export default fa;
