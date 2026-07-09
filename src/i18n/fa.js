const fa = {
  pagesMeta: {
    dashboard: {
      title: "داشبورد Visionui",
      desc: "یک داشبورد برای مدیریت کسب و کار",
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
    private: {},

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
};

export default fa;
