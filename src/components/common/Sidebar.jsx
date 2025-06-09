import React, { useState } from "react";
import {
  Box as BoxIcon,
  List as ListIcon,
  BookText,
  Landmark,
  BadgeIndianRupee,
  Users,
  Settings,
  MonitorCog,
  Gauge,
  Dot,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button, Drawer, ListItemButton, Paper } from "@mui/material";
import { NavLink } from "react-router";

const Sidebar = () => {
  const navMenu = [
    {
      title: "Dashboard",
      url: "/",
      icon: Gauge,
      // items: [
      //   { title: "Dashboard Home", url: "/" },
      //   { title: "Analytics / Reports", url: "/analytics-reports" },
      //   { title: "Trends", url: "/trends" },
      // ],
    },
    {
      title: "Business",
      url: "/business-entities",
      icon: Landmark,
      items: [
        { title: "Companies", url: "/companies" },
        { title: "Members", url: "/members" },
        { title: "Partners", url: "/partners" },
        { title: "Inquiries", url: "/inquiries" },
        { title: "All Documents", url: "/all-documents" },
      ],
    },
    {
      title: "Product Management",
      url: "/product-management",
      icon: BoxIcon,
      items: [
        { title: "Brands", url: "/brands" },
        { title: "Categories & Subcategories", url: "/categories" },
        { title: "Products", url: "/products" },
      ],
    },
    {
      title: "Sales & Marketing",
      url: "/sales-marketing",
      icon: BadgeIndianRupee,
      items: [
        { title: "Wall Listings", url: "/wall-listing" },
        { title: "Opportunities", url: "/opportunities" },
        { title: "Offers & Demands", url: "/offers-demands" },
        { title: "Leads", url: "/leads" },
        { title: "Email Campaigns", url: "/email-campaign" },
        { title: "Automation Emails", url: "/automation-email" },
        { title: "Email Templates", url: "/email-templates" },
        { title: "Subscribers", url: "/subscribers" },
        { title: "Feedback / Requests", url: "/request-feedback" },
      ],
    },
    {
      title: "HR & Employees",
      url: "/hr-employees",
      icon: Users,
      items: [
        { title: "Employee Directory", url: "/employees" },
        { title: "Designations", url: "/designation" },
        { title: "Departments", url: "/department" },
        { title: "Job Listings", url: "/job-listings" },
        { title: "Roles & Permissions", url: "/access-control" },
        { title: "Task List", url: "/task-list" },
        { title: "Task Board", url: "/task-board" },
      ],
    },
    {
      title: "Web Settings",
      url: "/web-settings",
      icon: MonitorCog,
      items: [
        { title: "Home Categories", url: "/home-category-image" },
        { title: "Trending Images", url: "/trending-image" },
        { title: "Carousels", url: "/trending-carousel" },
        { title: "Sliders", url: "/sliders" },
        { title: "Blog", url: "/blog" },
      ],
    },
    {
      title: "Admin Settings",
      url: "/admin-settings",
      icon: Settings,
      items: [
        { title: "Company Profile", url: "/company-profile" },
        { title: "Global Settings", url: "/global-settings" },
        { title: "Domain Management", url: "/domain-management" },
        { title: "Number System", url: "/number-system" },
      ],
    },
    {
      title: "System Tools",
      url: "/system-tools",
      icon: Settings,
      items: [
        { title: "Form Builder", url: "/form-builder" },
        { title: "Row Data", url: "/row-data" },
        { title: "Bug Reports", url: "/bug-report" },
        { title: "Change Log", url: "/change-log" },
      ],
    },
    {
      title: "Master Data",
      url: "/master",
      icon: BookText,
      items: [
        { title: "Document Types", url: "/document-type" },
        { title: "Payment Terms", url: "/payment-terms" },
        { title: "Currency", url: "/currency" },
        { title: "Units", url: "/units" },
        { title: "Continents", url: "/continents" },
        { title: "Countries", url: "/countries" },
        { title: "Price List", url: "/price-list" },
        { title: "Documents List", url: "/document-list" },
        { title: "Export Mapping", url: "/export-mapping" },
      ],
    },
  ];

  const SidebarItem = ({ title, url, icon: Icon, subMenu }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => setSubMenuOpen((prev) => !prev);
    return (
      <div>
        {!subMenu ? (
          <NavLink to={url ? url : "#"}>
            <Button
              sx={{
              color: "sidebar.foreground",
              textAlign: "left",
              justifyContent: "start",
              fontSize: 12,
              height: 40,
              width: "100%",
              borderRadius: 0,
              pl: 2,
              ":hover": {
                background: "linear-gradient(to right,  blue, violet)",
              },
            }}
              startIcon={Icon ? <Icon size={16} /> : ""}
            >
              {title}
            </Button>
          </NavLink>
        ) : (
            <Button
              className="bg-[#000988]"
              sx={{
                color: "sidebar.foreground",
                textAlign: "left",
                justifyContent: "start",
                fontSize: 12,
                height:40,
                width: "100%",
                borderRadius: 0,
                pl: 2,
                ":hover": {
                  background: "linear-gradient(to right,  blue, violet)",
                },
              }}
              startIcon={<Icon size={16} />}
              onClick={() => toggleSubMenu()}
              endIcon={
                <ChevronDown size={14} 
                className={`absolute right-4 top-[14px] transition duration-200 ${subMenuOpen ? "transform-[rotate(180deg)]" : ""}`}/>
            }
            >
              {title}
            </Button>

        )}
        { subMenu && 
          <div
            className={`flex flex-col duration-200 ease-linear transition-all overflow-hidden ${
              subMenuOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            {subMenu.map((item, index) => {
              return (
                <NavLink key={index} to={url + item.url} className="">
                  <Button
                    startIcon={<Dot/>}
                    sx={{
                      textAlign: "left",
                      justifyContent: "start",
                      fontSize: 12,
                      width: "100%",
                      borderRadius: 0,
                      pl: 1,
                      color: "white",
                      ":hover": {
                        background: "linear-gradient(to right,  blue, violet)",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </NavLink>
              );
            })}
          </div>
        }
      </div>
    );
  };

  return (
    <div className="bg-[#00041b] text-sm min-w-[220px] h-full overflow-y-auto overflow-x-hidden shadow-xl">
      <figure className="px-3 py-2">
        <img src="/vite.svg" className="w-full h-16" />
      </figure>
      {navMenu.map((nav, index) => (
        <div key={index} className="">
          <SidebarItem
            url={nav.url}
            title={nav.title}
            icon={nav.icon}
            subMenu={nav.items}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
