import React, { ReactElement, useEffect, useMemo } from "react";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/layouts/DashboardLayout";
import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";

const TaskActionPage: NextPageWithLayout = () => {
  const router = useRouter();

  const action = useMemo(() => {
    return router.query?.action ?? "create";
  }, [router.isReady]);

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: async (values, formikHelpers) => {},
  });

  return (
    <div>
      <Heading>TaskActionPage</Heading>

      <Flex w={"full"} h={"full"} p={2} justifyContent={"center"}>
        <Box borderRadius={"8px"} bg={"white"} w={"90%"} p={4}>
          <Heading
            textAlign={"center"}
            color={"black"}
            textTransform={"capitalize"}
          >
            {action} Task
          </Heading>

          {/* Form Body */}
          <Stack gap={6}>
            <Field.Root>
              <Field.Label color={"black"}>{"Task Name"}</Field.Label>
              <Input px={2} fontWeight={500} color={"black"} />
            </Field.Root>

            <Field.Root>
              <Field.Label color={"black"}>{"Task Description"}</Field.Label>
              <Textarea
                py={1}
                minH={"100px"}
                px={2}
                fontWeight={500}
                color={"black"}
              />
            </Field.Root>
          </Stack>
        
          <HStack mt={2} justifyContent={"center"}>
            <Button color={"white"} bg={"green"} flex={1}>Submit</Button>
            <Button color={"white"} bg={"blue"} flex={1}>Reset</Button>
            <Button color={"white"} bg={"red"} flex={1}>Back</Button>
          </HStack>
        </Box>
      </Flex>
    </div>
  );
};

TaskActionPage.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default TaskActionPage;
