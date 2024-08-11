import React from "react";
import { Card, CardContent } from "../ui/card";
import { formatDateTime, formatDateThread } from "@/lib/utils";

function ThreadInfoCard({ thread }: { thread: any }) {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[1px] my-6 border" />
        <p className="dark:bg-[#171819] bg-[#eef1f4] absolute py-0.5 left-1/2 -translate-x-1/2 -top-2.5 rounded px-3 text-xs">
          {formatDateThread(thread.sentAt)}
        </p>
      </div>
      <Card className="dark:bg-[#141517] bg-[#f9f9f9]">
        <CardContent>
          <div className="py-3 flex flex-col text-sm">
            <div className="flex justify-between items-start">
              <p className="font-semibold text-sm">{thread.subject}</p>
              <span className="text-sm text-[#637381] dark:text-[#7f7f7f]">
                {formatDateTime(thread.sentAt)}
              </span>
            </div>
            <div className="mt-1">
              <p className="py-1 text-[#637381] dark:text-[#7f7f7f]">
                from: {thread.fromEmail}
              </p>
              <p className="py-1 text-[#637381] dark:text-[#7f7f7f]">
                to: {thread.toEmail}
              </p>
            </div>
          </div>
          <div>
            <div
              className="text-sm [&>p]:py-2"
              dangerouslySetInnerHTML={{ __html: thread.body }}
            ></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ThreadInfoCard;
