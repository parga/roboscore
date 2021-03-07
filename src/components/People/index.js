import React from "react";
import { Flex } from "@adobe/react-spectrum";

/**
 * Component that serves as container for all the person Components
 * @param {Object} param0
 * @param {Array<ReactElement>} param0.children
 */
export const People = ({ children }) => {
  return (
    <Flex
      direction="row"
      backgroundColor="white"
      gap="size-100"
      margin="size-1200"
    >
      {children}
    </Flex>
  );
};
