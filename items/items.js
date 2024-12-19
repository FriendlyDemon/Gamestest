"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = exports.Armor = exports.Weapon = void 0;
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
var Equipment = /** @class */ (function (_super) {
    __extends(Equipment, _super);
    function Equipment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "equipment";
        return _this;
    }
    return Equipment;
}(Item));
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, tags, cost, weight, damage, desc) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.tags = tags;
        _this.cost = cost;
        _this.weight = weight;
        _this.description = desc;
        _this.damage = damage;
        return _this;
    }
    return Weapon;
}(Equipment));
exports.Weapon = Weapon;
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(name, tags, cost, weight, ac, dexLimit) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.tags = tags;
        _this.cost = cost;
        _this.weight = weight;
        _this.ac = ac;
        _this.dexLimit = dexLimit;
        return _this;
    }
    return Armor;
}(Equipment));
exports.Armor = Armor;
var Material = /** @class */ (function (_super) {
    __extends(Material, _super);
    function Material() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "material";
        return _this;
    }
    return Material;
}(Item));
exports.Material = Material;
