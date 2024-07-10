"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentNotFoundError = void 0;
class ShipmentNotFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ShipmentNotFoundError = ShipmentNotFoundError;
