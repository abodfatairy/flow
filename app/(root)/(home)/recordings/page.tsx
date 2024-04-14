import CallList from "@/components/ui/shared/CallList";
import MainSection from "@/components/ui/shared/mainSection";
import React from "react";

const Recordings = () => {
  return (
    <>
      <MainSection headerText='Recordings'>
        <CallList type="recordings"/>
      </MainSection>
    </>
  );
};

export default Recordings;
