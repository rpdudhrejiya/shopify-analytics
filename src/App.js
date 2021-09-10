import React from 'react';
import { Layout } from 'antd';
import router from './Router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Header from './Components/Header';

const {Content} = Layout;

function App() {

  return (
    <Router>
      <Layout>
        <Sidebar router={router} />
          <Layout>
            <Header/>
            <Content className="app-layout-content">
              <Switch>
                {
                  router.map(route => {
                    if(route.children) {
                      return route.children.map(child => <Route
                        path={`${route.path}${child.path}`}
                        component={child.component}
                        key={child.title} exact={child.exact}
                      />)
                    } else {
                      return <Route path={route.path} component={route.component} key={route.title} exact={route.exact}/>
                    }
                  })
                }
              </Switch>
            </Content>
            <Footer/>
          </Layout>
      </Layout>
    </Router>
  );
}

export default App;