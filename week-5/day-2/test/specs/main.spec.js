(function() {
    'use strict';

    let expect = chai.expect;

    describe('main module', function() {

        describe('addStuff function', function() {

            beforeEach(function() {
                let mainTag = document.createElement('main');
                document.querySelector('body').appendChild( mainTag );
            });

            afterEach(function() {
                let mainTag = document.querySelector('main');
                mainTag.parentNode.removeChild(mainTag);
            });

            it('should add element for one piece of data', function() {

                window.lecture.addStuff([ { name: 'jordan' } ]);
                let articles = document.querySelectorAll('main article');
                expect(articles.length).to.equal(1);

            });

            it('should add multiple elements with more than one data point', function() {
                window.lecture.addStuff([
                    { name: 'jordan' },
                    { name: 'Julianne' }
                ]);
                let articles = document.querySelectorAll('main article');
                expect(articles.length).to.equal(2);
            });

        });

        describe('getData function', function() {
            let server;

            beforeEach(function() {
                server = sinon.fakeServer.create();
                server.autoRespond = true;
                server.respondWith(
                    'GET',
                    'https://api.github.com/users/jakerella/repos',
                    [
                        200,
                        { 'Content-Type': 'application/json' },
                        '[ { "name": "Jordan" }, { "name": "Julianne" } ]'
                    ]
                );
            });

            afterEach(function() {
                server.restore();
            });

            it('should get data given a username', function(tellMochaWeAreDone) {

                let result = window.lecture.getData('jakerella');
                // expect( result ).to.be.an('object');
                expect( result.then ).to.be.a('function');
                expect( result.catch ).to.be.a('function');

                result
                    .then(function( data ) {
                        expect(data).to.be.an('array');
                        expect(data.length).to.equal(2);
                        tellMochaWeAreDone();
                    })
                    .catch(function(err) {
                        tellMochaWeAreDone(err);
                    });
            });

            it('should fail when no username provided', function(done) {
                let result = window.lecture.getData();
                expect( result.then ).to.be.a('function');
                expect( result.catch ).to.be.a('function');

                result
                    .then(function() {
                        done('The promise should NOT resolve!!');
                    })
                    .catch(function(err) {
                        expect(err).to.be.a('string');
                        done();
                    });
            });

        });

    });
})();
