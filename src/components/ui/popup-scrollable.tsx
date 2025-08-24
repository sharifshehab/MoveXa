import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IStatusLog } from "@/types"
import { format } from "date-fns";

export default function PopupScroll({ status }: { status: IStatusLog[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View History</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Parcel Delivery History
          </DialogTitle>
          <div className="overflow-y-auto">
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
                  {
                    status.map((item, idx) => (
                      <div className="space-y-1" key={idx}>
                        <p>
                          <strong>{item.status}</strong>
                        </p>
                        <p>Date & Time: {format(new Date(item.timestamp), "PPpp")}</p>
                        <p>Action By: {item.updatedBy}</p>
                        <p>Note: {item.note}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </DialogDescription>
            <DialogFooter className="px-6 pb-6 sm:justify-start">
              <DialogClose asChild>
                <Button type="button">Okay</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
