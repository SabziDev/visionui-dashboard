// const { t } = useTranslation();
// {t("pages.private.dashboard.welcomeCard.welcomeBack")}

const en = {
  words: {
    toast: "Operation completed successfully",

    overview: "OVERVIEW",
    h: "h",
    min: "min",
  },

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
      components: {
        projectsTable: {
          title: "Projects",
          desc: "30 done this month",

          cols: {
            company: "COMPANIES",
            budget: "BUDGET",
            completion: "COMPLETION",
          },
          notSet: "Not set",
        },
      },

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
        ordersOverview: {
          title: "Orders overview",
          desc: "+30% this month",
        },
      },
      tables: {
        authorTable: {
          title: "Authors Table",

          function: {
            manager: { job: "Manager", side: "Organization" },
            programmer: { job: "Programmer", side: "Developer" },
            executive: { job: "Executive", side: "Projects" },
            designer: { job: "Designer", side: "UI/UX Design" },
          },

          cols: {
            author: "AUTHOR",
            function: "FUNCTION",
            status: "STATUS",
            employed: "EMPLOYED",
          },
          online: "Online",
          offline: "Offline",
        },
      },
      profile: {
        welocmeback: {
          title: "Welcome back!",
          desc: "Nice to see you, ",
          btn: "Turn on your car",
        },
        carInfo: {
          title: "Car Information",
          desc: "Hello, your Car is ready!",

          currentLoad: "Current load",
          fullCharge: "Time to full charge",
          batteryHealth: "Battery Health",
          efficiency: "Efficiency",
          consumption: "Consumption",
          thisWeek: "This Week",
        },
        profileInfo: {
          title: "Profile Information",
          desc: "Hi, I’m Abolfazl Sabzmohammadi, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",

          fullName: "Full Name: ",
          mobile: "Mobile: ",
          email: "Email: ",
          location: "Location :",
          socialMedia: "Social Media: ",
        },
        platformSettings: {
          title: "Platform Settings",
          account: "ACCOUNT",
          application: "APPLICATION",

          radioBtns: {
            emailMeWhenSomeoneFollowsMe: "Email me when someone follows me",
            emailMeWhenSomeoneAnswersTo: "Email me when someone answers to...",
            emailMeWhenSomeoneMentionsMe: "Email me when someone mentions me",
            newLaunchesAndProjects: "New launches and projects",
            monthlyProductUpdates: "Monthly product updates",
            subscribeToNewsletter: "Subscribe to newsletter",
            receiveMailsWeekly: "Receive mails weekly",
          },
        },
        projects: {
          title: "Projects",
          desc: "Architects design houses",

          projectsData: {
            proj1: {
              title: "Modern",
              desc: "As Uber works through a huge amount of internal management turmoil...",
              name: "Project #1",
            },
            proj2: {
              title: "Scandinavian",
              desc: "Music is something that every person has his or her own specific opinion about...",
              name: "Project #2",
            },
            proj3: {
              title: "Minimalist",
              desc: "Different people have different taste, and various types of music...",
              name: "Project #3",
            },

            btn: "VIEW MORE",
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
  components: {
    appLoadError: {
      title: "Something went wrong",
      desc: "Please refresh the page",

      btn: "Try Again",
    },
  },

  projects: {
    adobexd: "Chakra Soft UI Version",
    fixErrors: "Fix Platform Errors",
    spotify: "Launch our Mobile App",
    addNewPricingPage: "Add the New Pricing Page",
    redesign: "Redesign New Online Shop",
  },
};

export default en;
