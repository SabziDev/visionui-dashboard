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
