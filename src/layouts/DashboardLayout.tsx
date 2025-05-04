"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import TopBar from "@/components/topbar/TopBar";
import { CustomChakraProvider } from "@/components/ui/provider";
import { ROUTES_LIST } from "@/constants/route-list";
import { useUserContext } from "@/context/UserContext";
import { SidebarButton } from "@/interfaces";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // router
  const router = useRouter();

  // user context
  const [{user}] = useUserContext();

  const menus: SidebarButton[] = useMemo(() => {
    const push = router.push;
    return ROUTES_LIST.map(({caption: label, url})=>({
      label,
      onClick: ()=>push(url ?? "#")
    })) satisfies SidebarButton[]
  }, [router.isReady])

  return (
    <Flex w={"100%"} h={"100vh"} bg={"gray"}>
      {/* Left Side */}
      <Sidebar topHeader={user?.name} menus={menus} />

      {/* Right Side */}
      <Stack w={"full"} h={"full"}>
        <TopBar />
      <Box px={"8px"}>
        {children}
        </Box>
      </Stack>
    </Flex>
  );
}
