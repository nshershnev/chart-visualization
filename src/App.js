import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Switch, Route } from "react-router-dom";

import Difficulty from './components/Difficulty';
import HashRate from './components/HashRate';
import Home from './components/Home';
import Navigation from './components/Navigation';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header className="app__header">
        <Navigation />
      </Header>
      <Content className="app__content">
        <Switch>
          <Route path="/difficulty" component={Difficulty} />
          <Route path="/hash-rate" component={HashRate} />
          <Route path="/" component={Home} />
        </Switch>
      </Content>
      <Footer className="app__footer">Coding Challenge ©2021 Glassnode</Footer>
    </Layout>
  );
}

export default App;
