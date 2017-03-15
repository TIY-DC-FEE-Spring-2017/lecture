(function() {
    'use strict';

    let expect = window.chai.expect;

    // Mocha provides the `describe()` function
    describe('math module', function() {

        describe('sum function', function() {

            it('should give the sum when provided two numbers', function() {
                // run the funciton and get the result...
                let result = window.mathModule.sum(1, 2);
                // now do all of our assertions
                expect( result ).to.be.a( 'number' );
                expect( result ).to.equal( 3 );
            });

            it('should handle no arguments', function() {
                let result = window.mathModule.sum();
                expect( result ).to.be.NaN;
            });

            it('should handle only 1 argument', function() {
                let result = window.mathModule.sum(13);
                expect( result ).to.be.a('number');
                expect( result ).to.equal(13);
            });

            it('should convert strings to numbers for addition', function() {
                let result = window.mathModule.sum('3', '7');
                expect( result ).to.be.a('number').and.to.equal(10);
            });

        });


        describe('multiply function', function() {

        });

    });

})();
