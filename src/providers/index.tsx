import { CustomChakraProvider } from "@/components/ui/provider";
import { UserContextProvider } from "@/context/UserContext";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CustomChakraProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </CustomChakraProvider>
  );
}
