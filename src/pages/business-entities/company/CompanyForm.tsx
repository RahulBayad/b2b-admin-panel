import { zodResolver } from "@hookform/resolvers/zod";
import {
  Breadcrumbs,
  Button,
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
      .string({ required_error: "Company Name is require" })
      .trim()
      .min(2, { message: "Name must be larger than 2 characters" }),
    ownership: z.string().trim().optional(),
    owner: z.string().trim().optional(),
    establishment_year: z.number().optional(),
    company_type: z.string().trim().optional(),
    company_website: z.string().trim().optional(),
    company_logo_brochure: z.string().trim().optional(),
    status: z
      .string({ required_error: "Please choose a status" })
      .min(1, { message: "Status is required" }),
    country: z.string().trim().optional(),
    state: z.string().trim().optional(),
    city: z.string().trim().optional(),
    zip_postal_code: z.number().optional(),
    address: z.string().trim().optional(),
    primary_contact_number: z
      .number({ required_error: "Primary Contact Number is Required" })
      .optional(),
    primary_contact_number_code: z.number({
      required_error: "Code is Required",
    }),
    alternate_contact_number: z.number().optional(),
    alternate_contact_country_code: z.number().optional(),
    primary_email: z
      .string()
      .trim()
      .min(1, { message: "Primary Email is required" }),
    alternate_email: z.string().trim().optional(),
    notification_email: z.string().trim().optional(),

    

    gst_number: z.string().trim().optional(),
    pan_number: z.string().trim().optional(),
    trn_number: z.string().trim().optional(),
    tan_number: z.string().trim().optional(),

    primary_business_type: z.string().trim().optional(),
    primary_business_category: z.string().trim().optional(),
    sub_category: z.string().trim().optional(),
    interested_in: z.string().trim().optional(),

    company_certificates: z.string().trim().optional(),
    gst_certificate: z.string().trim().optional(),
    declaration_194q: z.string().trim().optional(),
    declaration_206ab: z.string().trim().optional(),
    authority_letter: z.string().trim().optional(),
    aadhar_card: z.string().trim().optional(),  
    cancel_cheque: z.string().trim().optional(),
    visiting_card: z.string().trim().optional(),
    office_photo: z.string().trim().optional(),

    primary_account_number: z.string().trim().optional(),
    primary_ifsc_code: z.string().trim().optional(),
    primary_bank_name: z.string().trim().optional(),
    primary_bank_verification_photo: z.string().trim().optional(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(companyFormSchema),
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
        <form onSubmit={handleSubmit(submitHandler)} className="">
          <div >
            <Typography variant="h6" sx={{fontSize: "1.2rem", mb:1.5, mt:1}} >Primary Information</Typography>
            <div className="grid grid-cols-3 gap-4 ">
              <FormControl fullWidth>
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
                <InputLabel id="status" size="small" required>
                  Status{" "}
                </InputLabel>
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
              <FormControl fullWidth error={!!errors.ownership}>
                <InputLabel size="small">Ownership Type</InputLabel>
                <Controller
                  name="ownership"
                  control={control}
                  render={({ field }) => (
                    <Select size="small" label="Ownership Type *" {...field}>
                      <MenuItem value="active">active</MenuItem>
                    </Select>
                  )}
                />
                <FormHelperText>{errors?.ownership?.message}</FormHelperText>
              </FormControl>
              <FormControl fullWidth error={!!errors.company_type}>
                <InputLabel size="small">Company Type </InputLabel>
                <Controller
                  name="company_type"
                  control={control}
                  render={({ field }) => (
                    <Select size="small" label="Company Type *" {...field}>
                      <MenuItem value="active">active</MenuItem>
                    </Select>
                  )}
                />
                <FormHelperText>{errors?.company_type?.message}</FormHelperText>
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="owner"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Owner Name"
                      {...field}
                      error={!!errors?.owner}
                      helperText={errors?.owner?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="establishment_year"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="number"
                      size="small"
                      label="Establishment Year"
                      {...field}
                      error={!!errors?.establishment_year}
                      helperText={errors?.establishment_year?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Country"
                      {...field}
                      error={!!errors?.country}
                      helperText={errors?.country?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="State"
                      {...field}
                      error={!!errors?.state}
                      helperText={errors?.state?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="City"
                      {...field}
                      error={!!errors?.city}
                      helperText={errors?.city?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="zip_postal_code"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="number"
                      size="small"
                      label="Zip/Postal Code"
                      {...field}
                      error={!!errors?.zip_postal_code}
                      helperText={errors?.zip_postal_code?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Address"
                      multiline
                      {...field}
                      error={!!errors?.address}
                      helperText={errors?.address?.message}
                    />
                  )}
                />
              </FormControl>
            </div>
            <br />

            <Typography variant="h6" sx={{fontSize: "1.2rem", mb:1.5, mt:1}} >Contact Information</Typography>
            <div className="grid grid-cols-3 gap-4 ">
              <FormControl fullWidth>
                <Controller
                  name="primary_email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="email"
                      size="small"
                      label="Primary Mail ID"
                      {...field}
                      error={!!errors?.primary_email}
                      helperText={errors?.primary_email?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="alternate_email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="email"
                      size="small"
                      label="Alternate Mail ID"
                      {...field}
                      error={!!errors?.alternate_email}
                      helperText={errors?.alternate_email?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="notification_email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="email"
                      size="small"
                      label="Notification Mail"
                      {...field}
                      error={!!errors?.notification_email}
                      helperText={errors?.notification_email?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="primary_contact_number"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="number"
                      size="small"
                      label="Primary Contact Number"
                      {...field}
                      error={!!errors?.primary_contact_number}
                      helperText={errors?.primary_contact_number?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="alternate_contact_number"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="number"
                      size="small"
                      label="Alternate Contact Number"
                      {...field}
                      error={!!errors?.alternate_contact_number}
                      helperText={errors?.alternate_contact_number?.message}
                    />
                  )}
                />
              </FormControl>
            </div>
            <br />

            <Typography variant="h6" sx={{fontSize: "1.2rem", mb:1.5, mt:1}} >Business Details</Typography>
            <div className="grid grid-cols-3 gap-4 ">
              <FormControl fullWidth>
                <Controller
                  name="primary_business_type"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Primary Business Type"
                      {...field}
                      error={!!errors?.primary_business_type}
                      helperText={errors?.primary_business_type?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="primary_business_category"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Primary Business Category"
                      {...field}
                      error={!!errors?.primary_business_category}
                      helperText={errors?.primary_business_category?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="sub_category"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Sub Category"
                      {...field}
                      error={!!errors?.sub_category}
                      helperText={errors?.sub_category?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <Controller
                  name="interested_in"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Interested In"
                      {...field}
                      error={!!errors?.interested_in}
                      helperText={errors?.interested_in?.message}
                    />
                  )}
                />
              </FormControl>
            </div>

          </div>
          <br />
          <div className="text-right">
            <Button variant="contained" type="submit">Save</Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default CompanyForm;
