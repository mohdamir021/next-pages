import { createToaster } from "@chakra-ui/react";

/**
 * Custom toast will provied default styles props
 * destructre showToast function
 */
export const useAppToast = () => {
  const toast = createToaster({
    placement: "bottom-end",
    pauseOnPageIdle: true,
    duration: 5000,
    max: 3,
  });

  const showToast = ({
    title,
    description,
    status,
  }: {
    title: string;
    description: string;
    status: "info" | "warning" | "success" | "error" | "loading" | undefined;
  }) => {
    toast.create({
      description,
      title,
      type: status,
      // variant: "subtle",
      duration: 5000,
      closable: true,
    });
  };

  return { showToast };
};
