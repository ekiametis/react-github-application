import jsdom from 'mocha-jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.document = jsdom({
    url: "http://localhost:3000/"
});