import React, { FC, useState } from "react";
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
  const [filter, setFilter] = useState("");
  const onFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase());
  };
  const filteredData = data.filter((hero) =>
    hero.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <Input placeholder="What hero are you looking for?" onChange={onFilter} />
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={filteredData}
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
