import { Flex, Typography, Timeline } from "antd";
import React from "react";

const { Text } = Typography;

export const Updates: React.FC = () => {
  return (
    <Flex style={{ flexDirection: "column", flex: 1, gap: "3rem" }}>
      <Text style={{ textAlign: "center" }}>
        Some of the updates about Interlocked-Studios are recorded here
      </Text>
      <Timeline
        items={[
          {
            color: "green",
            children: (
              <Text>
                Date: 03/29/2023 Started documenting Interlocked-Studios
              </Text>
            ),
          },
          {
            color: "green",
            children: (
              <Text>
                Date: 17/05/2024 will retain the aspect of mercenary cards with
                perks however gold and above will allow the ability to customise
                perks as the perk pool size is be increased dramatically adding
                at least 25 perks for a mercenary to use on their card, the same
                rule will apply that only 3 perks may be used on a card
              </Text>
            ),
          },
          {
            color: "green",
            children: <Text>Date: 18/05/2024 Aura ability revised</Text>,
          },
          {
            color: "green",
            children: (
              <Text>
                Date:29/05/2024 Starting to work on bushwanker oops I meant
                bushwhacker's overhaul
              </Text>
            ),
          },
          {
            color: "green",
            children: (
              <Text>
                Date: 08/06 2024 considering using a refraction shader method
                from the delisted steam game ballistic overkill to provide a
                more fair invisibility preception from close and long distances
              </Text>
            ),
          },
          {
            color: "green",
            children: (
              <Text>
                Date: 10/06/2024 going to register interlocked studios as an
                official company{" "}
              </Text>
            ),
          },
          {
            color: "green",
            children: (
              <Text>Date: 12/06/2024 company application submitted</Text>
            ),
          },
          {
            color: "gray",
            children: (
              <Text>Date: 13/06/2024 next mercenary overhaul skyhammer </Text>
            ),
          },
        ]}
        pending
      />
    </Flex>
  );
};
