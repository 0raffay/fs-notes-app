import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Folder } from "lucide-react";

export default function Form() {
  return (
    <>
      <textarea
        rows={1}
        className="leading-normal text-7xl font-normal text-[#C8C8C8]  bg-transparent ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none w-full block resize-none mb-4"
        placeholder="Note Title"
      ></textarea>
      <div className="max-w-3xl sticky top-0">
        <div id="tags" className="flex flex-wrap gap-5 mb-4">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <Badge variant={"secondary"}>
              <Folder size={12} className="mr-1" />
              Coding
            </Badge>
            <Separator orientation="vertical" />
            <div className="text-white font-medium text-xs flex items-center gap-1">
              <Clock size={12} className="mr-1" />
              Updated at 2mins ago
            </div>
          </div>
          <Separator />
        </div>

        <div className="flex flex-col gap-3 text-slate-200 text-sm">
          <textarea
            name="main-text"
            placeholder="Start writing here..."
            className="min-h-screen bg-transparent ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none resize-none"
          ></textarea>
        </div>
        <Button size={"sm"}>Save Note</Button>
      </div>
    </>
  );
}
