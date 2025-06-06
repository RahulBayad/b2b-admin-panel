import React, { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Download,
  FunnelPlus,
  Mail,
  MessageCircleMore,
  Plus,
  Search,
  Upload,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { errorHandler } from "@/utils/errorHandler";
import { Label } from "@/components/ui/label";
import { DatePickerWithRange } from "@/components/ui/datepicker";

import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";

const opportunityTableToolbar = ({ globalFilter, setGlobalFilter }) => {
  const { control, handleSubmit } = useForm();

  const handleFilters = errorHandler(async (data) => {
    console.log("Data is ", data);
  });

  return (
    <div
      id="toolbar"
      className="flex gap-2 flex-wrap justify-end text-muted-foreground mb-5"
    >
      <div className="flex items-center relative">
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

      <button className="bg-yellow-500 w-28 rounded-md text-white font-semibold">
        Seller
      </button>
      <button className="bg-blue-500 w-28 rounded-md text-white font-semibold">
        Buyer
      </button>

      <Dialog>
        <DialogTrigger asChild>
            <button className="bg-violet-400 w-28 flex items-center justify-center gap-1 rounded-md text-white font-semibold">
                <FunnelPlus className="!h-4 !w-4"/> Filter
            </button>
        </DialogTrigger>
        <DialogContent className="md:!max-w-[750px] lg:!max-w-[800px] lg:w-[80vw]">
          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
            <DialogDescription className="hidden"></DialogDescription>
          </DialogHeader>
          <form id="filter-form" onSubmit={handleSubmit(handleFilters)}>
            <div className="flex flex-wrap justify-between ">
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label
                  htmlFor=""
                  className="text-normal font-medium text-black"
                >
                  Status
                </label>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Continent
                </label>
                <Controller
                  name="continent"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Continent" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia">Asia</SelectItem>
                        <SelectItem value="Africa">Africa</SelectItem>
                        <SelectItem value="Europe">Europe</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Country
                </label>
                <Controller
                  name="Country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="Nepal">Nepal</SelectItem>
                        <SelectItem value="Shreelanka">Shreelanka</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  State
                </label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Gujarat">Gujarat</SelectItem>
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  City
                </label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Business Type
                </label>
                <Controller
                  name="business-type"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Business Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Trading">Trading</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Member Class
                </label>
                <Controller
                  name="member-className"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Member Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Trading">Trading</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Interested for
                </label>
                <Controller
                  name="interested"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Trading">Trading</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Interested Category
                </label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Trading">Trading</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Sub category
                </label>
                <Controller
                  name="sub-category"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Sub-Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Trading">Trading</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Brand
                </label>
                <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Trading">Trading</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Created Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="border border-gray-200 rounded-lg text-xs py-2.5 px-2"
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Membership Type
                </label>
                <Controller
                  name="membership-type"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Membership" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Trading">Trading</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Relationship manager
                </label>
                <Controller
                  name="relationship-manager"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seelct Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Trading">
                          Select Relationship manager
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Product Status
                </label>
                <Controller
                  name="product-status"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seelct Product Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sold">Sold</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col mt-5 w-full sm:w-[48%] md:w-[32%] gap-0.5 relative">
                <label htmlFor="" className="text-sm font-medium">
                  Member Grade
                </label>
                <Controller
                  name="member-grade"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Member Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sold">Sold</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="w-full justify-end mt-8 flex gap-2">
              <Button variant="outline">Reset</Button>
              <Button>Apply</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      
      
      <button className="bg-green-600 w-28 rounded-md text-white font-semibold">
        Quick Access
      </button>
    </div>
  );
};

export default opportunityTableToolbar;
