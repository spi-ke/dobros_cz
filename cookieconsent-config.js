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
              title: "Použití cookies",
              description: "Jsme povinni vás informovat, že naše webové stránky používají soubory cookie. Tyto soubory nám pomáhají zlepšovat vaši uživatelskou zkušenost."
            },
            {
              title: "Striktně nezbytné cookies <span class=\"pm__badge\">Vždy povolené</span>",
              description: "Tyto cookies jsou nezbytné pro správné fungování naší webové stránky a nelze je vypnout. Obvykle jsou nastaveny pouze v reakci na vaše akce, které se rovnají žádosti o služby, jako je nastavení preferencí pro ochranu soukromí, přihlašování nebo vyplňování formulářů."
            },
            {
              title: "Analytické cookies",
              description: "Tyto cookies nám umožňují sledovat návštěvnost a zdroje provozu, abychom mohli měřit a zlepšovat výkon naší stránky. Pomáhají nám porozumět tomu, jaké stránky jsou nejvíce a nejméně populární a vidět, jak se návštěvníci pohybují na našich stránkách."
            },
            {
              title: "Reklamní cookies",
              description: "Tyto cookies mohou být nastaveny našimi reklamními partnery prostřednictvím našich stránek. Mohou být použity těmito společnostmi k vytvoření profilu vašich zájmů a zobrazování relevantních reklam na jiných webových stránkách."
            },
            {
              title: "Více informací",
              description: "Pro jakékoli dotazy ohledně mé politiky týkající se cookies a vašich možností mě prosím <a class=\"cc__link\" href=\"https:\\www.dobros.cz\">kontaktujte</a>."
            }
          ]

        }
      }
    },
    autoDetect: "browser"
  }
});