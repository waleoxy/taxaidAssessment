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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const mongoose_1 = __importDefault(require("mongoose"));
const shipmentRoute_1 = __importDefault(require("./routes/shipmentRoute"));
const PORT = config_1.config.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/shipments", shipmentRoute_1.default);
const bootupServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(config_1.config.MONGO_URL, {
            w: "majority",
            retryWrites: true,
            authMechanism: "DEFAULT",
        });
        console.log("MongoDb connection successful");
        app.get("/", (req, res) => {
            res.status(200).json({ message: "Server is up and running" });
        });
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    }
    catch (error) {
        console.error("Error starting the server:", error);
    }
});
bootupServer();
