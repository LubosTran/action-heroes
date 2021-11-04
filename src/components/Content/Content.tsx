import React, { FC } from "react";
import { Input, Avatar, List } from "antd";

type HeroImages = {
  lg: string;
  md: string;
  sm: string;
  xs: string;
};

export type Hero = {
  id: number;
  name: string;
  images: HeroImages;
};

interface Props {
  data: Hero[];
}

const Content: FC<Props> = ({ data }) => {
  return (
    <>
      <Input placeholder="What hero are you looking for?" onChange={() => {}} />
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(hero) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size="large" src={`${hero.images.md}`} />}
              title={hero.name}
              style={{ alignItems: "center" }}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Content;
