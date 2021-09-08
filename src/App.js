import React from 'react';
import { hot } from 'react-hot-loader';
import './Assets/styles/app.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import { Layout } from '@shopify/polaris';
function App() {
  return (
    <Layout>
      <Layout.Section>
        <Sidebar/>
      </Layout.Section>
      <Layout.Section secondary>
        <Home/>
      </Layout.Section>
    </Layout>
  );
}

export default hot(module)(App);