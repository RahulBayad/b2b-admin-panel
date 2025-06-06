import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Search,
} from "lucide-react";

const requestTableToolbar = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div
      id="toolbar"
      className="flex gap-2 flex-wrap justify-end text-muted-foreground mb-5"
    >
      <div className="flex items-center relative w-full">
        <Search className="absolute left-2 pointer-events-none h-4 w-4" />
        <Input
          type="search"
          placeholder="Quick Search"
          className="pl-8 w-full"
          value={globalFilter ?? ""}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default requestTableToolbar;
