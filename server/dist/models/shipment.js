"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ShipmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    origin: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    timestamp: { type: Date, default: Date.now() },
});
const shipmentModel = (0, mongoose_1.model)("Shipment", ShipmentSchema);
exports.default = shipmentModel;
