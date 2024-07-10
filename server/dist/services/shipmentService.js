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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllShipmentService = getAllShipmentService;
exports.createShipmentService = createShipmentService;
exports.deleteShipmentService = deleteShipmentService;
exports.getShipmentDetailService = getShipmentDetailService;
exports.updateShipmentService = updateShipmentService;
const shipment_1 = __importDefault(require("../models/shipment"));
const shipmentNotFound_1 = require("../utils/shipmentNotFound");
function getAllShipmentService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allShipments = yield shipment_1.default.find();
            if (allShipments)
                return allShipments;
            throw new shipmentNotFound_1.ShipmentNotFoundError("No Item in the list");
        }
        catch (error) {
            throw error;
        }
    });
}
function getShipmentDetailService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shipment = yield shipment_1.default.findById({ _id: id });
            if (shipment)
                return shipment;
            throw new shipmentNotFound_1.ShipmentNotFoundError("No Item in the list");
        }
        catch (error) {
            throw error;
        }
    });
}
function createShipmentService(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shipment = new shipment_1.default(body);
            yield shipment.save();
            return shipment;
        }
        catch (error) {
            throw error;
        }
    });
}
function updateShipmentService(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shipment = yield shipment_1.default.findByIdAndUpdate({ _id: id }, Object.assign({}, body));
            if (shipment)
                return shipment;
            throw new Error("No Item found");
        }
        catch (error) {
            throw error;
        }
    });
}
function deleteShipmentService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shipment = yield shipment_1.default.findByIdAndDelete({ _id: id });
            if (shipment)
                return "Shipment deleted successfully";
            throw new shipmentNotFound_1.ShipmentNotFoundError("The shipment does not exist in the list");
        }
        catch (error) {
            throw error;
        }
    });
}
