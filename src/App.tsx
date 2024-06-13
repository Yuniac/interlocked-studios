import { Divider, Flex, Image, Tabs, Typography } from "antd";
import React from "react";
import { Images } from "./assets";
import { ConceptsModels } from "./pages/ConceptsModels";
import { Updates } from "./pages/Updates";
const { Title, Paragraph, Text, Link } = Typography;

export const App: React.FC = () => {
  return (
    <Flex
      style={{
        flexDirection: "column",
        gap: "3rem",
        width: "80%",
        maxWidth: "100rem",
        margin: "0 auto",
      }}
    >
      <Flex
        style={{
          flexDirection: "column",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <Image preview={false} src={Images.Banner} style={{ width: "100%" }} />
        <Title style={{ width: "100%", textAlign: "center" }}>
          Interlocked Studio
        </Title>
        <Title underline style={{ width: "100%", textAlign: "center" }}>
          CODE-HXSTERIA
        </Title>
        <Paragraph underline>The Dirty Bomb Successor</Paragraph>
      </Flex>
      <Tabs
        centered
        defaultActiveKey="1"
        items={[
          {
            id: "1",
            key: "1",
            label: "Concepts and Models",
            children: <ConceptsModels />,
          },
          {
            id: "2",
            key: "2",
            label: "Updates",
            children: <Updates />,
          },
        ]}
      />
      <Divider />
      <Paragraph>Interlocked Studios Website is a work in progress</Paragraph>
      <Link></Link>
    </Flex>
  );
};
