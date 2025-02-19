import CustomHeader from "@/components/utilities/CustomHeader";
import CustomText from "@/components/utilities/CustomText";
import React from "react";
import Hero from "./Hero";
import DiveInto from "./DiveInto";

type Props = {};

const page = ({}: Props) => {
  return (
    <div>
      <Hero />
      <DiveInto />
    </div>
  )
};

export default page;
