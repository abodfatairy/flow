import StreamVideoProvider from "@/providers/StreamClientProvider";
import React from "react";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StreamVideoProvider>

    <main className=''>
      {children}
    </main>
    </StreamVideoProvider>
  )
};

export default Rootlayout;
