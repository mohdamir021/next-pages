import { TextProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface CustomRouteType {
  caption: string,
  url?: string
}

export type SidebarButton = {
  label: string;
} & Partial<{
  leftElement: ReactElement;
  onClick: React.MouseEventHandler;
  labelProps: TextProps;
}>;