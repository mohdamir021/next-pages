import React from "react";
import { NextPageWithLayout } from "./_app";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Flex } from "@chakra-ui/react";

const HomePage: NextPageWithLayout = () => {
  return <div>Homepage</div>;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default HomePage;
