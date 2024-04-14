import React from "react";
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' w-screen h-screen flex-center flex-col gap-20'>   
     {children}
    </div>
  );
};
export default layout;
