import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import HelloWorld from './../HelloWorld';

test('it renders a Hello World welcome message', () => {
    const wrapper = shallow(
        <HelloWorld/>
    );
    const snapshot = toJson(wrapper);
    expect(snapshot).toMatchSnapshot();
});
