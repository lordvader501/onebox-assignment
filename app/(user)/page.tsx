"use client";
import DialogButton from "@/components/DialogButton";
import MailInfo from "@/components/mail-container/MailInfo";
import MailList from "@/components/mail-container/MailList";
import MailThread from "@/components/mail-container/MailThread";
import axios from "axios";
import { Trash2Icon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function MailHomePage() {
  const router = useRouter();
  const params = useSearchParams();
  const [mails, setMails] = useState([]);
  const [isSendMail, setIsSendMail] = useState(false);
  const [currentThread, setCurrentThread] = useState<any>({});
  function setThread(id: Object) {
    setCurrentThread(id);
  }
  useEffect(() => {
    if (params.get("token") === null) {
      router.push("/login");
      return;
    }
    const handleKeyDown = (event: any) => {
      if (currentThread?.id) {
        // "D" key for Delete
        if (event.key === "D") {
          document.getElementById("delete-btn")?.click();
        }

        // "R" key for Reply
        if (event.key === "R") {
          setIsSendMail(true);
        }
      }
    };

    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleDeleteThread() {
    if (!currentThread.id && mails.length === 0) return;
    axios.delete(
      "https://hiring.reachinbox.xyz/api/v1/onebox/messages/" +
        currentThread.threadId,
      {
        headers: {
          Authorization: "Bearer " + params.get("token"),
        },
      }
    );
    setMails(
      mails.filter((item: any) => item.threadId !== currentThread.threadId)
    );
  }
  return (
    <Suspense fallback={null}>
      <div className="pl-12 pt-16 h-screen w-full grid grid-cols-5 bg-white dark:bg-black border-b-2">
        <MailList
          className="col-span-1 bg-white"
          token={params.get("token")}
          setThread={setThread}
          thread={currentThread}
          mails={mails}
          setMails={setMails}
        ></MailList>
        <MailThread
          thread={currentThread}
          token={params.get("token")}
          isDialog={isSendMail}
          closeDialog={() => setIsSendMail(false)}
          className="col-span-3 bg-white"
          openDialog={() => setIsSendMail(true)}
        />
        <MailInfo className="col-span-1" />
        <DialogButton
          title="Do you want to delete this room?"
          description="This action cannot be undone. This will permanently delete this room."
          variant="outline"
          handleClick={handleDeleteThread}
          icon={<Trash2Icon />}
        />
      </div>
    </Suspense>
  );
}
