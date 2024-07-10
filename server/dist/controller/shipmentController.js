"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const shipmentService_1 = require("../services/shipmentService");
function getAllShipmentsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let allShipments = yield (0, shipmentService_1.getAllShipmentService)();
            res.status(200).json({
                message: "All shipments",
                status: 200,
                data: allShipments,
            });
        }
        catch (error) {
            res.status(500).json({ message: "Unsuccefull", error });
        }
    });
}
function getShipmentDetailController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = req.params.id;
        try {
            let shipment = yield (0, shipmentService_1.getShipmentDetailService)(id);
            res.status(200).json({
                message: "Shipment details",
                status: 200,
                data: shipment,
            });
        }
        catch (error) {
            res.status(500).json({ message: "Unsuccefull", error });
        }
    });
}
function createShipmentsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let shipment = req.body;
        try {
            let createdShipment = yield (0, shipmentService_1.createShipmentService)(shipment);
            res.status(201).json({
                message: "Shipment created",
                status: 201,
                data: createdShipment,
            });
        }
        catch (error) {
            res.status(500).json({ message: "Unsuccefull", error });
        }
    });
}
function updateShipmentController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let shipment = req.body;
        let id = req.params.id;
        try {
            let updatedShipment = yield (0, shipmentService_1.updateShipmentService)(id, shipment);
            res.status(201).json({
                message: "Shipment updated",
                status: 201,
                data: updatedShipment,
            });
        }
        catch (error) {
            res.status(500).json({ message: "Unsuccefull update", error });
        }
    });
}
function deleteShipmentController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = req.params.id;
        try {
            yield (0, shipmentService_1.deleteShipmentService)(id);
            res.status(200).json({ message: "Shipment deleted", status: 204 });
        }
        catch (error) {
            res.status(500).json({ message: "Unsuccefull deletion", error });
        }
    });
}
exports.default = {
    getAllShipmentsController,
    createShipmentsController,
    updateShipmentController,
    deleteShipmentController,
    getShipmentDetailController,
};
