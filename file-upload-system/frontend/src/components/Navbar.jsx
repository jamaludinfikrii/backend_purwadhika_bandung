import React from 'react'
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  HomeFilled
} from '@ant-design/icons';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  state = {
    current: 'post',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item>
          <HomeFilled key='home' />
          Upload File System
        </Menu.Item>
            <Menu.Item key="post" >
                <Link to='/post-product'>
                <AppstoreOutlined />
                Post Product
                </Link>
            </Menu.Item>
        <Menu.Item key="list">
            <Link to='/products'>
            Product List
            </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Navbar