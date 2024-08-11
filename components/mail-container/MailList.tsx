import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { RotateCwIcon, SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import axios from "axios";
import MailCard from "./MailCard";

function MailList({
  className,
  token,
  setThread,
  thread,
  mails,
  setMails,
}: {
  className?: string;
  token: string | null;
  setThread: (id: number) => void;
  thread: any;
  mails: any;
  setMails: (obj: any) => void;
}) {
  const mailsTypes = ["All Inbox(s)"];
  const mailduration = ["Newest"];
  const repliesCount = 26;
  // const [mails, setMails] = useState([]);

  useEffect(() => {
    axios
      .get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((resp) => {
        setMails(resp.data.data);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div
      className={cn(
        "px-2 py-4 !bg-[#fafafa] dark:!bg-black border-r-2",
        className
      )}
    >
      <div className="flex justify-between items-center pr-3">
        <Select defaultValue={mailsTypes[0]}>
          <SelectTrigger className="w-[180px] !justify-center gap-1 !bg-transparent !border-none !outline-none text-blue-500 font-medium text-xl -ml-4">
            <SelectValue defaultValue={mailsTypes[0]} />
          </SelectTrigger>
          <SelectContent>
            {mailsTypes.map((mailtype) => (
              <SelectItem value={mailtype} key={mailtype}>
                {mailtype}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          size="sm"
          className="bg-white border-2 dark:border-none dark:bg-[#25262b]"
        >
          <RotateCwIcon className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm px-2">
        <strong>25/25</strong> Inboxes selected
      </p>
      <div className="relative mt-2 text-[#4f5256]">
        <SearchIcon className="absolute top-2 left-2 w-4 h-4 dark:text-gray-600" />
        <Input
          type="search"
          placeholder="Search"
          className="pl-7 h-8 border-2 dark:text-[#4f5256] bg-[#f4f6f8] dark:bg-[#23272c]"
        />
      </div>
      <div className="flex justify-between items-center mt-2 border-b-2 pb-1">
        <div className="flex gap-2 font-bold text-sm items-center justify-center">
          <div className="px-3 py-1 text-sm bg-[#ececec] dark:bg-[#222426] rounded-full text-blue-600">
            {repliesCount}
          </div>
          New Replies
        </div>
        <Select defaultValue={mailduration[0]}>
          <SelectTrigger className="w-[100px] !justify-center gap-1 !bg-transparent !border-none !outline-none font-medium text-sm -ml-4">
            <SelectValue defaultValue={mailduration[0]} />
          </SelectTrigger>
          <SelectContent>
            {mailduration.map((duration) => (
              <SelectItem value={duration} key={duration}>
                {duration}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="">
        {mails.length > 0 &&
          mails.map((mail: any) => (
            <MailCard
              mail={mail}
              key={mail.id}
              setMail={() => setThread(mail)}
              thread={thread}
            />
          ))}
      </div>
    </div>
  );
}

export default MailList;
