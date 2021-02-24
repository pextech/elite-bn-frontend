import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../components/Dashboard/NavBar';
import Content from '../../components/Dashboard/pages/Content';
import SideBar from '../../components/Dashboard/Sidebar';
import { DashBoard, mapStateToProps } from '../../components/Dashboard/pages/DashBoard';

describe('Test navbar ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  test('Test dropdown button', () => {
    wrapper.find('.down').simulate('click');
  });
});
describe('Test navbar ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DashBoard />);
  });

  test('Test dropdown button', () => {
    expect(wrapper.length).toBe(1);
  });

  test('should test mapStateToProps', () => {
    const state = {
      user: {},
    };
    const mapState = mapStateToProps(state);
    expect(mapState).toEqual({
      Logout: state.user,
    });
  });
});

describe('test content', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Content />);
  });

  test('test content component', () => {
    expect(wrapper.length).toBe(1);
  });
  test('Test content of Content', () => {
    expect(
      wrapper.contains(
        <div className="col-start-3  bg-gray-100  row-start-3  col-end-13  md:p-12" />
      )
    ).toEqual(true);
  });
});

describe('test sidebar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SideBar />);
  });

  test('test content component', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Close sidebar (decrease sidebar width)', () => {
    wrapper.find('.close').simulate('click');
  });
  test('Increase side bar on small screen sidebar ', () => {
    wrapper.find('.open').simulate('click');
  });
});
