import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FunnelPlus, Search, Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { exportToExcel } from "@/utils/exportToExcel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DocumentTypesTableTools = ({
  globalFilter,
  setGlobalFilter,
  data,
  selectedRows,
}) => {
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
  });

  const handleFilters = async (data) => {
    console.log("Data is ", data);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const filtersFormSubmit = (data) => {
    console.log("filters data", data);
  };

  return (
    <div
      id="toolbar"
      className="flex gap-2 flex-wrap lg:flex-nowrap justify-end text-muted-foreground mb-5"
    >
      <div className="flex items-center relative w-full">
        <Search className="absolute left-2 pointer-events-none h-4 w-4" />
        <Input
          type="search"
          placeholder="Quick Search"
          className="pl-8"
          value={globalFilter ?? ""}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
        />
      </div>

      {/* Filters */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="h-9 w-9">
            <X className="!h-6 !w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Clear Filters</TooltipContent>
      </Tooltip>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <FunnelPlus /> Filters
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <Form {...form}>
            <form
              id="filterForm"
              onSubmit={form.handleSubmit(filtersFormSubmit)}
              className="px-4 flex flex-col gap-4 "
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel>Document Name</FormLabel>
                    <FormControl >
                      <Select >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Document" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">Adhar</SelectItem>
                            <SelectItem value="banana">PAN</SelectItem>
                            <SelectItem value="blueberry">Invoice</SelectItem>
                            <SelectItem value="grapes">GST</SelectItem>
                            <SelectItem value="pineapple">Passport</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SheetFooter className="p-0">
                <Button id="filterForm" type="submit">
                  Apply
                </Button>
              </SheetFooter>
            </form>
          </Form>
        </SheetContent>
      </Sheet>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Upload /> Export
          </Button>
        </DialogTrigger>
        <DialogContent className="!max-w-[350px]">
          <DialogHeader>
            <DialogTitle className="text-center">Export Data</DialogTitle>
            <DialogDescription className="mt-8">
              Reason For Export
            </DialogDescription>
          </DialogHeader>

          <Textarea placeholder="Type Reason" />

          <Button
            onClick={() =>
              exportToExcel(
                selectedRows?.length > 0 ? selectedRows : data,
                "Units.xlsx"
              )
            }
          >
            Export
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DocumentTypesTableTools;
