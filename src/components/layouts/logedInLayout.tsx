"use client";

import ShowMore from "@/src/components/layouts/showMore";
import LogedInDefault from "./logedInDefault";
import { ShowMoreButtonContext } from "@/src/context/showMoreButtonContext";
import { useContext } from "react";

export default function LogedinLayout({ userName }: { userName: string }) {
  const { isActive }: { isActive?: boolean } = useContext(
    ShowMoreButtonContext
  );

  return isActive ? (
    <ShowMore userName={userName!} />
  ) : (
    <LogedInDefault userName={userName!} />
  );
}
