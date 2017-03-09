(function() {
    'use strict';

    $('p').on('click', function changeColor(evt) {
        console.log('clicked!', evt.target);

        let data = { theText: 'hello class' };

        // $( evt.target ) // the ACTUALLY thing that was clicked, which might be INSIDE what you selected above
        $( this )  // the thing that was SELECTED above, which might not be what you specifically clicked on
            .siblings('p')
                .toggleClass('foobar')
                .css('color', 'red') // BOOO!!! do this in CSS
                // .text('HELLOOOOOOOO')
                .find('a')   // this changes what elements are selected
                    .hide()
                    .closest('main')
                        // .prepend('<p>' + data.theText + '</p>')
                        .find('h1')
                            .css('color', 'green')
                            .after('<p>' + data.theText + '</p>');
    });

})();
