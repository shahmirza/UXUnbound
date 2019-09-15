sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageBox",
		"sap/m/MessageToast"

], function(Controller) {
	"use strict";

	return Controller.extend("uxUnb.controller.S1", {
		onInit: function() {
			var oModel = new sap.ui.model.odata.v2.ODataModel(
				"/UXUnbound/services/projectLists.xsodata/", false);

			this.getOwnerComponent().setModel(oModel);
		}
	});
});