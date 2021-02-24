/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutActionCreator } from '../../../store/actions/LogoutAction';
import NavBar from '../NavBar';
import SideBar from '../Sidebar';
import Content from './Content';

export const DashBoard = ({ Logout, LogoutAction }) => {
  const token = localStorage.getItem('jwtToken');

  return (
    <>
      {token ? (
        <div className="bg-white grid grid-cols-12  grid-rows-mdScreen md:grid-rows-layout">
          <NavBar LogoutAction={LogoutAction} Logout={Logout} />
          <Content />
          <SideBar />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    Logout: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutAction: () => dispatch(logoutActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
