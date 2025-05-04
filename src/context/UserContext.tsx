import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

// UserContextValue
interface UserContextValue {
  user: any;
  status: "loggedIn" | "loggedOut";
} 

// Create user context
export const UserContext = createContext<
  [UserContextValue, React.Dispatch<React.SetStateAction<UserContextValue>>]
>([{ user: null, status: "loggedOut" }, () => {}]);

// Export
export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const [user, setUser] = useState<UserContextValue>({
    user: null,
    status: "loggedOut"
  });

  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
