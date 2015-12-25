jest.dontMock("../app/home.jsx");


describe("Home", function(){

    it("should render home page with expected data", function() {
        var TestUtils = require('react-addons-test-utils');
        var React = require('react');
        
        var Home = require('../app/home');
        var home = TestUtils.renderIntoDocument(
            <Home />
        );

        var main = TestUtils.findRenderedDOMComponentWithClass(home, 'main');
        var html = main.textContent;
        expect(html).toContain('great');
    });

})
