"use strict";
exports.__esModule = true;
exports.endpointPath = exports.heading = void 0;
exports.heading = "currency converter";
var API_DOMAIN = "https://v6.exchangerate-api.com/v6";
var API_KEY = "d32d75de5146611ae7f23de0782ac09b";
exports.endpointPath = function (from) {
    return API_DOMAIN + "/" + API_KEY + "/latest/" + from;
};
