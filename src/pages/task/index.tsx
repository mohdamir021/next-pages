import React, { useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import TableComponent from "@/components/tables/TableComponent";
import { taskService } from "@/services/next-api/task";
import { BsEye, BsPencilFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { Task } from "@/interfaces/task";
import { BiPencil, BiTrash } from "react-icons/bi";

const TaskIndexPage: NextPageWithLayout = () => {
  const router = useRouter();

  const [data, setData] = useState<any[]>([]);

  const getTaskData = async () => {
    const response = await taskService.index();
    if (response?.data && response?.data?.length > 0) {
      setData(
        response.data?.map((row: Task, index: number) => ({
          Bil: index + 1,
          "Task Name": row?.name ?? "-",
          Description: row?.description ?? "-",
          User: row?.user?.name ?? "-",
          Action: (
            <>
              <Button
                variant={"ghost"}
                color={"white"}
                _hover={{ color: "gold" }}
                onClick={() => router.push(`/task/view?id=${row?.id}`)}
              >
                <BsEye />
              </Button>
              <Button
                variant={"ghost"}
                color={"white"}
                _hover={{ color: "gold" }}
                onClick={() => router.push(`/task/update?id=${row?.id}`)}
              >
                <BiPencil />
              </Button>
              <Button
                variant={"ghost"}
                color={"white"}
                _hover={{ color: "gold" }}
              >
                <BiTrash />
              </Button>
            </>
          ),
        })) ?? []
      );
    }
    // console.log(response);
  };

  useEffect(() => {
    void getTaskData();
  }, [router.isReady]);

  /** // IMPORTANT NOTE: Be careful of this implementation  
    useEffect(() => {
      setData([]) // or any updates value
      // or similar
      void getTaskData() // function that update data
    }, [data]) // <--- because of observation dependancies includes 'data' which also is being updated in useEffect function
  // This will cause infinite loop
  */

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
            px={"12px"}
            py={"2px"}
            onClick={() => router.push("/task/create")}
          >
            Create Task
          </Button>
        </HStack>
        {(data?.length ?? 0) > 0 && <TableComponent data={data} />}
      </Stack>
    </div>
  );
};

TaskIndexPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default TaskIndexPage;
