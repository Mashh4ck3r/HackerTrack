import React from "react";
import { PushSpinner   } from "react-spinners-kit";

export const Loader = ({loading}) => {
  return (
    <>
       <div className="flex w-full h-screen z-50 items-center justify-center">
            <PushSpinner   size={200} color="#9fef00" loading={loading} />
       </div>
    </>
  );
};