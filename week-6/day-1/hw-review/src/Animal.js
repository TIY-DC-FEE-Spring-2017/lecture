(function() {
    'use strict';

    window.zoo = window.zoo || {};

    window.zoo.Animal = class Animal {

        /**
         * Constructs a new Animal
         * @param  {String} name       Name of the Animal
         * @param  {Date} dateOfBirth  Date the animal was born
         * @return {void}
         */
        constructor(name, dateOfBirth) {
            this.name = name;

            // if (!(Object.getPrototypeOf(dateOfBirth) === Date.prototype)) {}
            if (!(dateOfBirth instanceof Date)) {
                dateOfBirth = new Date();
            }
            this.dob = dateOfBirth;
        }

        /**
         * Gets the current age of the Animal in whole years
         * @return {Number} The age of the Animal
         */
        getAge() {
            return (new Date()).getFullYear() - this.dob.getFullYear();
        }

    };

})();
