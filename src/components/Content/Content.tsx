import React, { FC } from "react";
import { Input, Avatar, List } from "antd";

export type Hero = {
  id: number;
  name: string;
  image: string;
};

interface Props {
  data: Hero[];
}

const Content: FC<Props> = ({ data }) => {
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

export default Content;
