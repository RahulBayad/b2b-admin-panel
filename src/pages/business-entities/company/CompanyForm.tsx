import { zodResolver } from "@hookform/resolvers/zod";
import {
  Breadcrumbs,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

const CompanyForm = () => {
  const companyFormSchema = z.object({
    company_name: z
      .string({required_error: "Company Name is require"})
      .trim()
      .min(2, { message: "Name must be larger than 2 characters" }),
    status: z.string({required_error: "Please choose a status"}).min(1, { message: "Status is required" }),
    primary_contact: z.number().min(6, { message: "Invalid Contact Number" }),
    primary_email: z
      .string()
      .trim()
      .min(1, { message: "Primary Email is required" }),
    alternate_contact: z.number().optional(),
    alternate_email: z.string().trim().optional(),
    ownership: z.string().trim().optional(),
    owner: z.string().trim().optional(),
    continent: z.string().trim().optional(),
    country: z.string().trim().optional(),
    state: z.string().trim().optional(),
    city: z.string().trim().optional(),
    address: z.string().trim().optional(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      status: ""
    },
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/business-entities/companies" className="hover:underline">
          MUI
        </Link>
        <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
      </Breadcrumbs>

      <Paper sx={{ p: 2, mt: 2 }}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-3 gap-4"
        >
          <FormControl fullWidth >
            <Controller
              name="company_name"
              control={control}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  type="text"
                  size="small"
                  label="Company Name"
                  {...field}
                  error={!!errors?.company_name}
                  helperText={errors?.company_name?.message}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth error={!!errors.status}>
            <InputLabel id="status" size="small" required>Status </InputLabel>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select id="Status" size="small" label="Status *" {...field}>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                  <MenuItem value="Disabled">Diabled</MenuItem>
                </Select>
              )}
            />
            <FormHelperText>{errors?.status?.message}</FormHelperText>
          </FormControl>
          <FormControl fullWidth >
            <Controller
              name="primary_email"
              control={control}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  type="email"
                  size="small"
                  label="Primary Email ID"
                  {...field}
                  error={!!errors?.primary_email}
                  helperText={errors?.primary_email?.message}
                />
              )}
            />
          </FormControl>
          <button type="submit">Save</button>
        </form>
      </Paper>
    </div>
  );
};

export default CompanyForm;
