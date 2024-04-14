"use client";
import { useUser } from "@clerk/nextjs";
const UserName = () => {
  const { user } = useUser();
  return <div>{user?.fullName ? user.fullName : "User"}</div>;
};
export default UserName;
