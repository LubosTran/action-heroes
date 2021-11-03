import React, { FC } from "react";
import { Input, Avatar, List } from "antd";

export interface Hero {
  id: number;
  name: string;
  image: string;
}

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
              title={<a href="https://ant.design">{item.name}</a>}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default App;
