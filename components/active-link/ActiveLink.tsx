"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

const style = {
    link: "hover:unerline hover:text-blue-400 mr-2 transition-all",
    active: "text-blue-500" 
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style.active}`}
      href={path}
    >
      {text}
    </Link>
  );
};
