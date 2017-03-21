(function() {
    'use strict';

    window.zoo = window.zoo || {};

    let Animal = window.zoo.Animal;
    let Hooman = window.zoo.Hooman;

    let jordan = new Animal('Jordan', new Date('1/1/1950'));
    let patrick = new Animal('Patrick', new Date('1/1/1951'));

    console.log( jordan.getAge() );

    let russell = new Hooman('Russell', new Date('1/1/2000'), 'sandy brown');
    console.log( russell.getAge() );

})();
