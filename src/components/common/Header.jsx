// components/Sidebar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  useTheme,
  Paper,
  ListItemButton,
} from "@mui/material";

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
} from "lucide-react";
import { NavLink } from "react-router";

const drawerWidth = 260;

const Header = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const navMenu = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Gauge,
      items: [
        { title: "Dashboard Home", url: "/dashboard" },
        { title: "Analytics / Reports", url: "/analytics-reports" },
        { title: "Trends", url: "/trends" },
      ],
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

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "none",
          border: "none",
          padding: "10px",
        }}
      >
        <Avatar src="/vite.svg" />
      </AppBar>
      <Paper
        className="flex border px-2"
        sx={{ borderColor: "border.main", borderRadius: "0px" }}
      >
        {navMenu.map((nav, index) => (
          <div key={index} className="relative group">
            <Button 
              sx={{borderRadius : "0px", padding : "5px 20px"}}  
              startIcon={<nav.icon size={16}/>}
              className="min-w-fit" 
            >
              {nav.title}
            </Button>

            <Paper 
              className="hidden group-hover:flex flex-col list-none absolute min-w-40 text-sm !shadow-xl z-10"
              sx={{ borderRadius: "0px" }}
            >
              {
                nav.items.map((subMenu, index) => (
                  <ListItemButton className="px-4 py-2 hover:bg-blue-200 text-nowrap">
                    <NavLink className="w-full" to={nav.url+subMenu.url}>
                      {subMenu.title}
                    </NavLink>
                  </ListItemButton>
                ))
              }
            </Paper>
          </div>
        ))}
      </Paper>

      {/* Main content */}
      
    </div>
  );
};

export default Header;
