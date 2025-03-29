import DedraLoader from "./dedra-loader";

export default function (parentClass) {
  return class extends parentClass {
    constructor(iRuntime) {
      super(iRuntime);
      this.AddRuntimeMessageHandler("init", (options) => {
        return this.init(options);
      });
      this.AddRuntimeMessageHandler("set-progress", (progress) => {
        DedraLoader.setProgress(progress);
      });
    }

    init(options) {
      return new Promise((resolve) => {
        this.loader = document.createElement("div");
        this.loader.id = options.containerId || "dedra-loader";
        this.loader.style.position = "absolute";
        this.loader.style.top = "0";
        this.loader.style.left = "0";
        this.loader.style.width = "100%";
        this.loader.style.height = "100%";
        this.loader.style.zIndex = "9999";
        document.body.appendChild(this.loader);
        DedraLoader.init(options)
          .onLoadingSafelyEnded(() => {
            resolve();
          })
          .onAnimationEnded(() => {
            this.loader.remove();
          });
      });
    }
  };
}
