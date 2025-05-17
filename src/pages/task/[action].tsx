"use client";
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
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useUserContext } from "@/context/UserContext";
import { useAppToast } from "@/libs/toast";
import { taskService } from "@/services/next-api/task";
import { Yup } from "@/libs/common";

const TaskActionPage: NextPageWithLayout = () => {
  const [{ user }] = useUserContext();
  const { showToast } = useAppToast();

  const router = useRouter();

  const action = useMemo(() => {
    return router.query?.action ?? "create";
  }, [router.isReady]);

  console.log(user);

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Task Name Required"),
      description: Yup.string().required("Task Description Required"),
    }),
    onSubmit: async (values, formikHelpers) => {
      // console.log(user, values);
      const payload = {
        user_id: user?.id as string,
        ...values,
      };

      try {
        const res = await taskService.create(payload);
        if (res) {
          router.push("/task")
          showToast({
            title: "Success",
            description: `Successfully ${action} task`,
            status: "success",
          });
        }
      } catch (error: any) {
        console.log(error);
        showToast({
          title: "Error",
          description: error?.message,
          status: "error",
        });
      }
    },
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
            <Field.Root invalid={!!formik.errors?.name}>
              <Field.Label color={"black"}>{"Task Name"}</Field.Label>
              <Input
                {...formik.getFieldProps("name")}
                px={2}
                fontWeight={500}
                color={"black"}
              />
              <Field.ErrorText>{formik.errors?.name}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!formik.errors?.description}>
              <Field.Label color={"black"}>{"Task Description"}</Field.Label>
              <Textarea
                {...formik.getFieldProps("description")}
                py={1}
                minH={"100px"}
                px={2}
                fontWeight={500}
                color={"black"}
              />
              <Field.ErrorText>{formik.errors?.description}</Field.ErrorText>
            </Field.Root>
          </Stack>

          <HStack mt={2} justifyContent={"center"}>
            <Button
              color={"white"}
              bg={"green"}
              flex={1}
              onClick={formik.submitForm}
            >
              Submit
            </Button>
            <Button color={"white"} bg={"blue"} flex={1}>
              Reset
            </Button>
            <Button
              color={"white"}
              bg={"red"}
              flex={1}
              onClick={() => {
                showToast({
                  title: "Success",
                  description: `Successfully ${action} task`,
                  status: "success",
                });
              }}
            >
              Back
            </Button>
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
