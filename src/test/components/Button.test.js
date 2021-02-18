import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../components/UI/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Test <Button />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });
  it('should contains button', () => {
    expect(wrapper.contains('button'));
  });
});
