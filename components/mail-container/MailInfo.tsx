import React from "react";
import MailInfoTitle from "../text/MailInfoTitle";
import { cn } from "@/lib/utils";

function MailInfo({ className }: { className?: string }) {
  const mailInfo = [
    {
      title: "name",
      name: "orlando",
    },
    {
      title: "Contact no",
      name: "1234567890",
    },
    {
      title: "email",
      name: "orlando@gmail.com",
    },
    {
      title: "linkedin",
      name: "orlando",
    },
    {
      title: "company name",
      name: "orlando",
    },
  ];
  return (
    <div
      className={cn(
        "px-2 py-4 bg-[#f9f9f9] dark:bg-black border-l-2",
        className
      )}
    >
      <div>
        <MailInfoTitle title="Lead Details" />
        <div>
          {mailInfo.map((info) => (
            <div
              key={info.title}
              className="flex justify-between items-center text-xs my-5 px-3"
            >
              <p className="text-[#637381] dark:text-white capitalize">
                {info.title}
              </p>
              <p className="text-black dark:text-[#B9B9B9]">{info.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <MailInfoTitle title="Activities" />
        <div className="my-5 px-5">
          <p className="text-[#172B4D] dark:text-white font-bold">
            Campaign Name
          </p>
          <div className="text-xs text-[#454F5B] dark:text-white">
            <strong>3</strong> Steps &nbsp;|&nbsp; <strong>5</strong> Days in
            Sequence
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailInfo;
