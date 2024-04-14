import MeetingTypeList from "@/components/ui/shared/MeetingTypeList";
import UserName from "@/components/ui/shared/UserName";
import MainSection from "@/components/ui/shared/mainSection";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  // const { user}=useUser()
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  return (
    <>
      <MainSection>
        <div className=' h-[300px] w-full rounded-[20px] bg-hero bg-cover bg-center '>
          <div className=' flex h-full flex-col justify-between  px-5 py-8 lg:p-11'>
            {/* TODO  make the time dynamic */}
            <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal flex-center gap-2'>
              Hello  <UserName />
            </h2>
            <div className=' flex flex-col gap-2'>
              <h1 className=' text-4xl font-extrabold lg:text-7xl'>{time}</h1>
              <p className=' texr-lg font-medium text-sky-1 lg:text-2xl'>
                {date}
              </p>
            </div>
          </div>
        </div>
        <MeetingTypeList />
      </MainSection>
    </>
  );
};

export default Home;
