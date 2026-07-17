// const { t } = useTranslation();
// {t("pages.private.dashboard.welcomeCard.welcomeBack")}

const en = {
  pagesMeta: {
    dashboard: {
      title: "Visionui-Dashboard",
      desc: "A dashboard for manage business",
    },
    tables: {
      title: "Tables",
      desc: "Tables",
    },
    billing: {
      title: "Billing",
      desc: "Billing",
    },
    profile: {
      title: "Admin-Profile",
      desc: "Admin-Profile",
    },

    signin: {
      title: "Sign-in to dashboard - visionui",
      desc: "Sign-in page",
    },

    notFound: {
      title: "Page Not Found",
      desc: "The page you are looking for does not exist or has been moved. Please check the address or go to the home page.",
    },
  },

  errors: {
    connection: "Unable to connect to the server",
    default: "Something went wrong! Please try again",
  },

  components: {
    appLoadError: {
      title: "Something went wrong",
      desc: "Please refresh the page",

      btn: "Try Again",
    },
  },

  layouts: {
    header: {
      searchInput: {
        placeholder: "Search...",
      },

      pagesTitle: {
        dashboard: "Dashboard",
        tables: "Tables",
        billing: "Billing",
        profile: "Profile",
      },
    },

    sidebar: {
      title: "VISION UI PANEL",

      menu: {
        dashboard: "Dashboard",
        tables: "Tables",
        billing: "Billing",
        profile: "Profile",

        accountPages: {
          title: "Settings",
          switchLanguage: "Switch to ",
          logout: "Log out",
        },
      },

      needHelp: {
        title: "Need help?",
        desc: "Please check our docs",
        btn: "DOCUMENTATION",
      },
    },
  },

  pages: {
    private: {
      dashboard: {
        todayStats: {
          money: {
            title: "Today’s Money",
          },
          users: {
            title: "Today’s Users",
          },
          clients: {
            title: "New Clients",
          },
          sales: {
            title: "Total Sales",
          },
        },

        welcomeCard: {
          welcomeBack: "Welcome back,",
          greeting: "Glad to see you again!Ask me anything.",
          btn: "Tap to record",
        },

        satisfactionRate: {
          title: "Satisfaction Rate",
          desc: "From all projects",
          btn: "Based on likes",
        },

        referralTracking: {
          title: "Referral Tracking",
          desc: "From last month to today",
          invited: "Invited people",
          totalScore: "Total Score",
        },

        salesOverview: {
          title: "Sales overview",
          desc: ["(+5) more", " in 2021"],

          chartMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],

          tooltip: {
            currentYear: "Current year",
            lastYear: "Last year",
          },
        },

        activeUsers: {
          title: "Active Users",
          desc: ["(+23)", "  than last week"],

          badges: {
            users: "Users",
            clicks: "Clicks",
            sales: "Sales",
            items: "Items",
          },
        },
      },
    },

    public: {
      signin: {
        title: "THE VISION UI DASHBOARD",
        desc: "INSPIRED BY THE FUTURE:",

        copyToast: "Text successfully copied to clipboard!",
        loggingToast: "Logging into the panel...",

        form: {
          title: "Nice to see you!",
          desc: "Enter your email and password to sign in",

          inputs: {
            errMessage: ["Please use ", " to sign in."],

            email: {
              placeholder: "Your email address...",
            },
            password: {
              placeholder: "Your password...",
            },
            rememberMe: {
              label: "Remember Me",
            },
          },

          submitBtn: "SIGN IN",
        },
      },
    },

    notFound: {
      btn: "Return Home",
    },
  },
};

export default en;
