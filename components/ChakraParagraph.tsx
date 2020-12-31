import React from "react";
import { Text } from "@chakra-ui/react";

export const ChakraParagraph: React.FC = (props) => {
  return <Text fontSize={["1rem", "2rem", "3rem", "4rem"]}>{props.children}</Text>;
};
