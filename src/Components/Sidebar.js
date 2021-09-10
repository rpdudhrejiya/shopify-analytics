import React from "react";
import { Menu, Layout } from 'antd';
import { connect } from "react-redux"
import { useHistory, withRouter } from "react-router-dom";

const { Sider} = Layout;
const { SubMenu } = Menu;

function Sidebar(props) {

	const history = useHistory();

  const {
		visible,
    router,
  } = props;

	const onClick = ({key}) => {
		console.log(key);
		history.push(key);
	}

  return (
		<Sider trigger={null} collapsible collapsed={visible}>
			<Menu
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				theme="dark"
				inlineCollapsed={visible}
				onClick={onClick}
			>
				{
					router.map(route => {
						if(route.children) {
							return (
								<SubMenu key={route.path} icon={<route.icon />} title={route.title}>
									{
										route.children.map(child => (
											<Menu.Item key={`${route.path}${child.path}`}>{child.title}</Menu.Item>		
										))
									}
								</SubMenu>
							)
						} else {
							return (
								<Menu.Item key={route.path} icon={<route.icon />}>
									{route.title}
								</Menu.Item>
							)
						}
					})
				}
			</Menu>
		</Sider>
  )
};

const mapStateToProps = state => {
  return {
    visible: state.app.visible,
  }
}

export default withRouter(connect(mapStateToProps, {})(Sidebar))