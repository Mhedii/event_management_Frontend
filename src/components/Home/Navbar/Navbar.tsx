"use client";
import { Button, Col, Menu, Row, Space } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";

const Navbar = () => {
  let isUser = false;
  return (
    <>
      <Header style={{ backgroundColor: "white", height: "100vh" }}>
        <div>
          <Row gutter={16}>
            <Col lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 0 }}>
              <h1>EventEmpire</h1>
            </Col>
            <Col span={14}>
              <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  Home
                </Menu.Item>
                <Menu.Item key="2" icon={<AppstoreOutlined />}>
                  Venue
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                  Suppliers
                </Menu.Item>
                <Menu.Item key="4" icon={<SettingOutlined />}>
                  About
                </Menu.Item>
                <Menu.Item key="5" icon={<SettingOutlined />}>
                  Contact Us
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={2}>
              {isUser ? (
                <Button type="primary"> Log out</Button>
              ) : (
                <Space>
                  <Button type="primary">Login</Button>
                  <Button type="primary">SignUp</Button>
                </Space>
              )}
            </Col>
          </Row>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
