import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

const HomeSearch = () => {
  return (
    <div className="relative">
      <div className="absolute -top-9 w-full text-center">
        <div className="mx-auto inline-flex flex-row space-x-3 p-4 rounded-xl bg-red-600 ">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Bride/Groom" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Bride</SelectItem>
              <SelectItem value="dark">Groom</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="From Age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="To Age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="destructive">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
