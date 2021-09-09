import React from 'react';
import { hot } from 'react-hot-loader';
import './Assets/styles/app.css';
import { Layout, Menu, PageHeader } from 'antd';
const { SubMenu } = Menu;
import { HomeOutlined, DashboardOutlined, SettingOutlined, DollarOutlined, InfoCircleOutlined, QuestionCircleOutlined  } from '@ant-design/icons';
const { Header, Footer, Sider, Content} = Layout;
import router from './Router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            defaultSelectedKeys={['home']}
            style={{ height: '100%' }}
            theme="dark"
          >
            {
              router.map(route => {
                if(route.children) {
                  return (
                    <SubMenu key={route.title} icon={<route.icon/>} title={route.title}>
                      {
                        route.children.map(child => (
                          <Link to={child.path}>
                            <Menu.Item key={child.title}>{child.title}</Menu.Item>
                          </Link>
                        ))
                      }
                    </SubMenu>
                  )
                } else {
                  return (
                    <Link to={route.path}>
                      <Menu.Item key={route.title} icon={<route.icon/>} style={{ padding:24 }}>
                        {route.title}
                      </Menu.Item>
                    </Link>
                  )
                }
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
          <Content>
          <Switch>
            {
              router.map(route => {
                if(route.children) {
                  return route.children.map(child => <Route path={child.path} component={child.component}/>)
                } else {
                  return <Route path={route.path} component={route.component}/>
                }
              })
            }
          </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default hot(module)(App);