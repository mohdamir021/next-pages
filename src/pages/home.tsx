import React from "react";
import { NextPageWithLayout } from "./_app";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Flex, Heading } from "@chakra-ui/react";
import { useUserContext } from "@/context/UserContext";
import DashboardCard from "@/components/cards/DashboardCard";

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <Heading>Homepage</Heading>

      <Flex my={2} px={2} flexWrap={"wrap"}>
        <DashboardCard />
      </Flex>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default HomePage;
