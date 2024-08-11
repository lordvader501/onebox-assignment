import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "../ui/select";
import axios from "axios";
import ThreadInfoCard from "./ThreadInfoCard";
import { Button } from "../ui/button";
import Image from "next/image";
import ReplyModal from "../ReplyModal";

function MailThread({
  mail,
  thread,
  className,
  token,
  isDialog,
  closeDialog,
  openDialog,
}: {
  mail?: any;
  className: string;
  thread: any;
  token: string | null;
  isDialog: boolean;
  closeDialog: () => void;
  openDialog: () => void;
}) {
  const meetingTags = ["Meeting Completed"];
  const moveOptions = ["Move"];
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    if (thread.threadId) {
      axios
        .get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/messages/" +
            thread.threadId,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => setThreads(res.data.data))
        .catch((e) => console.error(e));
    }
  }, [thread.id]);
  return (
    <div className={cn("bg-white dark:bg-black h-full relative", className)}>
      {thread.id && (
        <>
          <div className="border-b-2 grid grid-cols-5 py-3 px-5">
            <div className="col-span-3">
              <p className="text-sm font-bold">{thread.fromName}</p>
              <p className="text-xs text-[#787878]">{thread.fromEmail}</p>
            </div>
            <div className="col-span-2 flex gap-4">
              <Select defaultValue={meetingTags[0]}>
                <SelectTrigger className="w-fit border-neutral-300 dark:border-neutral-600 bg-semi-grey gap-2 h-8 border-2 dark:bg-[#202022]">
                  <SelectValue defaultValue={meetingTags[0]} />
                </SelectTrigger>
                <SelectContent>
                  {meetingTags.map((tag) => (
                    <SelectItem value={tag} key={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue={moveOptions[0]}>
                <SelectTrigger className="w-fit border-neutral-300 dark:border-neutral-600 bg-semi-grey gap-2 h-8 border-2 dark:bg-[#202022]">
                  <SelectValue defaultValue={moveOptions[0]} />
                </SelectTrigger>
                <SelectContent>
                  {moveOptions.map((tags) => (
                    <SelectItem value={tags} key={tags}>
                      {tags}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="p-3">
            {threads.length > 0 &&
              threads.map((th: any) => (
                <ThreadInfoCard thread={th} key={th.id} />
              ))}
          </div>
        </>
      )}
      {isDialog ? (
        <ReplyModal token={token} thread={thread} closeDialog={closeDialog} />
      ) : (
        thread.id && (
          <Button
            className="fixed bottom-3 ml-3 rounded-sm bg-blue-grad flex gap-3 items-center px-8 text-white"
            onClick={openDialog}
          >
            <Image
              src="/images/reply.png"
              alt="reply"
              width={50}
              height={50}
              className="w-4"
            />
            Reply
          </Button>
        )
      )}
    </div>
  );
}

export default MailThread;
