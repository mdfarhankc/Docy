import Link from "next/link";
import React from "react";
import { Karla } from "next/font/google";
import { cn } from "@/lib/utils";

const karla = Karla({ subsets: ["latin"], weight: "500" });

const Logo = () => {
  return (
    <Link
      href={"/"}
      className={(karla.className, "flex gap-4 items-center justify-center")}
    >
      <h3 className={cn("text-primary font-extrabold text-2xl")}>Docy</h3>
    </Link>
  );
};

export default Logo;
