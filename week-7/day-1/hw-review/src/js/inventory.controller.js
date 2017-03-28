(function() {
    'use strict';

    angular.module('shop').controller('InventoryController', InventoryController);

    let tax = 0.0575;

    function InventoryController(){
        let vm = this;
        vm.items = [
            {name: 'Jordan', price: 80000.99, discount: 79999.00},
            {name: 'Ferris', price: 42, discount: 5},
            {name: 'Cameron', price: 23, discount: 0}
        ];

        vm.tax = tax;

        vm.itemPrice = function itemPrice(item) {
            let discountPrice = item.price - item.discount;
            return discountPrice * (tax + 1);
        };

    }

})();
