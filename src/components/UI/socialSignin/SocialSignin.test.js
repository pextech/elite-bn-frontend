import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialSignin from './socialSignin';
import Button from '../Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Test <SocialSignin />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SocialSignin />);
  });
  it('should have two <Button />', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('should contain div ', () => {
    expect(wrapper.contains('div'));
  });
});
