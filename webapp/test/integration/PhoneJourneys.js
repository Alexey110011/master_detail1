/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"zjblessons/MasterTemplate/test/integration/NavigationJourneyPhone",
		"zjblessons/MasterTemplate/test/integration/NotFoundJourneyPhone",
		"zjblessons/MasterTemplate/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});