import DedraLoader from "./dedra-loader";

export default function (parentClass) {
  return class extends parentClass {
    constructor(iRuntime) {
      super(iRuntime);
      this.AddRuntimeMessageHandler("init", () => {
        this.init();
      });
      this.AddRuntimeMessageHandler("set-progress", (progress) => {
        DedraLoader.setProgress(progress);
      });
    }

    init(options) {
      // create a dom element, give it a  unique id
      this.loader = document.createElement("div");
      this.loader.id = options.containerId || "dedra-loader";
      DedraLoader.init(options).onAnimationEnded(() => {
        this.loader.remove();
        this.PostToRuntime("onLoaderEnd");
      });
    }
  };
}
