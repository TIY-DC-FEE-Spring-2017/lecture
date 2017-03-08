(function todoModule() {

    // if window.todoApp already exists, use THAT, otherwise, make a new object
    window.todoApp = window.todoApp || {};

    // TODO: go get all the existing todo items from an API

    function markComplete(eventObj) {
        console.log(eventObj);

        if (eventObj.target.classList.contains('completed')) {
            eventObj.target.classList.remove('completed');
        } else {
            eventObj.target.classList.add('completed');
        }

    }

    Array.from( document.querySelectorAll('li') )
        .forEach(function addClickEvent(item) {

            item.addEventListener( 'click', markComplete );

            console.log('done setting up click event');

        });


    document.querySelector('form')
        .addEventListener('submit', function addNewItem(evt) {
            // stop the default action from taking place
            evt.preventDefault();
            // prevent bubbling: evt.stopPropagation();

            let newItem = document.createElement('li');
            let inputTag = document.querySelector('[name="todo-text"]');
            newItem.innerText = inputTag.value;
            document.querySelector('ul').appendChild(newItem);
            newItem.addEventListener( 'click', markComplete );

            // TODO: save this data to a server... make an API call (fetch request)
            window.todoApp.saveNewItem(inputTag.value);

            inputTag.value = '';
        });

})(); // executing my IIFE (called todoModule)
