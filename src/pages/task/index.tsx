import React, { useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import TableComponent from "@/components/tables/TableComponent";
import { taskService } from "@/services/next-api/task";
import { BsPencilFill } from "react-icons/bs";
import { useRouter } from "next/router";

const TaskIndexPage: NextPageWithLayout = () => {
  const router = useRouter();

  const data = [
    [
      "1",
      "Amir",
      <Button boxSize={"20px"}>
        <BsPencilFill />
      </Button>,
    ],
    ["2", "Mad"],
  ];

  const getTaskData = async () => {
    const response = await taskService.index();
    console.log(response);
  };

  useEffect(() => {
    getTaskData();
  }, []);

  return (
    <div>
      <Box my={4}>Task Index</Box>

      <Stack
        w={"full"}
        my={1}
        minH={"600px"}
        bg={"white"}
        borderRadius={"8px"}
        p={2}
      >
        <HStack w={"full"}>
          <Button
            bg={"var(--main)"}
            color={"white"}
            px={"8px"}
            py={"2px"}
            onClick={() => router.push("/task/create")}
          >
            Create
          </Button>
        </HStack>
        <TableComponent
          headers={["Bil", "Name"]}
          arrayData={data}
          isArrayData
        />
      </Stack>
    </div>
  );
};

TaskIndexPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default TaskIndexPage;
