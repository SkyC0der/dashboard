import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Select } from "antd";
import React, { useState } from "react";
import Bar2 from "./Bar";
import Bar from "./Bar";
import Card from "./Card";
import Card2 from "./Card2";
import Graphcard from "./Graphcard";
import Idle from "./Idle";
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
  const [collapsed, setCollapsed] = useState(false);
  const { Option } = Select;
  const menuData2 = [
    getItem(
      "Overview",
      "1",
      [
        getItem("Project stats","2"),
        getItem("Planning","3"),
        getItem("Teamwork","4"),
        getItem("Team Health","5"),
        getItem("Investment","6"),
      ]
    ),
    getItem("Action Center", "7"),
    getItem("Apps", "8"),
    getItem("Tasks", "9"),
    getItem("Code Review", "10"),
    getItem("QA Review", "11"),
    getItem("Notes", "12")
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
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
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
            padding: 24,
            minHeight: 280,
          }}
        >
          <div className="content-main">
            <Sider className="site-layout-background" width={200}>
              <div>
                <span>Workflow</span>
                <Select
                    defaultValue="Product Dev"
                    style={{
                      width: 120,
                    }}
                    
                  >
                    <Option value="lucy">Lucy</Option>
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
                <h2>Project Stats</h2>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: 120,
                  }}
                  
                >
                  <Option value="lucy">Lucy</Option>
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
                <div className="headline">
                  <h2>Planning</h2>
                  <Select
                    defaultValue="lucy"
                    style={{
                      width: 120,
                    }}
                    
                  >
                    <Option value="lucy">Lucy</Option>
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
