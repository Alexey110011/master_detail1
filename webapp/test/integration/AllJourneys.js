/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 zjblessons_base_Items in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/MasterTemplate/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/MasterTemplate/test/integration/pages/App",
	"zjblessons/MasterTemplate/test/integration/pages/Browser",
	"zjblessons/MasterTemplate/test/integration/pages/Master",
	"zjblessons/MasterTemplate/test/integration/pages/Detail",
	"zjblessons/MasterTemplate/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.MasterTemplate.view."
	});

	sap.ui.require([
		"zjblessons/MasterTemplate/test/integration/MasterJourney",
		"zjblessons/MasterTemplate/test/integration/NavigationJourney",
		"zjblessons/MasterTemplate/test/integration/NotFoundJourney",
		"zjblessons/MasterTemplate/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});