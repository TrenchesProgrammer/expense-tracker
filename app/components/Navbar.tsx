"use client";

import { Center } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    const name =
      pathname === "/"
        ? "Home"
        : pathname
            .slice(1) // Remove leading "/"
            .replace(/-/g, " ") // Optional: Replace dashes with spaces
            .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize words

    setPageName(name);
  }, [pathname]);

  return (
    <Center>
      <h3>{pageName}</h3>
    </Center>
  );
};

export default Navbar;
