"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shipmentController_1 = __importDefault(require("../controller/shipmentController"));
const router = (0, express_1.Router)();
router.route("/").get(shipmentController_1.default.getAllShipmentsController);
router.route("/").post(shipmentController_1.default.createShipmentsController);
router.route("/:id").get(shipmentController_1.default.getShipmentDetailController);
router.route("/:id").put(shipmentController_1.default.updateShipmentController);
router.route("/:id").delete(shipmentController_1.default.deleteShipmentController);
exports.default = router;
