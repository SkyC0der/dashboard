import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Select } from "antd";
import React, { useState } from "react";
import Bar2 from "./Bar";
import Bar from "./Bar";
import Card from "./Card";
import Card2 from "./Card2";
import Graphcard from "./Graphcard";
import Idle from "./Idle";
import People from "./People";
import PieCard from "./Pie";
import Pie from "./Pie";

const Navbar = () => {
  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }

  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const { Option } = Select;
  const menuData2 = [
    getItem("Overview", "1", [
      getItem("Project stats", "2"),
      getItem("Planning", "3"),
      getItem("Teamwork", "4"),
      getItem("Team Health", "5"),
      getItem("Investment", "6"),
    ]),
    getItem("Action Center", "7"),
    getItem("Apps", "8"),
    getItem("Tasks", "9"),
    getItem("Code Review", "10"),
    getItem("QA Review", "11"),
    getItem("Notes", "12"),
  ];
  // const menuData = [
  //   "Overview",
  //   "Action Center",
  //   "Apps",
  //   "Tasks",
  //   "Code Review",
  //   "QA Review",
  //   "Notes",
  // ];
  // const subMenuData = [
  //   "Project stats",
  //   "Planning",
  //   "Teamwork",
  //   "Team Health",
  //   "Investment",
  // ];
  // const items2 = menuData.map((icon, index) => {
  //   const key = String(index + 1);
  //   return {
  //     key: `sub${key}`,
  //     label: `${menuData[index]} `,
  //     children: new Array(5).fill(null).map((_, j) => {
  //       const subKey = index * 4 + j;
  //       return {
  //         key: subKey,
  //         label: `${subMenuData[subKey]}`,
  //       };
  //     }),
  //   };
  // });

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
            {
              key: "4",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "5",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "6",
              icon: <People />,
              label: "",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background hea"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? RightCircleOutlined : LeftCircleOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
          }}
        >
          <div className="content-main">
            <Sider className="site-layout-background" width={190}>
              <div className="siderHeading">
                <span className="header">Workflows</span>
                <Select defaultValue="Product Dev">
                  <Option value="Product Dev">Product Dev</Option>
                </Select>
              </div>
              <Menu
                mode="inline"
                defaultSelectedKeys={["3"]}
                defaultOpenKeys={["1"]}
                style={{
                  height: "100%",
                }}
                items={menuData2}
              />
            </Sider>
            <div className="content">
              <div className="headingContent">
                <div className="menuicon">
                  <EllipsisOutlined style={{fontSize: "28px"}} />
                </div>
                <h2>Project Stats</h2>
                <Select
                  defaultValue="All Time"
                  style={{
                    width: 120,
                  }}
                >
                  <Option value="All Time">All Time</Option>
                </Select>
              </div>
              <div className="content-left">
                <div className="content-cards">
                  <Card />
                  <Card2 />
                </div>
                <PieCard />
              </div>
              <div className="content-right">
                <Bar2 />
                <Idle />
              </div>
              <div className="content-bottom">
                <div className="headingContent">
                  <h2>Planning</h2>
                  <Select
                    defaultValue="All Time"
                    style={{
                      width: 120,
                    }}
                  >
                    <Option value="All Time">All Time</Option>
                  </Select>
                </div>
                <div className="card-container">
                  <Graphcard stat={27} title="New Features added" />
                  <Graphcard stat={96} title="Complexity Accuracy" />
                  <Graphcard stat={56} title="Task Accuracy" />
                  <Graphcard stat={87} title="Refactor Rate" />
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
