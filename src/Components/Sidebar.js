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

	const onClick = ({item, key, keyPath, domEvent}) => {
		const { title, subtitle = '' } = item.props.route;
		history.push(key, { title, subtitle });
	}
	const defaultSelectedKey = router[0].children ? router[0].children[0].path : router[0].path; 

  return (
		<Sider trigger={null} collapsible collapsed={visible}>
			<Menu
				defaultSelectedKeys={[defaultSelectedKey]}
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
											<Menu.Item key={`${route.path}${child.path}`} route={child}>{child.title}</Menu.Item>		
										))
									}
								</SubMenu>
							)
						} else {
							return (
								<Menu.Item key={route.path} icon={<route.icon />} route={route}>
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