angular.module('App', [])
    .service('MessageService',['$rootScope', function($rootScope) {
        $rootScope.$on('Message', function(ev, data) {
            this.message = data;
        }.bind(this));
    }]);


describe("Test register broadcast message", function() {
    beforeEach(module("App"));

    it("Should set message to Hello", inject(function(MessageService, $rootScope) {
        $rootScope.$broadcast('Message', 'Hello');
        $rootScope.$apply();

        expect(MessageService.message).toEqual('Hello');
    }));

    it("Should set message to สวัสดี", inject(function(MessageService, $rootScope) {
        $rootScope.$broadcast('Message', 'สวัสดี');
        $rootScope.$apply();

        expect(MessageService.message).toEqual('สวัสดี');
    }));
});
