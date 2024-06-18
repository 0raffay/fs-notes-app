import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Folder, Search, Smile } from "lucide-react";

export default function Sidebar() {
  return (
    <div
      className="h-full bg-dark-400 pb-10 px-5 max-h-screen overflow-y-auto hide-scrollbar fixed left-0 top-0 bottom-0 max-w-[380px]"
      id="sidebar"
    >
      <div className="sticky top-0 bg-dark-400 z-10 pt-10 pb-8 mb-2 border-gray-400 border-b">
        <Button className="mb-4" full={true} size={"sm"} centered={true}>
          New Note
        </Button>
        <div className="flex items-center gap-3">
          <Input type="text" placeholder="Search" />
          <Button variant={"primary"} size={"icon"}>
            <Search />
          </Button>
        </div>
      </div>
      <h3 className="text-heading-light pb-2 mb-5 border-b border-gray-400 text-xs">
        Categories
      </h3>
      <ul id="categories" className="flex flex-col gap-5">
        <li className="hover:bg-dark-700 hover:py-2 hover:px-2 transition-all duration-300 rounded-sm">
          <button className="flex items-center gap-2 group">
            <span className="text-black bg-gray-200 rounded-full py-1 px-1 transition-all duration-150">
              <Folder size={16} />
            </span>
            <span className="text-white text-xs font-semibold">Coding</span>
          </button>
        </li>
        <li className="hover:bg-dark-700 hover:py-2 hover:px-2 transition-all duration-300 rounded-sm">
          <button className="flex items-center gap-2 group">
            <span className="text-black bg-gray-200 rounded-full py-1 px-1 transition-all duration-150">
              <Folder size={16} />
            </span>
            <span className="text-white text-xs font-semibold">Tasks</span>
          </button>
          <ul className="pl-4 pt-3 relative">
            <li>
              <button className="flex items-center gap-2 text-xs w-full text-white hover:bg-gray-200 mb-1 hover:text-black py-2 px-2 rounded-sm transition-all duration-250 hover:-translate-x-3">
                <Smile size={16} />
                Task 1
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-xs w-full text-white hover:bg-gray-200 mb-1 hover:text-black py-2 px-2 rounded-sm transition-all duration-250 hover:-translate-x-3">
                <Smile size={16} />
                Task 1
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 text-xs w-full text-white hover:bg-gray-200 mb-1 hover:text-black py-2 px-2 rounded-sm transition-all duration-250 hover:-translate-x-3">
                <Smile size={16} />
                Task 1
              </button>
            </li>
          </ul>
        </li>
        <li className="hover:bg-dark-700 hover:py-2 hover:px-2 transition-all duration-300 rounded-sm">
          <button className="flex items-center gap-2 group">
            <span className="text-black bg-gray-200 rounded-full py-1 px-1 transition-all duration-150">
              <Folder size={16} />
            </span>
            <span className="text-white text-xs font-semibold">School</span>
          </button>
        </li>
      </ul>
      <h3 className="text-heading-light py-2 my-5 border-b border-gray-400 text-xs">
        Tags
      </h3>
      <div id="tags" className="flex flex-wrap gap-2">
        <Badge variant={"outline"}>HTML</Badge>
        <Badge variant={"outline"}>Nodejs</Badge>
        <Badge variant={"outline"}>Laravel</Badge>
        <Badge variant={"outline"}>PHP</Badge>
        <Badge variant={"outline"}>CSS</Badge>
        <Badge variant={"outline"}>News</Badge>
      </div>
      <h3 className="text-heading-light py-2 my-5 border-b border-gray-400 text-xs">
        Recent Notes
      </h3>
      <div className="flex flex-col gap-3" id="recent-notes">
        <div className="py-3 px-3 flex flex-col gap-2 rounded-lg bg-dark-700 text-white hover:ring-1 ring-white cursor-pointer focus:ring-white hover:bg-dark-400">
          <h6 className="text-sm font-bold">
            NotePad is the best note taking app.
          </h6>
          <p className="text-xs">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem ...
          </p>
          <div className="flex justify-between mt-4">
            <Badge variant={"outline"}>
              <Folder size={12} className="mr-1" />
              Coding
            </Badge>
            <span className="text-xs font-medium">June 23, 2023</span>
          </div>
        </div>
        <div className="py-3 px-3 flex flex-col gap-2 rounded-lg bg-dark-700 text-white hover:ring-1 ring-white cursor-pointer focus:ring-white hover:bg-dark-400">
          <h6 className="text-sm font-bold">
            NotePad is the best note taking app.
          </h6>
          <p className="text-xs">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem ...
          </p>
          <div className="flex justify-between mt-4">
            <Badge variant={"outline"}>
              <Folder size={12} className="mr-1" />
              Coding
            </Badge>
            <span className="text-xs font-medium">June 23, 2023</span>
          </div>
        </div>
        <div className="py-3 px-3 flex flex-col gap-2 rounded-lg bg-dark-700 text-white hover:ring-1 ring-white cursor-pointer focus:ring-white hover:bg-dark-400">
          <h6 className="text-sm font-bold">
            NotePad is the best note taking app.
          </h6>
          <p className="text-xs">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem ...
          </p>
          <div className="flex justify-between mt-4">
            <Badge variant={"outline"}>
              <Folder size={12} className="mr-1" />
              Coding
            </Badge>
            <span className="text-xs font-medium">June 23, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
