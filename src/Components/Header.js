import React from "react";
import { PageHeader } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { withRouter, useLocation } from 'react-router-dom';
import { connect } from "react-redux"
import {
	setSidebarVisible
} from "../Store/app/app.actions";

function Header(props) {

	const location = useLocation();

	const {
		visible,
		setSidebarVisible
	} = props

  return (
    <PageHeader
      className="page-header"
      onBack={() => setSidebarVisible(!visible)}
      title={location.state?.title}
      subTitle={location.state?.subtitle}
			backIcon={visible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    />
  )
};

const mapStateToProps = state => {
  return {
    visible: state.app.visible,
  }
}

const mapDispatchToProps = dispatch => {
	return {
		setSidebarVisible: (visible) => dispatch(setSidebarVisible(visible)),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));