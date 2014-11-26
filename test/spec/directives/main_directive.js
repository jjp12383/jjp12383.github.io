'use strict';

describe('Directive: backdrop', function () {

    // load the directive's module
    beforeEach(module('rooftopRoastersApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<test></test>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
    }));
});

