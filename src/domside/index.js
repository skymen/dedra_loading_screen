import DedraLoader from "./dedra-loader";

export default function (parentClass) {
  return class extends parentClass {
    constructor(iRuntime) {
      super(iRuntime);
    }

    init() {
      // create a dom element, give it a  unique id
      this.loader = document.createElement("div");
      this.loader.id = "dedra-loader";
      DedraLoader.init({
        // Core options
        containerId: "dedra-loader", // Element ID where loader will be mounted
        gameName: "Awesome Game", // Game title displayed
        gameIcon: "/api/placeholder/120/120", // URL to game icon image
        duration: 80000, // Duration for simulated loading (ms)
        autoStart: true, // Auto-start the loading simulation

        // Theme options
        theme: {
          primaryColor: "#00ff99", // Main color for logo, text, progress
          secondaryColor: "#000033", // Background color
        },

        // Animation options
        animation: {
          waveSpeed: 7, // Wave speed (lower is faster)
          waveHeight: 20, // Wave height in pixels
          rippleDelay: 600, // Delay between ripples in ms
        },

        // Language options
        language: "en", // Language code (en, es, fr, de, zh, ja, ru, ar)
        // Set to null for auto-detection
        languages: {
          // Enable/disable specific languages
          en: true, // English
          es: true, // Spanish
          fr: true, // French
          de: true, // German
          zh: false, // Chinese (disabled)
          ja: false, // Japanese (disabled)
          ru: true, // Russian
          ar: false, // Arabic (disabled)
        },
      }).onAnimationEnded(() => {
        // remove the loader element
        this.loader.remove();
      });
    }
  };
}
