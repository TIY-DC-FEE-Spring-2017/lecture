(function() {
    'use strict';

    window.zoo = window.zoo || {};

    window.zoo.Hooman = class Hooman extends window.zoo.Animal {

        constructor(name, dateOfBirth, hairColor) {
            super(name, dateOfBirth);
            this.hairColor = hairColor;
            this.legs = 2;
            this.arms = 2;
        }

        getAge() {
            let age = super.getAge();
            return age * 1.1;
        }

    };

})();
