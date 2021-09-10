import React from "react";
import { PageHeader } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import {
	setSidebarVisible
} from "../Store/app/app.actions";

function Header(props) {

	const {
		visible,
		setSidebarVisible
	} = props

  return (
    <PageHeader
      className="page-header"
      onBack={() => setSidebarVisible(!visible)}
      title="Home"
      subTitle="Shop Search insights"
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)