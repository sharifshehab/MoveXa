/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useParcelStatusMutation } from "@/redux/features/admin/adminApi"
import { toast } from "sonner"
import { parcelStats } from "@/constants/parcelStats"

export default function PopupSelect({ parcelId, parcelCurrentStatus }: { parcelId: string, parcelCurrentStatus: string }) {
  const [status, setStatus] = useState<string>("")
  const [parcelStatus] = useParcelStatusMutation();

  // Change parcel status
  const handleParcelStatus = async () => {
    const updateData = { "parcelStatus": status }
    try {
      const res = await parcelStatus({ parcelId, updateData }).unwrap();
      toast.success(res?.message)
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change Status</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Change Parcel Status
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              Change the parcel current status.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <div className="grid gap-4">
                <Select onValueChange={(val) => setStatus(val)} value={parcelCurrentStatus}>
                  <SelectTrigger className="w-full" >
                    <SelectValue placeholder="Select parcel status" />
                  </SelectTrigger>
                  <SelectContent>
                    {parcelStats.slice(0, -2).map((status, idx) => <SelectItem key={idx} value={status}>{status}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <Button type="button" onClick={handleParcelStatus}>Change Status</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
