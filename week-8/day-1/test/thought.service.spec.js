(function() {
    'use strict';

    let expect = chai.expect;

    describe('thought service', function() {
        let ThoughtService;
        let $httpBackend;
        let mockUserService = {};

        beforeEach(module('thoughter'));  // ng-app

        beforeEach(module(function($provide) {
            $provide.value('UserService', mockUserService);
        }));

        beforeEach(inject(function(_$httpBackend_, _ThoughtService_) {
            ThoughtService = _ThoughtService_;
            $httpBackend = _$httpBackend_;

            mockUserService.getToken = function getToken() {
                return 'sfgdje478gfsuyefr7w6eygf7tw4fge';
            };

            $httpBackend
                .whenPOST('http://thoughter.herokuapp.com/api/Thoughts')
                .respond({
                    "content":"Some FAKE thought content",
                    "createTime":"2017-03-10T00:09:16.445Z",
                    "id":"58c1eeac7393340011446bfa",
                    "authorId":null
                });
        }));

        describe('addThought', function() {

            it('should fail if a string is not provided', function(doneCallback) {

                let returnValue = ThoughtService.addThought(1234567);
                expect(returnValue.then).to.be.a('function');
                expect(returnValue.catch).to.be.a('function');

                returnValue
                    .then(function() {
                        doneCallback('we should not resolve with a bad argument');
                    })
                    .catch(function(err) {
                        // TODO: do assertions on the err object
                        console.info('did this catch?');
                        doneCallback();
                    });
            });

            it('should add a thought given a string of text', function(done) {

                let returnValue = ThoughtService.addThought('testing thought add');
                // TODO: assert the returnValue is a promise

                returnValue
                    .then(function(data) {
                        expect(data).to.be.an('object');
                        expect(data.content).to.be.a('string');
                        expect(data.content).to.equal('Some FAKE thought content');
                        // TODO: add more assertions
                        done(); // this tells mocha we're "done" with async stuff
                    })
                    .catch(function(err) {
                        done(err);  // this tells mocha to FAIL this test
                    });

                // tell the FAKE server (backend) to release any held up responses
                $httpBackend.flush();
            });

        });

    });


})();
