"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var meals = [
            { id: 11, name: 'Chicken Caprese', ingredients: [], size: "L" },
            { id: 12, name: 'Chicken Parmesan', ingredients: [], size: "M" },
            { id: 13, name: 'Steak and Potatoes', ingredients: [], size: "M" },
            { id: 14, name: 'Sweet Potato Soup', ingredients: [], size: "XS" },
            { id: 15, name: 'Stroganouf', ingredients: [], size: "L" },
            { id: 16, name: 'Spaghetti', ingredients: [], size: "XS" },
            { id: 17, name: 'Vanilla Greek Yogurt', ingredients: [], size: "S" },
            { id: 18, name: 'Mango Lassi', ingredients: [], size: "L" },
            { id: 19, name: 'Pizza', ingredients: [], size: "M" },
            { id: 20, name: 'Beef Sandwich', ingredients: [], size: "S" }
        ];
        var groceryList = [
            { id: 1, ingredients: [], ts: new Date() }
        ];
        return { meals: meals, groceryList: groceryList };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
