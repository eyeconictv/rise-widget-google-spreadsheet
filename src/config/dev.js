/* exported config */

var config = {
  apiKey: "AIzaSyDtPkXDK34LF0p2AS60F0BKlzKMvlTMcCg"
};

if (typeof angular !== "undefined") {
  angular.module("risevision.widget.googleSpreadsheet.config", [])
    .value("API_KEY", "AIzaSyDtPkXDK34LF0p2AS60F0BKlzKMvlTMcCg");

  angular.module("risevision.common.i18n.config", [])
    .constant("LOCALES_PREFIX", "components/common-header/dist/locales/translation_")
    .constant("LOCALES_SUFIX", ".json");
}
