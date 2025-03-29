import {
  ADDON_CATEGORY,
  ADDON_TYPE,
  PLUGIN_TYPE,
  PROPERTY_TYPE,
} from "./template/enums.js";
import _version from "./version.js";
export const addonType = ADDON_TYPE.PLUGIN;
export const type = PLUGIN_TYPE.OBJECT;
export const id = "dedra_loading_screen";
export const name = "Dedra Loading Screen";
export const version = _version;
export const minConstructVersion = undefined;
export const author = "skymen";
export const website = "https://www.construct.net";
export const documentation = "https://www.construct.net";
export const description = "Adds a Dedra branded loading screen";
export const category = ADDON_CATEGORY.GENERAL;

export const hasDomside = true;
export const files = {
  extensionScript: {},
  fileDependencies: [],
  cordovaPluginReferences: [],
  cordovaResourceFiles: [],
};

// categories that are not filled will use the folder name
export const aceCategories = {};

export const info = {
  // icon: "icon.svg",
  // PLUGIN world only
  // defaultImageUrl: "default-image.png",
  Set: {
    // COMMON to all
    CanBeBundled: true,
    IsDeprecated: false,
    GooglePlayServicesEnabled: false,

    // BEHAVIOR only
    IsOnlyOneAllowed: false,

    // PLUGIN world only
    IsResizable: false,
    IsRotatable: false,
    Is3D: false,
    HasImage: false,
    IsTiled: false,
    SupportsZElevation: false,
    SupportsColor: false,
    SupportsEffects: false,
    MustPreDraw: false,

    // PLUGIN object only
    IsSingleGlobal: true,
  },
  // PLUGIN only
  AddCommonACEs: {
    Position: false,
    SceneGraph: false,
    Size: false,
    Angle: false,
    Appearance: false,
    ZOrder: false,
  },
};

export const properties = [
  /*
  {
    type: PROPERTY_TYPE.INTEGER,
    id: "property_id",
    options: {
      initialValue: 0,
      interpolatable: false,

      // minValue: 0, // omit to disable
      // maxValue: 100, // omit to disable

      // for type combo only
      // items: [
      //   {itemId1: "item name1" },
      //   {itemId2: "item name2" },
      // ],

      // dragSpeedMultiplier: 1, // omit to disable

      // for type object only
      // allowedPluginIds: ["Sprite", "<world>"],

      // for type link only
      // linkCallback: function(instOrObj) {},
      // linkText: "Link Text",
      // callbackType:
      //   "for-each-instance"
      //   "once-for-type"

      // for type info only
      // infoCallback: function(inst) {},
    },
    name: "Property Name",
    desc: "Property Description",
  }
  */

  {
    type: PROPERTY_TYPE.CHECK,
    id: "enabled",
    options: {
      initialValue: true,
    },
    name: "Enabled",
    desc: "Enable or disable the loading screen",
  },
  {
    type: PROPERTY_TYPE.COLOR,
    id: "primaryColor",
    options: {
      initialValue: [1, 1, 1],
    },
    name: "Primary Color",
    desc: "Primary color for the loading screen",
  },
  {
    type: PROPERTY_TYPE.COLOR,
    id: "secondaryColor",
    options: {
      initialValue: [
        0.07058823529411765, 0.07058823529411765, 0.07058823529411765,
      ],
    },
    name: "Secondary Color",
    desc: "Secondary color for the loading screen",
  },
  {
    type: PROPERTY_TYPE.TEXT,
    id: "gameName",
    options: {
      initialValue: "",
    },
    name: "Game Name",
    desc: "The name of the game to display",
  },
  {
    type: PROPERTY_TYPE.LONGTEXT,
    id: "languages",
    options: {
      initialValue: JSON.stringify(
        {
          ar: true,
          bn: true,
          de: true,
          en: true,
          es: true,
          fr: true,
          hi: true,
          id: true,
          it: true,
          ja: true,
          ko: true,
          nl: true,
          pt: true,
          ru: true,
          tr: true,
          ur: true,
          vi: true,
          zh: true,
        },
        null,
        2
      ),
    },
    name: "Languages",
    desc: "Enable/disable specific languages (JSON format)",
  },
];
