import React from "react";
import { useSelector } from "react-redux";
import { Flex, View, Text } from "@adobe/react-spectrum";

export const ScoreTable = () => {
  const scores = useSelector((state) => state.scores);
  return (
    <Flex
      direction="row"
      marginStart="size-1200"
      marginBottom="size-1000"
      gap="size-1200"
    >
      {Object.keys(scores).map((key) => (
        <View width="size-4600" key={key}>
          <Text>
            {scores[key].name} = {scores[key].initialValue}
          </Text>
        </View>
      ))}
    </Flex>
  );
};
