import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.umd.js';

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom left",
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  categories: {
    necessary: {
      readOnly: true
    },
    analytics: {},
    marketing: {}
  },
  language: {
    default: "en",
    translations: {
      en: {
        consentModal: {
          title: "Vítejte na našich webových stránkách",
          description: "Jsme povinni informovat vás, že naše webové stránky používají soubory cookie. Tyto soubory nám pomáhají zlepšovat vaši uživatelskou zkušenost. Kliknutím na \"Přijmout všechny cookies\" souhlasíte s jejich použitím. Pokud upřednostňujete spravovat své preference ohledně cookies, můžete kliknout na \"Odmítnout všechny cookies\".",
          acceptAllBtn: "Přijmout všechny cookies",
          acceptNecessaryBtn: "Odmítnout všechny cookies",
          showPreferencesBtn: "Nastavení preferencí",
          footer: "<a href=\"/cookies\">Cookies</a>\n<a href=\"/vop\">Všeobecné podmínky</a>"
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "necessary"
            },
            {
              title: "Analytics Cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "analytics"
            },
            {
              title: "Advertisement Cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "marketing"
            },
            {
              title: "More information",
              description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
            }
          ]
        }
      }
    },
    autoDetect: "browser"
  }
});