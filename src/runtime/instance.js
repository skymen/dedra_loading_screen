import { id, addonType } from "../../config.caw.js";
import AddonTypeMap from "../../template/addonTypeMap.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      const properties = this._getInitProperties();
      if (properties) {
        if (
          properties[0] &&
          this.runtime.platformInfo.exportType !== "preview"
        ) {
          const loadingHandler = (e) => {
            this._postToDOM("set-progress", e.progress * 100);
          };
          const interValId = setInterval(() => {
            let progress = this.runtime.loadingProgress;
            if (progress >= 1) {
              clearInterval(interValId);
            }
            this._postToDOM("set-progress", progress * 100);
          }, 10);
          let promise = new Promise(async (resolve) => {
            await this._postToDOMAsync("init", {
              // Core options
              containerId: "dedra-loader", // Element ID where loader will be mounted
              gameName: properties[3] || this.runtime.projectName, // Game title displayed
              gameIcon: await this.runtime.assets.getProjectFileUrl(
                "icons/loading-logo.png"
              ),
              autoStart: false, // Auto-start the loading simulation

              // Theme options
              theme: {
                primaryColor: this.rgbToHex(properties[1]), // Main color for logo, text, progress
                secondaryColor: this.rgbToHex(properties[2]), // Background color
              },
              viewportHeight: this.runtime.viewportHeight,

              // Animation options
              animation: {
                waveSpeed: 7, // Wave speed (lower is faster)
                waveHeight: 20, // Wave height in pixels
                rippleDelay: 600, // Delay between ripples in ms
              },

              // Language options
              language: null, // Language code (en, es, fr, de, zh, ja, ru, ar)
              // Set to null for auto-detection
              languages: JSON.parse(properties[4]), // Supported languages
            }).then(() => {
              this._postToDOM("set-progress", 100);
              resolve();
              this.runtime.removeEventListener(
                "loadingprogress",
                loadingHandler
              );
            });
          });
          this.runtime.sdk.addLoadPromise(promise);
        }
      }
    }

    // rgb range 0-1
    rgbToHex([r, g, b]) {
      const toHex = (c) => {
        const hex = Math.round(c * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    _trigger(method) {
      this.dispatch(method);
      super._trigger(self.C3[AddonTypeMap[addonType]][id].Cnds[method]);
    }

    on(tag, callback, options) {
      if (!this.events[tag]) {
        this.events[tag] = [];
      }
      this.events[tag].push({ callback, options });
    }

    off(tag, callback) {
      if (this.events[tag]) {
        this.events[tag] = this.events[tag].filter(
          (event) => event.callback !== callback
        );
      }
    }

    dispatch(tag) {
      if (this.events[tag]) {
        this.events[tag].forEach((event) => {
          if (event.options && event.options.params) {
            const fn = self.C3[AddonTypeMap[addonType]][id].Cnds[tag];
            if (fn && !fn.call(this, ...event.options.params)) {
              return;
            }
          }
          event.callback();
          if (event.options && event.options.once) {
            this.off(tag, event.callback);
          }
        });
      }
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return {
        // data to be saved for savegames
      };
    }

    _loadFromJson(o) {
      // load state for savegames
    }
  };
}
