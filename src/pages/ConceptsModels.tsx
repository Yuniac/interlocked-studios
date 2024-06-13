import { Image, Flex, Typography, Divider } from "antd";
import React from "react";
import { Images } from "../assets";
const { Title, Paragraph, Text } = Typography;

export const ConceptsModels: React.FC = () => {
  return (
    <Flex
      style={{
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Flex
        style={{
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Title style={{ textAlign: "center" }}>Concepts:</Title>

        <Flex style={{ flexDirection: "column", gap: "0.5rem" }}>
          <Image
            style={{ maxWidth: "70rem", height: "auto" }}
            src={Images.ConceptImages.CamScanner}
          />
          <Text style={{ textAlign: "center" }}>
            Date:28/03/2023 First demonstration layout concept drawn and started
            working on assests map scale is 1:2000 cm
          </Text>
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ maxWidth: "70rem", height: "auto" }}
            src={Images.ConceptImages.Concept1}
          />
          <Text style={{ textAlign: "center" }}>
            Date:01/04/2023 Rough sketch of Main Gate blast door Next:
            Construction of Blast door
          </Text>
        </Flex>

        <Flex style={{ flexDirection: "column", gap: "0.5rem" }}>
          <Image
            style={{ maxWidth: "70rem", height: "auto" }}
            src={Images.ConceptImages.RoadMarkingsPreview}
          />
          <Text style={{ textAlign: "center" }}>
            Date:01/04/2023 Road Markings and UV layout complete Max Texture
            size 2048 x 2048 PNG format
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex
        style={{
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Title style={{ textAlign: "center" }}>Models:</Title>

        <Flex style={{ flexDirection: "column", gap: "0.5rem" }}>
          <Flex style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ maxWidth: "70rem", height: "auto" }}
              src={Images.ModelImages.BlishLock_weapon_1}
            />
            <Image
              style={{ maxWidth: "70rem", height: "auto" }}
              src={Images.ModelImages.BlishLock_weapon_2}
            />
          </Flex>
          <Text style={{ textAlign: "center" }}>
            Date: 25/05/2024 Original Blishlok sight has be replaced with a
            holographics red dot as it default sight instead, also added an
            underhand rail attachments for frontal grips
          </Text>
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ maxWidth: "76rem", height: "auto" }}
            src={Images.ModelImages.Hochfir_weapon_1}
          />
          <Text style={{ textAlign: "center" }}>
            Date: 16/05/2024 hochfir smg added to the games weapons pool name is
            same as before
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
