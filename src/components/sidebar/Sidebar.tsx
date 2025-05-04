import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  TextProps,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { FcEngineering } from "react-icons/fc";

type SidebarButton = {
  label: string;
} & Partial<{
  leftElement: ReactElement;
  onClick: React.MouseEventHandler;
  labelProps: TextProps;
}>;

interface SidebarProps {
  topElement?: ReactElement;
  topHeader?: string;
  menus?: SidebarButton[];
}

export default function Sidebar({
  topElement = <FcEngineering size={"40px"} />,
  topHeader = "Za Menu",
  menus = [],
}: SidebarProps) {
  return (
    <Stack py={4} w={"full"} maxW={"250px"} bg={"var(--main)"}>
      {/* Top Element */}
      <VStack>
        {topElement}
        <Heading>{topHeader}</Heading>
      </VStack>

      {/* Sidebar Buttons */}
      {menus.map(({ label, labelProps, leftElement, onClick }, index) => (
        <HStack
          key={`${index}_${label}`}
          px={"8px"}
          py={"8px"}
          bg={"blue"}
          onClick={onClick}
          cursor={"pointer"}
        >
          {leftElement}
          <Text {...labelProps}>{label}</Text>
        </HStack>
      ))}
    </Stack>
  );
}
