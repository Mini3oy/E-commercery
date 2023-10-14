"use client";

import { GlobalContext } from "@/context";
import { useContext } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  console.log(isAuthUser);

  return (
    <main className=" text-black flex min-h-screen flex-col items-center justify-between p-24">
      <h1>E comnerce Website</h1>
    </main>
  );
}
