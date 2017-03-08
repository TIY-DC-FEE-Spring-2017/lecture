// IIFE
(function dataModule() {

    // if window.todoApp already exists, use THAT, otherwise, make a new object
    window.todoApp = window.todoApp || {};

    // "jordan".toUpperCase();

    let x = 5; // ONLY available in THIS file (because of IIFE)

    window.todoApp.saveNewItem = function saveNewItem(todoText) {
        console.log('saving new item!', todoText);
        let saved = false;
        // this would do a fetch!
        saved = true;
    };

})();  // executing the dataModule function
