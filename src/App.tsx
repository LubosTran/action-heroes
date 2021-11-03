import React, { FC } from "react";
import { Avatar, Input, List } from "antd";
import "./styles/App.css";
import { Hero } from "./components/Content/Content";

const App: FC = () => {
  const data = [] as Hero[];
  return (
    <>
      <Input placeholder="What hero are you looking for?" onChange={() => {}} />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size="default" src={`${item.image}`} />}
              title={item.name}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default App;
