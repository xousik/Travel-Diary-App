"use client";

import LogedInShowMore from "@/src/components/layouts/logedInShowMore";
import LogedInDefault from "./logedInDefault";
import { ShowMoreButtonContext } from "@/src/context/showMoreButtonContext";
import { useContext } from "react";

export default function LogedinLayout({ userName }: { userName: string }) {
  const { isActive }: { isActive?: boolean } = useContext(
    ShowMoreButtonContext
  );

  return isActive ? (
    <LogedInShowMore userName={userName!} />
  ) : (
    <LogedInDefault userName={userName!} />
  );
}
