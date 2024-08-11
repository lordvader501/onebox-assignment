import { cn } from "@/lib/utils";
import React from "react";

function MailInfoTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "bg-[#eceff3] text-sm dark:bg-[#23272c] font-semibold text-dark-grey dark:text-semi-grey rounded-lg px-3 py-2",
        className
      )}
    >
      {title}
    </p>
  );
}

export default MailInfoTitle;
