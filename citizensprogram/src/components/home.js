import React, { Component } from 'react';
import { Layout, Menu, Icon, Button} from 'antd';
import 'antd/dist/antd.css';
import Buddtable from './buddtable.js'
import Peerbuddies from './peerbuddies'
const { Header, Content, Footer, Sider } = Layout;

class Home extends Component{
  constructor(props){
    super(props)
    this.state= {
      activeMenu: 1 
    }
  }


  render(){
   const hide = {display: 'none'}
   const show = {display: 'block'}   
    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">Buddies</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user"/>
              <span className="nav-text">Peer Buddies</span>
            </Menu.Item>          
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <div style={{ background: '#fff', padding: 10, fontSize: 30 }}><b>Best Buddie</b></div>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Buddtable />
              <Peerbuddies />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>

          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home;