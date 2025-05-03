"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { CustomChakraProvider } from "@/components/ui/provider";
import { Flex } from "@chakra-ui/react";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Flex w={"100%"} h={"100vh"} bg={"gray"}>
      <Sidebar menus={[{ label: "Dashboard" }]} />

      {children}
    </Flex>
  );
}
