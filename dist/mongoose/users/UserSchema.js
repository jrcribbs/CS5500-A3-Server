"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, default: `testusername${Date.now()}` },
    password: { type: String, required: true, default: `testpassword${Date.now()}` },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, default: `testemail${Date.now()}` },
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: { type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"] },
    maritalStatus: { type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"] },
    location: {
        latitude: Number,
        longitude: Number
    },
    salary: { type: Number, default: 50000 }
}, { collection: "users" });
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map