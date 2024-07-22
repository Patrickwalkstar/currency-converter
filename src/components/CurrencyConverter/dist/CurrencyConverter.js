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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Result_1 = require("../Result/Result");
var moment_1 = require("moment");
require("./index.css");
var GAME_CURRENCY_EXCHANGE_RATE = 1.125;
var GAME_CURRENCY_REFUND_EXCHANGE_RATE = 1.00;
var CurrencyConverter = function () {
    var _a = react_1.useState("USD - United States Dollar ($)"), from = _a[0], setFrom = _a[1];
    var _b = react_1.useState("GAM - Game Currency ($)"), into = _b[0], setInto = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(1), amount = _d[0], setAmount = _d[1];
    var _e = react_1.useState(""), currencyResult = _e[0], setCurrencyResult = _e[1];
    var _f = react_1.useState(""), currencyRate = _f[0], setCurrencyRate = _f[1];
    var _g = react_1.useState(""), amountValue = _g[0], setAmountValue = _g[1];
    var _h = react_1.useState(""), update = _h[0], setUpdate = _h[1];
    var convertCurrency = function (from, into, amount) { return __awaiter(void 0, void 0, void 0, function () {
        var amountValue, fromValue, intoValue, currencyRate, currencyResult_1, update_1;
        return __generator(this, function (_a) {
            amountValue = typeof amount === "string" ? parseFloat(amount) : amount;
            if (amountValue === 0 || isNaN(amountValue) || amountValue < 0) {
                setCurrencyResult("");
                setCurrencyRate("");
                setLoading(false);
                return [2 /*return*/];
            }
            fromValue = from.split(" ")[0].trim().toUpperCase();
            intoValue = into.split(" ")[0].trim().toUpperCase();
            try {
                setLoading(true);
                currencyRate = 1;
                console.log(fromValue);
                if (fromValue === "USD" && intoValue === "GAM") {
                    currencyRate = GAME_CURRENCY_EXCHANGE_RATE;
                }
                else if (fromValue === "GAM" && intoValue === "USD") {
                    currencyRate = GAME_CURRENCY_REFUND_EXCHANGE_RATE;
                }
                currencyResult_1 = amountValue * currencyRate;
                update_1 = moment_1["default"](Date.now()).format("DD/MM/YYYY HH:mm:ss");
                setCurrencyRate(currencyRate.toFixed(3));
                setCurrencyResult(currencyResult_1.toFixed(3));
                setAmountValue(amountValue.toString());
                setUpdate(update_1);
            }
            catch (error) {
                console.error("Error while converting currency:", error);
            }
            finally {
                setLoading(false);
            }
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        if (from && into) {
            convertCurrency(from, into, amount);
        }
    }, [from, into, amount]);
    var handleInput = function (e) {
        var value = e.target.value;
        setAmount(parseFloat(value));
    };
    var handleFrom = function (selectedOption) {
        if (into === selectedOption.value) {
            setInto(from);
        }
        setFrom(selectedOption.value);
    };
    var handleInto = function (selectedOption) {
        if (from === selectedOption.value) {
            setInto(into);
        }
        setInto(selectedOption.value);
    };
    var handleSwitch = function () {
        setFrom(into);
        setInto(from);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "container-fluid" },
            react_1["default"].createElement("div", { className: "currency-app" },
                react_1["default"].createElement("input", { className: "form-control-lg currency-amount", placeholder: "Enter Amount", value: amount, type: "number", onChange: handleInput }),
                react_1["default"].createElement("div", { className: "currency-from" },
                    react_1["default"].createElement(Dropdown_1["default"], { handleChange: handleFrom, placeholder: "Select a currency (From)", value: from })),
                react_1["default"].createElement("div", { className: "currency-swap" },
                    react_1["default"].createElement("button", { className: "btn currency-swap-btn", onClick: handleSwitch },
                        react_1["default"].createElement("i", { className: "fas fa-sort" }))),
                react_1["default"].createElement("div", { className: "currency-into" },
                    react_1["default"].createElement(Dropdown_1["default"], { handleChange: handleInto, placeholder: "Select a currency (To)", value: into })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Result_1["default"], { loading: loading, result: parseFloat(currencyResult), rate: parseFloat(currencyRate), into: into, from: from, amount: parseFloat(amountValue), update: update })))),
        react_1["default"].createElement("div", { className: "space" })));
};
exports["default"] = CurrencyConverter;
