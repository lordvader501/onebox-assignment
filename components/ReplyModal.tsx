import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";
import { headers } from "next/headers";

function ReplyModal({
  thread,
  closeDialog,
  token,
}: {
  thread: any;
  closeDialog: () => void;
  token: string | null;
}) {
  const [formData, setFormData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });
  function handeSubmitMail() {
    if (
      formData.to === "" ||
      formData.from === "" ||
      formData.subject === "" ||
      formData.body === ""
    )
      return;
    axios
      .post(
        "https://hiring.reachinbox.xyz/api/v1/onebox/reply/" + thread.threadId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          body: {
            to: formData.to,
            from: formData.from,
            subject: formData.subject,
            body: formData.body
              .split("/n")
              .map((item) => `<p>${item}</p>`)
              .join(),
          },
        }
      )
      .catch((e) => console.error(e));
    closeDialog();
  }
  return (
    <div className="flex flex-col bottom-0 m-5 fixed z-20 w-full rounded-lg max-w-[700px] border-2">
      <div className="w-full flex justify-between items-center bg-[#23272c] rounded-t-lg px-4 py-3">
        <p className="font-semibold">Reply</p>
        <PlusIcon className="rotate-45 cursor-pointer" onClick={closeDialog} />
      </div>
      <div>
        <div className="relative">
          <span className="absolute top-1/2 -translate-y-1/2 left-5 text-xs">
            To:
          </span>
          <Input
            className="border-y-1 rounded-none pl-10 dark:bg-[#141517]"
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          />
        </div>
        <div className="relative">
          <span className="absolute top-1/2 -translate-y-1/2 left-5 text-xs">
            From:
          </span>
          <Input
            className="border-y-1 rounded-none pl-14 dark:bg-[#141517] "
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
        </div>
        <div className="relative">
          <span className="absolute top-1/2 -translate-y-1/2 left-5 text-xs">
            Subject:
          </span>
          <Input
            className="border-y-1 rounded-none pl-16 dark:bg-[#141517] "
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <Textarea
          placeholder="Type your message here."
          className="border-y-1 rounded-none px-5 dark:bg-[#141517] h-56"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
      </div>
      <div className="flex dark:bg-[#141517] py-2 px-4">
        <Button
          className="bg-blue-grad h-9 text-white w-28"
          onClick={handeSubmitMail}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default ReplyModal;
