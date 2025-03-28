/**
 * DedraLoader - Game loading animation
 * Creates a stylish loading animation with progress indication
 */
const DedraLoader = (function () {
  // SVG logo content - paste your SVG here
  let logoSvgContent = `<svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M186.098 214.988C178.692 214.644 174.649 212.97 172.606 211.553C172.01 211.166 172.393 210.222 173.116 210.351C174.521 210.608 176.351 210.694 177.926 210.179C178.139 210.093 181.884 208.376 168.988 205.714C157.922 203.481 140.216 193.778 135.236 190.644C135.208 190.644 135.194 190.644 135.194 190.644C131.59 188.268 127.944 185.721 124.255 183.002C124.212 183.002 124.17 183.002 124.127 183.002L75.5213 211.338C75.4646 211.338 75.4078 211.338 75.3511 211.338C44.4935 193.177 25.2128 159.645 25 123.581C25 123.523 25.0142 123.48 25.0426 123.452L50.1968 108.811C50.2819 108.768 50.2819 108.682 50.2394 108.597C47.941 104.131 42.1526 92.6251 37.5133 80.4747C32.4484 67.2509 31.3418 59.6087 33.0443 52.0952C33.2145 51.4082 34.236 51.4941 34.3211 52.224C35.0447 60.2097 39.1306 57.2043 38.5773 52.5245C36.8323 37.7551 49.6861 35.4796 49.6861 35.4796C56.5811 33.3759 85.4809 37.4546 108.55 62.657C108.55 62.6856 108.564 62.6999 108.592 62.6999C108.933 63.0863 108.422 63.6015 108.039 63.2581C92.759 50.2919 72.5845 43.5083 63.008 44.6675C62.9513 44.6675 62.8945 44.6675 62.8378 44.6675C59.6456 45.0969 57.0068 46.2561 55.0489 48.1882C47.0898 56.2169 52.4952 75.7949 67.1791 98.7647C67.2217 98.8076 67.3068 98.8505 67.3494 98.8076L69.5201 97.5625C78.5858 92.2816 81.6928 91.981 86.2044 92.2816C90.6735 92.5821 100.761 96.1457 107.23 98.4212C112.465 100.31 117.743 96.2315 118.509 91.8522C118.977 89.2332 120.254 80.2171 121.361 74.0775C122.467 68.1526 126.043 64.8466 131.533 61.4548L156.475 46.9001C156.517 46.9001 156.56 46.9001 156.602 46.9431L159.709 49.3045C159.752 49.3474 159.837 49.3474 159.88 49.3045C160.773 48.7463 168.988 43.6801 172.521 41.9198C172.606 41.8768 172.691 41.9627 172.691 42.0486C172.733 50.3349 171.073 56.6462 170.861 57.419C170.832 57.4763 170.846 57.5192 170.903 57.5478L174.138 60.3815C174.18 60.4673 174.18 60.5532 174.138 60.5961C173.585 61.1972 170.861 64.2026 169.669 65.7482C169.541 65.8771 169.711 66.0488 169.839 65.9629C174.18 63.5157 180.054 62.1418 184.012 62.9146C184.097 62.9575 184.14 63.0434 184.097 63.1293C182.863 65.1901 181.586 67.208 181.203 67.7662C181.161 67.852 181.203 67.9379 181.288 67.9808C182.608 68.4531 191.886 71.5873 211.891 70.9004C211.976 70.9004 212.061 70.9862 212.018 71.0721C208.528 79.8307 200.782 91.38 199.675 93.0115C199.633 93.0973 199.675 93.2261 199.803 93.2261C201.08 93.3549 207.336 94.0848 210.656 94.9864C210.741 95.0294 210.784 95.1582 210.741 95.2011C207.932 98.2924 202.229 104.861 200.271 107.18C200.229 107.266 200.271 107.394 200.399 107.437C203.336 107.695 204.612 107.266 204.953 107.094C205.038 107.094 205.123 107.094 205.166 107.18C205.421 107.824 206.57 110.443 206.57 111.817C206.57 111.874 206.585 111.917 206.613 111.945C209.933 113.663 221.212 119.33 222.701 120.103C222.744 120.103 222.786 120.232 222.744 120.318C221.765 121.52 214.402 130.407 200.526 138.522L198.739 139.552C197.632 140.196 196.909 141.484 197.675 143.416C198.441 145.348 202.825 150.414 208.06 153.592C208.656 153.978 208.315 154.923 207.634 154.794C205.676 154.536 203.591 154.15 202.016 153.849C201.931 153.806 201.846 153.935 201.888 154.021C226.277 204.941 196.568 215.417 186.098 214.988ZM197.59 194.937C199.207 193.306 200.441 191.374 201.378 189.184C201.718 188.497 202.016 187.638 202.272 186.608C203.123 183.431 203.378 179.867 203.08 175.917C202.697 169.263 200.824 163.08 198.952 158.4C198.739 157.928 198.015 158.186 198.186 158.701C199.165 161.835 200.186 165.656 200.91 169.95C202.399 178.794 200.569 184.676 197.76 188.068C197.703 188.125 197.661 188.182 197.632 188.24C187.034 199.402 161.369 193.005 133.363 174.372C123.021 167.459 112.38 158.915 102.038 148.955C85.4809 132.983 72.4994 115.981 64.2423 100.611C63.6465 99.5232 63.079 98.4355 62.5399 97.3478C62.2419 96.8326 61.4758 97.1761 61.6886 97.7342C62.1426 98.9078 62.6392 100.081 63.1783 101.255C70.6692 118.042 83.9486 137.062 101.612 154.837C110.805 164.153 120.382 172.268 129.788 178.966C158.56 199.445 185.885 206.744 197.59 194.937ZM164.859 54.0701C160.859 57.1185 158.603 59.6087 158.092 60.2097C158.007 60.2527 157.922 60.2527 157.879 60.1668L154.134 55.1864C154.091 55.1435 154.006 55.1006 153.921 55.1864C151.665 57.6337 144.515 66.9933 144.77 78.4997C144.77 78.5426 144.727 78.5856 144.685 78.6285C140.897 80.2171 137.832 82.7931 137.279 83.2654C137.236 83.3083 137.236 83.3942 137.279 83.4801C137.62 83.9523 139.279 86.0561 141.918 87.2154C142.003 87.2583 142.046 87.3442 142.003 87.3871C140.812 90.736 140.599 95.9739 141.237 98.2924C141.266 98.3496 141.308 98.3925 141.365 98.4212C151.75 101.255 167.073 101.727 174.478 99.9239C174.606 99.8809 174.691 100.01 174.649 100.096C172.648 106.192 172.308 108.511 172.265 109.112C172.223 109.198 172.308 109.241 172.393 109.241C173.074 109.241 175.883 109.284 177.5 109.627C177.585 109.627 177.628 109.713 177.585 109.799C176.564 114.264 174.606 121.176 174.308 122.25C174.266 122.336 174.308 122.378 174.393 122.421C175.883 122.765 189.375 125.899 202.314 122.722C202.399 122.679 202.527 122.808 202.442 122.894C201.08 125.985 199.973 128.132 199.633 128.862C199.548 128.99 199.675 129.119 199.76 129.076C200.91 128.776 205.251 127.402 211.21 121.949C211.252 121.906 211.252 121.777 211.167 121.734C206.741 118.987 202.569 117.656 202.016 117.484C201.988 117.455 201.959 117.427 201.931 117.398L200.952 114.65C200.91 114.564 200.867 114.522 200.782 114.564L197.122 115.981C197.093 116.01 197.065 116.01 197.036 115.981L189.375 114.006C189.29 113.963 189.247 113.878 189.29 113.792L196.526 101.598C196.611 101.512 196.526 101.384 196.441 101.384L186.566 100.139C186.481 100.139 186.438 100.01 186.481 99.9239C187.205 98.8505 190.695 93.2691 190.312 88.5463C190.269 88.4604 190.354 88.3746 190.482 88.3746C191.844 88.6751 192.61 88.5463 192.823 88.5034C192.851 88.4748 192.879 88.4461 192.908 88.4175C193.248 87.8164 196.611 81.4622 198.143 78.6714C198.186 78.5426 198.1 78.4138 198.015 78.4568C193.546 79.1008 181.544 77.8986 173.287 74.4639C173.202 74.4639 173.202 74.378 173.202 74.3351C173.244 73.6052 173.797 72.2313 174.053 71.6732C174.095 71.5444 173.968 71.4585 173.883 71.4585C168.52 72.9612 163.71 76.2671 162.263 77.7269C162.221 77.7698 162.221 77.8986 162.306 77.9416C167.583 80.7323 170.18 82.235 170.903 82.7073C170.988 82.7502 170.988 82.879 170.903 82.9649C169.116 83.8236 157.751 89.2762 148.388 92.4104C148.218 92.4962 148.132 92.2816 148.26 92.1957C155.24 86.3996 157.666 83.6948 158.901 81.9344C158.943 81.8486 158.901 81.7627 158.858 81.7198C156.985 80.5606 154.304 79.5731 153.623 79.3155C153.538 79.2725 153.495 79.1867 153.538 79.1008C154.517 77.5122 162.816 63.5586 165.115 54.2419C165.115 54.1131 164.987 53.9843 164.859 54.0701ZM98.2495 137.448C101.016 140.411 103.91 143.33 106.932 146.121C107.046 146.236 107.159 146.336 107.273 146.422C110.55 149.041 114.253 146.722 117.232 149.899C120.339 153.248 123.659 154.665 125.745 147.881C126.128 146.55 127.915 146.98 127.617 148.139C126.766 151.617 125.617 158.658 125.106 161.234C125.064 161.663 125.191 162.093 125.574 162.35C126.085 162.737 126.511 163.08 126.809 163.295C127.107 163.509 127.532 163.381 127.575 162.994C127.958 160.848 129.107 154.536 130.639 148.525C132.555 141.098 140.854 135.903 148.728 137.62C156.602 139.38 163.327 145.906 171.329 144.661C171.84 144.575 172.365 144.475 172.904 144.361C172.904 144.361 172.904 144.346 172.904 144.318C176.351 143.116 174.989 139.252 172.818 139.166C171.371 139.123 169.584 140.625 170.35 142.515C170.392 142.6 170.307 142.729 170.222 142.686C167.541 142.386 162.093 140.497 156.56 136.203C156.134 135.86 156.475 135.173 156.985 135.302C163.88 137.191 173.883 135.001 178.011 134.786C182.097 134.572 185.289 135.044 187.46 135.86C187.517 135.86 187.559 135.845 187.588 135.817C189.588 133.928 191.333 131.824 192.738 129.677C192.823 129.548 192.738 129.42 192.61 129.42C179.118 131.266 169.286 126.844 165.838 125.513C165.753 125.513 165.753 125.427 165.753 125.341C167.115 121.262 168.733 116.797 169.116 115.767C169.158 115.638 169.073 115.552 168.945 115.552L163.795 116.668C163.71 116.668 163.625 116.625 163.625 116.539C163.625 115.509 163.668 110.443 165.072 107.008C165.115 106.922 165.072 106.793 164.944 106.836C157.156 107.523 142.003 106.106 135.066 104.346C135.023 104.346 134.981 104.303 134.981 104.217C134.938 103.101 134.427 92.9685 135.108 89.4909C135.108 89.4622 135.094 89.4193 135.066 89.3621C132.767 87.0007 130.214 84.2529 129.703 83.7377C129.66 83.6518 129.66 83.6089 129.703 83.523C130.299 82.7931 134.342 77.8986 137.79 74.7644C137.79 74.7644 137.79 74.7501 137.79 74.7215C139.024 71.0721 140.046 67.4656 140.344 66.3923C140.386 66.2635 140.258 66.1776 140.131 66.2205C136.002 68.5819 128.809 71.8449 127.703 78.328C126.553 84.9398 125.83 91.0365 124.851 96.7467C123.872 102.5 116.083 109.627 106.464 106.493C96.845 103.359 91.5247 100.611 85.7788 101.298C80.5011 101.899 74.8403 105.291 73.9891 105.849C73.904 105.892 73.904 105.978 73.9465 106.021C74.8829 107.523 84.7573 122.937 98.2495 137.448ZM59.3902 103.444C60.2982 105.047 61.2062 106.622 62.1142 108.167C62.2845 108.425 62.6675 108.21 62.5399 107.91C61.6886 106.25 60.8799 104.618 60.1138 103.015C47.8133 77.2546 46.0257 60.3385 47.941 51.8805C49.5158 45.054 55.6873 42.0056 59.1774 40.8035C59.4328 40.7176 59.3477 40.2883 59.0498 40.3312C53.4315 40.8893 45.515 42.7784 43.855 53.6408C41.9823 65.7482 49.9414 86.3567 59.3902 103.444ZM42.791 164.411C42.8761 164.583 43.1315 164.497 43.0889 164.325C38.3645 148.225 42.4931 127.187 43.0464 124.396C43.0889 124.268 42.9612 124.182 42.8336 124.225L34.1934 129.291C32.9591 129.978 32.3207 131.481 32.7038 133.198C33.0868 134.915 34.3637 147.237 42.791 164.411ZM110.891 179.867C110.976 179.824 110.976 179.696 110.891 179.653L108.805 178.107C108.762 178.064 108.677 178.064 108.635 178.107L98.3347 184.075C96.0363 185.406 94.0784 186.222 91.8652 184.418C89.652 182.572 79.5647 174.801 71.3077 160.375C63.5613 146.765 61.0502 135.516 60.5394 132.039C60.5394 131.91 60.7097 131.824 60.7948 131.953C66.0725 139.209 76.9684 148.697 82.7143 151.016C82.842 151.059 82.9697 150.887 82.842 150.758C78.3304 146.894 72.4143 139.595 68.4134 134.185C64.4126 128.819 56.8791 118.085 56.0278 116.926C55.9853 116.84 55.9002 116.84 55.8576 116.883L52.4526 118.858C52.3959 118.886 52.3675 118.929 52.3675 118.987C52.3249 120.232 51.7716 137.32 67.3068 163.252C77.6069 180.425 86.3321 187.939 89.652 190.429C90.4607 191.03 91.6098 191.116 92.5036 190.601L110.891 179.867ZM186.396 146.894C186.353 146.808 186.268 146.808 186.183 146.851L185.63 147.151C171.201 155.352 165.157 151.402 148.984 145.649C143.749 143.803 138.471 147.881 137.705 152.218C137.279 154.665 136.172 162.436 135.108 168.404C135.023 168.962 135.236 169.563 135.704 169.864C155.113 183.56 172.648 190.987 183.714 189.828C189.716 189.012 190.865 184.29 184.481 183.087C181.842 182.615 180.012 181.671 178.777 180.812C178.096 180.297 178.522 179.18 179.373 179.352C182.054 179.781 185.757 179.395 189.673 175.445C194.185 170.808 193.674 163.853 191.418 157.585C190.056 154.193 188.354 150.629 186.396 146.894Z" fill="black"/>
  <path d="M207.677 159.001C210.061 162.994 216.062 168.962 218.105 170.207C218.133 170.236 218.176 170.25 218.233 170.25C220.361 170.679 223.808 168.661 224.83 168.017C225 167.932 225.042 167.717 224.957 167.545C224.659 166.944 223.936 165.484 222.787 163.08C222.744 162.994 222.616 162.908 222.489 162.865C215.338 161.964 210.316 159.602 208.188 158.486C207.847 158.271 207.507 158.658 207.677 159.001Z" fill="black"/>
  <path d="M179.798 58.7069L189.715 55.2293L194.95 39.4724L179.883 49.4332L179.798 58.7069Z" fill="black"/>
  </svg>
  `;

  if (!window.CSS || !CSS.supports("color", "color-mix(in srgb, #fff, #000)")) {
    document.documentElement.style.setProperty("--fallback-enabled", "true");
  }

  // Private variables
  let container,
    progressTextElement,
    loadingTextElement,
    logoFill,
    circleFill,
    rippleContainer;
  let progress = 0;
  let waveSine = 0;
  let waveAnimationId = null;
  let animationComplete = false;
  let endCallback = null;

  // Default configuration
  const defaultConfig = {
    containerId: "dedra-loader-container", // Where to mount the loader
    gameName: "Game Title", // Title to display
    gameIcon: null, // Game icon URL (optional)
    duration: 8000, // Duration for simulated loading
    autoStart: false, // Auto start the loading simulation
    theme: {
      primaryColor: "#ffffff", // Main color (logo, text, progress)
      secondaryColor: "#121212", // Background color
    },
    animation: {
      waveSpeed: 7, // Wave speed (lower is faster)
      waveHeight: 20, // Wave height in pixels
      rippleDelay: 600, // Delay between ripples
    },
    language: null, // Auto-detect if null
    languages: {
      // Enable/disable specific languages
      en: true,
      es: true,
      fr: true,
      de: true,
      zh: true,
      ja: true,
      ru: true,
      ar: true,
    },
  };

  let config = {};

  // Language support
  const languages = {
    en: {
      name: "English",
      enabled: true,
      texts: [
        "Initializing",
        "Loading game assets",
        "Loading characters",
        "Calibrating controls",
        "Almost there",
        "Loading Complete!",
      ],
    },
    es: {
      name: "Spanish",
      enabled: true,
      texts: [
        "Inicializando",
        "Cargando recursos del juego",
        "Cargando personajes",
        "Calibrando controles",
        "Casi listo",
        "¡Carga completa!",
      ],
    },
    fr: {
      name: "French",
      enabled: true,
      texts: [
        "Initialisation",
        "Chargement des ressources du jeu",
        "Chargement des personnages",
        "Étalonnage des contrôles",
        "Presque terminé",
        "Chargement terminé!",
      ],
    },
    de: {
      name: "German",
      enabled: true,
      texts: [
        "Initialisierung",
        "Laden von Spielressourcen",
        "Charaktere werden geladen",
        "Steuerelemente kalibrieren",
        "Fast fertig",
        "Laden abgeschlossen!",
      ],
    },
    zh: {
      name: "Chinese",
      enabled: true,
      texts: [
        "初始化",
        "加载游戏资源",
        "加载角色",
        "校准控制",
        "即将完成",
        "加载完成！",
      ],
    },
    ja: {
      name: "Japanese",
      enabled: true,
      texts: [
        "初期化中",
        "ゲームリソースを読み込んでいます",
        "キャラクターを読み込んでいます",
        "コントロールを調整しています",
        "もう少しです",
        "ロード完了！",
      ],
    },
    ru: {
      name: "Russian",
      enabled: true,
      texts: [
        "Инициализация",
        "Загрузка игровых ресурсов",
        "Загрузка персонажей",
        "Калибровка управления",
        "Почти готово",
        "Загрузка завершена!",
      ],
    },
    ar: {
      name: "Arabic",
      enabled: true,
      texts: [
        "جاري التهيئة",
        "تحميل موارد اللعبة",
        "تحميل الشخصيات",
        "معايرة عناصر التحكم",
        "اقتربنا من النهاية",
        "اكتمل التحميل!",
      ],
    },
  };

  let currentLanguage = "en";

  /**
   * Set which languages are enabled based on configuration
   */
  function configureLanguages() {
    // Apply language configuration from options
    if (config.languages) {
      for (const langCode in config.languages) {
        if (languages[langCode]) {
          languages[langCode].enabled = config.languages[langCode];
        }
      }
    }
  }

  /**
   * Enable or disable a specific language
   */
  function setLanguageEnabled(langCode, enabled) {
    if (languages[langCode]) {
      languages[langCode].enabled = enabled;

      if (langCode === currentLanguage && !enabled) {
        // Find another enabled language if the current one is disabled
        for (const code in languages) {
          if (languages[code].enabled) {
            currentLanguage = code;
            break;
          }
        }
      }

      updateLoadingTextByProgress();
    }
    return languages[langCode]?.enabled || false;
  }

  /**
   * Detect user's preferred language
   */
  function detectUserLanguage() {
    if (navigator.languages && navigator.languages.length) {
      for (const lang of navigator.languages) {
        const langCode = lang.split("-")[0];
        if (languages[langCode] && languages[langCode].enabled) {
          return langCode;
        }
      }
    }

    const userLang = navigator.language || navigator.userLanguage;
    if (userLang) {
      const langCode = userLang.split("-")[0];
      if (languages[langCode] && languages[langCode].enabled) {
        return langCode;
      }
    }

    // If no enabled language matches user preference, return first enabled language
    for (const langCode in languages) {
      if (languages[langCode].enabled) {
        return langCode;
      }
    }

    // Fallback to English if nothing else is enabled
    return "en";
  }

  /**
   * Get loading text based on progress and current language
   */
  function getLoadingTextByProgress(progress) {
    const lang = languages[currentLanguage] || languages.en;
    const texts = lang.texts;

    if (progress >= 100) {
      return texts[5];
    } else if (progress >= 80) {
      return texts[4];
    } else if (progress >= 60) {
      return texts[3];
    } else if (progress >= 30) {
      return texts[2];
    } else if (progress >= 5) {
      return texts[1];
    } else {
      return texts[0];
    }
  }

  /**
   * Update the loading text based on current progress
   */
  function updateLoadingTextByProgress() {
    const text = getLoadingTextByProgress(progress);

    if (loadingTextElement.textContent !== text) {
      loadingTextElement.style.opacity = 0;
      setTimeout(() => {
        loadingTextElement.textContent = text;
        loadingTextElement.style.opacity = 0.8;
      }, 300);
    }
  }

  /**
   * Parse SVG content and create outline/fill versions
   */
  function parseSvgContent() {
    if (!logoSvgContent) {
      console.error("Logo SVG content is empty. Using fallback logo.");
      return { outlineSvg: null, fillSvg: null };
    }

    // Create a temporary element to parse the SVG
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(logoSvgContent, "image/svg+xml");

    // Check for parsing errors
    const parserError = svgDoc.querySelector("parsererror");
    if (parserError) {
      console.error("Error parsing SVG content:", parserError);
      return { outlineSvg: null, fillSvg: null };
    }

    const svgElement = svgDoc.documentElement;

    // Create outline SVG
    const outlineSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    outlineSvg.id = "logo-outline";
    outlineSvg.setAttribute("width", "250");
    outlineSvg.setAttribute("height", "250");
    outlineSvg.setAttribute(
      "viewBox",
      svgElement.getAttribute("viewBox") || "0 0 250 250"
    );
    outlineSvg.setAttribute("fill", "none");

    // Create fill SVG
    const fillSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    fillSvg.id = "logo-fill";
    fillSvg.setAttribute("width", "250");
    fillSvg.setAttribute("height", "250");
    fillSvg.setAttribute(
      "viewBox",
      svgElement.getAttribute("viewBox") || "0 0 250 250"
    );
    fillSvg.setAttribute("fill", "none");

    // Clone and modify paths for both SVGs
    const paths = svgElement.querySelectorAll("path");
    paths.forEach((path) => {
      // For outline SVG - use stroke
      const outlinePath = path.cloneNode(true);
      outlinePath.setAttribute("fill", "none");
      outlinePath.setAttribute("stroke", "var(--logo-outline-color)");
      outlinePath.setAttribute("stroke-width", "1");
      outlineSvg.appendChild(outlinePath);

      // For fill SVG - use fill
      const fillPath = path.cloneNode(true);
      fillPath.setAttribute("fill", "var(--logo-fill-color)");
      fillPath.removeAttribute("stroke");
      fillPath.removeAttribute("stroke-width");
      fillSvg.appendChild(fillPath);
    });

    return { outlineSvg, fillSvg };
  }

  /**
   * Create a style element with all necessary CSS
   */
  function createStyles() {
    const style = document.createElement("style");
    style.textContent = `
      :root {
        /* Theme colors - using only 2 base colors */
        --primary-color: ${config.theme.primaryColor};
        --secondary-color: ${config.theme.secondaryColor}; 
        
        /* Derived colors - automatically calculated */
        --logo-fill-color: var(--primary-color);
        --logo-outline-color: var(--primary-color);
        --text-color: var(--primary-color);
        --progress-color: var(--primary-color);
        --ripple-color: var(--primary-color);
        --background-color: var(--secondary-color);
        
        /* Theme-respecting colors with fallbacks for older browsers */
        --game-icon-bg: color-mix(in srgb, var(--primary-color) 15%, transparent);
        --loading-bg-color: color-mix(in srgb, var(--primary-color) 20%, transparent);
        --shine-effect-color: color-mix(in srgb, var(--primary-color) 30%, transparent);
        
        /* Fallbacks for browsers that don't support color-mix */
        --fallback-game-icon-bg: rgba(255, 255, 255, 0.15);
        --fallback-loading-bg-color: rgba(255, 255, 255, 0.2);
        --fallback-shine-effect-color: rgba(255, 255, 255, 0.3);
      }

      .shine-behind {
        position: absolute;
        width: 250px;
        height: 250px;
        background: radial-gradient(circle, var(--progress-color) 0%, transparent 50%);
        border-radius: 50%;
        opacity: 0;
        animation: pulse-shine 2s ease-in-out infinite;
      }

      @keyframes pulse-shine {
        0% {
          transform: scale(0.95);
          opacity: 0.2;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.4;
        }
        100% {
          transform: scale(0.95);
          opacity: 0.2;
        }
      }

      .star-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        pointer-events: none;
      }

      .star {
        position: absolute;
        background-color: white;
        border-radius: 50%;
        opacity: 0;
        animation: twinkle var(--duration, 3s) ease-in-out infinite;
        animation-delay: var(--delay, 0s);
      }

      @keyframes twinkle {
        0% {
          opacity: 0;
          transform: translateY(0) scale(0.7);
        }
        50% {
          opacity: var(--max-opacity, 0.7);
          transform: translateY(-10px) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateY(-20px) scale(0.7);
        }
      }

      #${config.containerId} {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: var(--background-color);
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: var(--text-color);
      }

      #loading-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: default;
      }

      #game-icon-container {
        width: 120px;
        height: 120px;
        margin-bottom: 30px;
        border-radius: 20px;
        overflow: hidden;
        background-color: var(--game-icon-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
      }

      #game-icon-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      #logo-container {
        position: relative;
        width: 250px;
        height: 250px;
        border: 2px dashed var(--logo-outline-color);
        border-radius: 50%;
        padding: 10px;
        margin: 30px;
        transform: scale(0.8);
        transition: transform 0.5s ease, filter 0.5s ease, border 0.2s ease-out;
        transform-origin: center center;
        filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5));
        overflow: hidden;
      }

      #circle-fill {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--logo-fill-color);
        opacity: 0.15;
        border-radius: 50%;
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
      }

      #logo-outline {
        position: absolute;
        top: 10px;
        left: 10px;
      }

      #logo-outline path,
      #logo-outline polygon {
        stroke: var(--logo-outline-color);
      }

      #logo-fill {
        position: absolute;
        top: 10px;
        left: 10px;
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
      }

      #logo-fill path,
      #logo-fill polygon {
        fill: var(--logo-fill-color);
      }

      #progress-text {
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 2px;
        color: var(--progress-color);
      }

      #loading-text {
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 30px;
        padding: 0 5px;
        overflow: hidden;
        opacity: 0.8;
        position: relative;
      }

      /* Text shine effect */
      #loading-text::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent, var(--shine-effect-color), transparent);
        animation: shine 1.3s infinite;
      }

      @keyframes shine {
        0% {
          left: -100%;
        }
        60% {
          left: 100%;
        }
        100% {
          left: 100%;
        }
      }

      .ripple-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        overflow: hidden;
        z-index: 10;
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: var(--ripple-color);
        transform: translate(-50%, -50%);
        pointer-events: none;
        width: 0;
        height: 0;
      }

      .mask-ripple {
        position: absolute;
        border-radius: 50%;
        background-color: var(--background-color);
        transform: translate(-50%, -50%) scale(0);
        pointer-events: none;
        z-index: 20;
      }

      .cover-circle {
        position: absolute;
        border-radius: 50%;
        background-color: var(--background-color);
        transform: translate(-50%, -50%) scale(0);
        pointer-events: none;
        z-index: 15;
      }

      .final-mask-circle {
        position: absolute;
        border-radius: 50%;
        background-color: transparent;
        transform: translate(-50%, -50%) scale(0);
        pointer-events: none;
        z-index: 25;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
          border-width: 2px;
        }
        40% {
          transform: scale(1.2);
          border-width: 4px;
        }
        60% {
          transform: scale(0.5);
          border-width: 5px;
        }
        100% {
          transform: scale(0.6);
          border-width: 6px;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      .fade-out {
        animation: fadeOut 0.1s forwards ease-out;
      }

      .completed-animation {
        animation: pulse 1s forwards ease;
      }

      @keyframes rippleEffect {
        0% {
          width: 0;
          height: 0;
          opacity: 0.8;
        }
        100% {
          width: 500px;
          height: 500px;
          opacity: 0;
        }
      }

      @keyframes maskExpand {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(5);
          opacity: 1;
        }
      }

      @keyframes coverExpand {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(10);
          opacity: 1;
        }
      }

      @keyframes finalMaskExpand {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(15);
          opacity: 1;
        }
      }

      #game-title-container {
        margin-bottom: 20px;
        text-align: center;
      }

      #game-title {
        font-size: 36px;
        font-weight: bold;
        color: var(--text-color);
        margin: 0;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInTitle 1s forwards ease-out 0.5s;
      }

      @keyframes fadeInTitle {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .particle {
        position: absolute;
        background-color: var(--progress-color);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
      }

      /* Separate animations for position and scale */
      .particle {
        animation:
          particlePosition var(--position-duration) forwards ease-in,
          particleScale var(--scale-duration) forwards ease-out;
      }

      @keyframes particlePosition {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(var(--tx), var(--ty));
        }
      }

      @keyframes particleScale {
        0% {
          transform: scale(0.5);
          opacity: 0.2;
        }
        100% {
          transform: scale(var(--scale));
          opacity: var(--final-opacity);
        }
      }

      #loading-bar-container {
        width: 250px;
        margin: 0 auto 40px;
        position: relative;
        overflow: visible;
      }

      #loading-bar-background {
        height: 8px;
        background-color: var(--loading-bg-color);
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1) inset;
      }

      #loading-bar-progress {
        height: 100%;
        width: 0%;
        background-color: var(--progress-color);
        border-radius: 4px;
        box-shadow: 0 0 10px var(--progress-color);
        position: relative;
      }

      #lens-flare {
        position: absolute;
        top: 4px;
        left: 0;
        width: 60px;
        height: 60px;
        background: radial-gradient(
          circle, 
          color-mix(in srgb, var(--primary-color) 80%, transparent) 0%, 
          color-mix(in srgb, var(--primary-color) 20%, transparent) 10%, 
          transparent 70%
        );
        border-radius: 50%;
        pointer-events: none;
        filter: blur(1px);
        transform: translateY(-50%);
        animation: flicker 1.7s infinite alternate;
        z-index: 10;
      }

      @keyframes flicker {
        0%, 100% {
          opacity: 1;
          transform: translateY(-50%) translateX(-50%) scale(1);
        }
        25% {
          opacity: 0.7;
          transform: translateY(-50%) translateX(-50%) scale(0.9);
        }
        50% {
          opacity: 0.9;
          transform: translateY(-50%) translateX(-50%) scale(1.1);
        }
        75% {
          opacity: 0.8;
          transform: translateY(-50%) translateX(-50%) scale(0.95);
        }
      }
      
      #particles-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * Create the HTML structure
   */
  function createHtmlStructure() {
    const mountElement = document.getElementById(config.containerId);
    if (!mountElement) {
      console.error(
        `Element with ID "${config.containerId}" not found. Creating one.`
      );
      const newElement = document.createElement("div");
      newElement.id = config.containerId;
      newElement.style.width = "100%";
      newElement.style.height = "100vh";
      document.body.appendChild(newElement);
      container = newElement;
    } else {
      container = mountElement;
    }

    // Create main loading container
    const loadingContainer = document.createElement("div");
    loadingContainer.id = "loading-container";

    // Game title
    const gameTitleContainer = document.createElement("div");
    gameTitleContainer.id = "game-title-container";

    const gameTitle = document.createElement("h1");
    gameTitle.id = "game-title";
    gameTitle.textContent = config.gameName;

    gameTitleContainer.appendChild(gameTitle);
    loadingContainer.appendChild(gameTitleContainer);

    // Game icon
    const gameIconContainer = document.createElement("div");
    gameIconContainer.id = "game-icon-container";

    const gameIconImg = document.createElement("img");
    gameIconImg.id = "game-icon-img";
    gameIconImg.alt = "Game Icon";
    gameIconImg.src = config.gameIcon || "/api/placeholder/120/120";

    gameIconContainer.appendChild(gameIconImg);
    loadingContainer.appendChild(gameIconContainer);

    // Logo container with SVG
    const logoContainer = document.createElement("div");
    logoContainer.id = "logo-container";

    const circleFillElement = document.createElement("div");
    circleFillElement.id = "circle-fill";
    logoContainer.appendChild(circleFillElement);

    // Create logo SVGs from the provided SVG content
    const { outlineSvg, fillSvg } = parseSvgContent();

    if (outlineSvg && fillSvg) {
      logoContainer.appendChild(outlineSvg);
      logoContainer.appendChild(fillSvg);
    } else {
      // Fallback to simple SVG if parsing fails
      console.warn("Using fallback logo");

      // Create outline SVG
      const logoOutlineSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      logoOutlineSvg.id = "logo-outline";
      logoOutlineSvg.setAttribute("width", "250");
      logoOutlineSvg.setAttribute("height", "250");
      logoOutlineSvg.setAttribute("viewBox", "0 0 250 250");
      logoOutlineSvg.setAttribute("fill", "none");

      // Create a simple circle as fallback
      const circlePath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circlePath.setAttribute("cx", "125");
      circlePath.setAttribute("cy", "125");
      circlePath.setAttribute("r", "100");
      circlePath.setAttribute("stroke", "var(--logo-outline-color)");
      circlePath.setAttribute("stroke-width", "2");
      circlePath.setAttribute("fill", "none");

      logoOutlineSvg.appendChild(circlePath);

      // Create fill SVG
      const logoFillSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      logoFillSvg.id = "logo-fill";
      logoFillSvg.setAttribute("width", "250");
      logoFillSvg.setAttribute("height", "250");
      logoFillSvg.setAttribute("viewBox", "0 0 250 250");
      logoFillSvg.setAttribute("fill", "none");

      const fillCirclePath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      fillCirclePath.setAttribute("cx", "125");
      fillCirclePath.setAttribute("cy", "125");
      fillCirclePath.setAttribute("r", "100");
      fillCirclePath.setAttribute("fill", "var(--logo-fill-color)");

      logoFillSvg.appendChild(fillCirclePath);

      logoContainer.appendChild(logoOutlineSvg);
      logoContainer.appendChild(logoFillSvg);
    }

    // Particles container
    const particlesContainer = document.createElement("div");
    particlesContainer.id = "particles-container";

    // Progress text
    const progressTextDiv = document.createElement("div");
    progressTextDiv.id = "progress-text";
    progressTextDiv.textContent = "0%";

    // Loading text
    const loadingTextDiv = document.createElement("div");
    loadingTextDiv.id = "loading-text";
    loadingTextDiv.textContent = "Initializing...";

    // Loading bar
    const loadingBarContainer = document.createElement("div");
    loadingBarContainer.id = "loading-bar-container";

    const loadingBarBackground = document.createElement("div");
    loadingBarBackground.id = "loading-bar-background";

    const loadingBarProgress = document.createElement("div");
    loadingBarProgress.id = "loading-bar-progress";

    const lensFlare = document.createElement("div");
    lensFlare.id = "lens-flare";

    loadingBarBackground.appendChild(loadingBarProgress);
    loadingBarContainer.appendChild(loadingBarBackground);
    loadingBarContainer.appendChild(lensFlare);

    // Ripple container
    const rippleContainerDiv = document.createElement("div");
    rippleContainerDiv.id = "ripple-container";
    rippleContainerDiv.className = "ripple-container";

    // Add all elements to the main container
    loadingContainer.appendChild(logoContainer);
    loadingContainer.appendChild(particlesContainer);
    loadingContainer.appendChild(progressTextDiv);
    loadingContainer.appendChild(loadingTextDiv);
    loadingContainer.appendChild(loadingBarContainer);
    loadingContainer.appendChild(rippleContainerDiv);

    // Add loading container to the mount element
    container.appendChild(loadingContainer);

    // Store references to key elements
    logoFill = document.getElementById("logo-fill");
    circleFill = document.getElementById("circle-fill");
    progressTextElement = document.getElementById("progress-text");
    loadingTextElement = document.getElementById("loading-text");
    rippleContainer = document.getElementById("ripple-container");

    // Create shine effect and star particles
    createShineEffect();
    createStarParticles();
  }

  /**
   * Create the shine effect behind the game icon
   */
  function createShineEffect() {
    const gameIconContainer = document.getElementById("game-icon-container");
    const shineElement = document.createElement("div");
    shineElement.classList.add("shine-behind");
    gameIconContainer.insertBefore(shineElement, gameIconContainer.firstChild);
  }

  /**
   * Create star particles in the background
   */
  function createStarParticles() {
    const starContainer = document.createElement("div");
    starContainer.classList.add("star-container");
    document.getElementById("loading-container").appendChild(starContainer);

    const numberOfStars = 50;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
      star.style.setProperty("--delay", `${Math.random() * 2}s`);
      star.style.setProperty("--max-opacity", `${Math.random() * 0.5 + 0.3}`);

      starContainer.appendChild(star);
    }
  }

  /**
   * Start the wave animation for the logo fill
   */
  function startWaveAnimation() {
    cancelAnimationFrame(waveAnimationId);
    animateWave();
  }

  /**
   * Animate the wave for the logo fill
   */
  function animateWave() {
    waveSine += 0.1;

    if (progress < 97) {
      updateWaveFill();
      waveAnimationId = requestAnimationFrame(animateWave);
    } else {
      logoFill.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      circleFill.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    }
  }

  /**
   * Update the wave fill based on current progress
   */
  function updateWaveFill() {
    const fillPercentage = (97 - progress) / 0.97;

    // Create wave points
    let wavePoints = "";
    const segments = 20;
    const segmentWidth = 100 / segments;

    for (let i = 0; i <= segments; i++) {
      const x = i * segmentWidth;

      // Wave amplitude decreases as progress increases
      const amplitude = config.animation.waveHeight * (1 - progress / 100);
      const y =
        fillPercentage +
        Math.sin(waveSine + i / config.animation.waveSpeed) * amplitude;

      wavePoints += `${x}% ${y}%, `;
    }

    // Complete the polygon
    wavePoints += `100% 100%, 0% 100%`;

    // Update clip path for both logo and circle
    logoFill.style.clipPath = `polygon(${wavePoints})`;
    circleFill.style.clipPath = `polygon(${wavePoints})`;
  }

  /**
   * Create particles around the logo
   */
  function createParticles(count) {
    const logoContainer = document.getElementById("logo-container");
    const particlesContainer = document.getElementById("particles-container");
    const rect = logoContainer.getBoundingClientRect();
    const spawnRadius = 30;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 5 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.max(window.innerWidth, window.innerHeight) * 0.8;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      const particleContainer = document.createElement("div");
      particleContainer.style.position = "absolute";
      particleContainer.style.left = `${
        centerX + Math.cos(angle) * spawnRadius
      }px`;
      particleContainer.style.top = `${
        centerY + Math.sin(angle) * spawnRadius
      }px`;
      particleContainer.style.pointerEvents = "none";

      const positionEl = document.createElement("div");
      positionEl.style.position = "absolute";
      positionEl.style.transform = "translate(0, 0)";
      positionEl.style.transformOrigin = "center";
      positionEl.style.width = "0";
      positionEl.style.height = "0";

      particle.style.position = "absolute";
      particle.style.left = "0";
      particle.style.top = "0";
      particle.style.transform = "translate(-50%, -50%) scale(0.5)";
      particle.style.opacity = "0.2";

      const positionDuration = Math.random() * 2000 + 1000;
      const scaleDuration = Math.random() * 1500 + 1000;

      positionEl.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${tx}px, ${ty}px)` },
        ],
        {
          duration: positionDuration,
          easing: "ease-in",
          fill: "forwards",
        }
      );

      particle.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.5)", opacity: 0.2 },
          {
            transform: `translate(-50%, -50%) scale(${Math.random() * 2 + 1})`,
            opacity: Math.random() * 0.3 + 0.1,
          },
        ],
        {
          duration: scaleDuration,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      positionEl.appendChild(particle);
      particleContainer.appendChild(positionEl);
      particlesContainer.appendChild(particleContainer);

      setTimeout(() => {
        particleContainer.remove();
      }, Math.max(positionDuration, scaleDuration) + 100);
    }
  }

  /**
   * Update the lens flare position on the loading bar
   */
  function updateLensFlare(progressValue) {
    const lensFlare = document.getElementById("lens-flare");
    const loadingBarBackground = document.getElementById(
      "loading-bar-background"
    );

    if (lensFlare && loadingBarBackground) {
      const barRect = loadingBarBackground.getBoundingClientRect();
      const position = (barRect.width * progressValue) / 100;

      lensFlare.style.display = "block";
      lensFlare.style.opacity = "1";
      lensFlare.style.left = `${position}px`;
    }
  }

  /**
   * Update progress of the loading animation
   */
  function updateProgress(newProgress) {
    // Clamp progress between 0 and 100
    progress = Math.max(0, Math.min(100, newProgress));

    // Update progress text
    progressTextElement.textContent = `${Math.round(progress)}%`;

    // Update the loading bar progress
    const loadingBarProgress = document.getElementById("loading-bar-progress");
    loadingBarProgress.style.width = `${progress}%`;

    // Add a pulsing glow effect when progress is near completion
    if (progress > 90) {
      loadingBarProgress.style.boxShadow = `0 0 10px 2px var(--progress-color)`;
    }

    // Update lens flare on the loading bar
    updateLensFlare(progress);

    // Update logo size and drop shadow based on progress
    const logoContainer = document.getElementById("logo-container");
    const easeInCircle = (t) => 1 - Math.sqrt(1 - t * t);
    const easedProgress = easeInCircle(progress / 100);
    const scaleValue = 0.7 + easedProgress * 0.3;
    const shadowSize = Math.round((progress / 100) * 15);

    logoContainer.style.transform = `scale(${scaleValue})`;
    logoContainer.style.filter = `drop-shadow(0px ${shadowSize}px ${shadowSize}px rgba(0, 0, 0, 0.5))`;

    // Update loading text based on progress
    updateLoadingTextByProgress();

    // Create particles with count based on progress
    // More particles as we get closer to completion
    if (progress > 0) {
      const particleCount = Math.floor(progress / 20) + 1; // 1-6 particles based on progress
      createParticles(particleCount);
    }

    // If we've reached 100%, trigger complete animation
    if (progress >= 100 && !animationComplete) {
      completeLoading();
    }

    return progress;
  }

  /**
   * Handle completion of loading animation
   */
  function completeLoading() {
    if (animationComplete) return;
    animationComplete = true;

    loadingTextElement.textContent = getLoadingTextByProgress(100);
    createRippleEffect();

    const logoContainer = document.getElementById("logo-container");
    logoContainer.classList.add("completed-animation");
  }

  /**
   * Create ripple effect for completion animation
   */
  function createRippleEffect() {
    const logoContainer = document.getElementById("logo-container");
    const rect = logoContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setTimeout(() => {
      createRipple(centerX, centerY, "var(--logo-fill-color)", false);
      setTimeout(() => {
        createRipple(centerX, centerY, "var(--background-color)", false);
        setTimeout(() => {
          createRipple(centerX, centerY, "var(--logo-fill-color)", true);
        }, 130);
      }, 130);
    }, config.animation.rippleDelay);
  }

  /**
   * Create a single ripple animation
   */
  function createRipple(centerX, centerY, color, isFinal) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.backgroundColor = color;

    ripple.style.left = `${centerX}px`;
    ripple.style.top = `${centerY}px`;

    rippleContainer.appendChild(ripple);

    const start = Date.now();
    const duration = 300;
    const easeOut = (t) => t * (2 - t);

    const maxSize =
      Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      ) * 1.2;

    const rippleAnimation = () => {
      const progress = (Date.now() - start) / duration;
      const easedProgress = easeOut(Math.min(progress, 1));
      const size = maxSize * easedProgress;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;

      if (progress < 1) {
        requestAnimationFrame(rippleAnimation);
      } else {
        if (isFinal) {
          setTimeout(() => {
            inversedRipple(ripple, size);
          }, 130);
        } else {
          setTimeout(() => {
            ripple.remove();
          }, 130);
        }
      }
    };
    rippleAnimation();
  }

  /**
   * Hide everything else and tween the ripple size to 0
   */
  function hideEverythingBesidesRipple() {
    const loadingContainer = document.getElementById("loading-container");
    [...loadingContainer.children].forEach((child) => {
      if (child !== rippleContainer) {
        child.style.display = "none";
      }
    });

    const particlesContainer = document.getElementById("particles-container");
    if (particlesContainer) {
      particlesContainer.style.display = "none";
    }

    document.getElementById(config.containerId).style.backgroundColor =
      "transparent";
  }

  /**
   * Create inverted ripple effect for final animation
   */
  function inversedRipple(ripple, startSize) {
    hideEverythingBesidesRipple();

    const start = Date.now();
    const duration = 300;
    const easeIn = (t) => t * t;

    const rippleAnimation = () => {
      const progress = (Date.now() - start) / duration;
      const easedProgress = easeIn(Math.min(progress, 1));
      const size = startSize * (1 - easedProgress);

      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;

      if (progress < 1) {
        requestAnimationFrame(rippleAnimation);
      } else {
        ripple.remove();
        finishAnimation();
      }
    };
    rippleAnimation();
  }

  /**
   * Finish animation and trigger callback
   */
  function finishAnimation() {
    if (!animationComplete) return;

    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.classList.add("fade-out");

    setTimeout(() => {
      loadingContainer.style.display = "none";

      if (endCallback && typeof endCallback === "function") {
        endCallback();
      }
    }, 100);
  }

  /**
   * Set up handlers for skipping the animation
   */
  function setupSkipHandlers() {
    const loadingContainer = document.getElementById("loading-container");
    const skipHandler = () => {
      if (progress >= 100) {
        finishAnimation();
      }
    };

    loadingContainer.addEventListener("click", skipHandler);
    document.addEventListener("keydown", skipHandler);
  }

  /**
   * Simulates loading progress over time
   */
  function simulateLoading(duration) {
    let currentProgress = 0;
    const increment = 100 / (duration / 100); // Update every 100ms

    const loadingInterval = setInterval(() => {
      currentProgress += increment;
      updateProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(loadingInterval);
      }
    }, 100);
  }

  // Public API
  return {
    /**
     * Set the SVG logo content
     * @param {string} svgContent - The SVG content as a string
     * @returns {Object} - The DedraLoader instance for chaining
     */
    setLogoSvg: function (svgContent) {
      logoSvgContent = svgContent;
      return this;
    },

    /**
     * Enable or disable a specific language
     * @param {string} langCode - The language code (e.g., 'en', 'es')
     * @param {boolean} enabled - Whether the language should be enabled
     * @returns {boolean} - Whether the language is now enabled
     */
    setLanguageEnabled: function (langCode, enabled) {
      return setLanguageEnabled(langCode, enabled);
    },

    /**
     * Initialize the loading animation
     * @param {Object} options - Configuration options for the animation
     * @returns {Object} - The DedraLoader instance for chaining
     */
    init: function (options = {}) {
      // Merge options with defaults
      config = { ...defaultConfig, ...options };

      // Configure languages
      configureLanguages();

      // Set language (either from config or auto-detect)
      currentLanguage = config.language || detectUserLanguage();

      // Create HTML and CSS
      createStyles();
      createHtmlStructure();

      // Initialize animations
      progress = 0;
      waveSine = 0;
      animationComplete = false;

      // Start animations
      startWaveAnimation();
      updateProgress(0);
      setupSkipHandlers();

      // Auto-start simulation if enabled
      if (config.autoStart) {
        simulateLoading(config.duration);
      }

      return this;
    },

    /**
     * Set the current progress of the animation
     * @param {number} newProgress - Progress value between 0 and 100
     * @returns {Object} - The DedraLoader instance for chaining
     */
    setProgress: function (newProgress) {
      updateProgress(newProgress);
      return this;
    },

    /**
     * Set a callback to be called when the animation is complete
     * @param {Function} callback - The function to call on animation end
     * @returns {Object} - The DedraLoader instance for chaining
     */
    onAnimationEnded: function (callback) {
      endCallback = callback;
      return this;
    },

    /**
     * Get information about available languages
     * @returns {Object} - Object containing available languages and their status
     */
    getLanguages: function () {
      const result = {};
      for (const langCode in languages) {
        result[langCode] = {
          name: languages[langCode].name,
          enabled: languages[langCode].enabled,
        };
      }
      return result;
    },
  };
})();

// Export the DedraLoader module
export default DedraLoader;
