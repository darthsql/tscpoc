"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const NAMESPACE = 'Sample Controller';
const sampleHealthCheck = (req, res, next) => {
    config_1.default.info(NAMESPACE, `Sample health check route called.`);
    return res.status(200).json({
        message: 'pong'
    });
};
exports.default = { sampleHealthCheck };
