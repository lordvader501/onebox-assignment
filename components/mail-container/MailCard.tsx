import { cn } from "@/lib/utils";
import React from "react";

function MailCard({
  mail,
  setMail,
  thread,
}: {
  mail: any;
  thread: any;
  setMail: () => void;
}) {
  const dateObj = new Date(mail.sentAt);

  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return (
    <div
      className={cn("border-b-2 flex flex-col px-2 py-2 cursor-pointer group", {
        "border-l-4 border-blue-600": mail.threadId === thread?.threadId,
      })}
      onClick={setMail}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {!mail.isRead && <div className="bg-blue-600 w-2 h-2 rounded-full" />}
          <p className="text-black dark:text-white text-sm font-medium">
            {mail.toEmail}
          </p>
        </div>
        <span className="text-xs text-[#919eab] dark:text-[#656565]">
          {formattedDate}
        </span>
      </div>
      <div className="grid grid-cols-8">
        <span className="text-[#172b4d] dark:text-[#E1E0E0] text-sm text-ellipsis line-clamp-1 col-span-7">
          {mail.subject}
        </span>
      </div>
    </div>
  );
}

export default MailCard;
