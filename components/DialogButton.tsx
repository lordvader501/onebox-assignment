import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

function DialogButton({
  title,
  description,
  variant,
  handleClick,
  icon,
  className,
}: {
  title: string;
  description: string;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  handleClick: () => void;
  icon: JSX.Element | string;
  className?: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="hidden" id="delete-btn">
        <Button variant={variant} className={className}>
          {icon}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[400px] bg-neutral-800">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl py-2">
            Are you sure ?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center mb-20 text-[#E8E8E8]">
            Your selected email will be deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex !justify-center items-center mt-8">
          <AlertDialogCancel className="bg-neutral-700 px-8 py-4">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleClick}
            className="bg-red-grad text-white px-8 py-4"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default DialogButton;
