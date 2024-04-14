import CallList from "@/components/ui/shared/CallList";
import MainSection from "@/components/ui/shared/mainSection";
import React from "react";

const Upcoming = () => {
  return (
    <>
      <MainSection headerText='Upcoming Meetings'>
        <CallList type='upcoming'/>
      </MainSection>
    </>
  );
};

export default Upcoming;
