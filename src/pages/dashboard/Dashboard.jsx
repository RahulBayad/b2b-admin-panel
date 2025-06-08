import React from 'react';
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { BarChart, PieChart, LineChart, barElementClasses, pieArcLabelClasses } from '@mui/x-charts';
import { Link } from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { DataTable } from '../../components/ui/DataTable';

// Sample data
const offerDemandData = [
  { name: 'iPhones', offers: 400, demands: 240 },
  { name: 'Laptops', offers: 300, demands: 200 },
  { name: 'Tablets', offers: 200, demands: 180 },
  { name: 'Accessories', offers: 150, demands: 120 },
];

const topCompaniesData = [
  { id: 0, value: 350, label: 'TechTrend Innovations' },
  { id: 1, value: 280, label: 'GadgetZone Ltd' },
  { id: 2, value: 200, label: 'MobileMart' },
  { id: 3, value: 150, label: 'ElectroHub' },
];

const topProductsData = [
  { id: 0, value: 500, label: 'iPhones' },
  { id: 1, value: 320, label: 'Laptops' },
  { id: 2, value: 180, label: 'Tablets' },
  { id: 3, value: 100, label: 'Accessories' },
];

const traderActivityData = [
  { date: '2025-06-01', offers: 50, demands: 30 },
  { date: '2025-06-02', offers: 60, demands: 40 },
  { date: '2025-06-03', offers: 55, demands: 35 },
  { date: '2025-06-04', offers: 70, demands: 50 },
  { date: '2025-06-05', offers: 65, demands: 45 },
];

const categoryDistributionData = [
  { id: 0, value: 40, label: 'Electronics' },
  { id: 1, value: 30, label: 'Accessories' },
  { id: 2, value: 20, label: 'Components' },
  { id: 3, value: 10, label: 'Others' },
];

const recentTransactions = [
  { id: 1, trader: 'TechTrend Innovations', product: '500 iPhones', type: 'Offer', quantity: 500, status: 'Pending' },
  { id: 2, trader: 'GadgetZone Ltd', product: '300 Laptops', type: 'Demand', quantity: 300, status: 'Approved' },
  { id: 3, trader: 'MobileMart', product: '200 Tablets', type: 'Offer', quantity: 200, status: 'Rejected' },
];

const columns = [
  { field : "trader", headerName : "Member" },
  { field : "product", headerName : "Product" },
  { field : "type", headerName : "Type" },
  { field : "quantity", headerName : "Quantity" },
  { field : "status", headerName : "Status" },
]

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Typography variant="h5" className=" text-gray-800" sx={{mb:1}}>
        Dashboard
      </Typography>

      {/* Metrics Cards */}
      <Grid container spacing={2} className="mb-6">
        <Grid size={{md : 3}}>
          <Card className="shadow-lg">
            <CardContent className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <ThumbUpAltIcon className="text-blue-500" />
              </div>
              <div>
                <Typography variant="" className="text-gray-600">Total Leads</Typography>
                <Typography variant="h4" className="font-bold text-blue-500">1,234</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{md : 3}}>
          <Card className="shadow-lg">
            <CardContent className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <ThumbUpAltIcon className="text-green-500" />
              </div>
              <div>
                <Typography variant="" className="text-gray-600">Active Leads</Typography>
                <Typography variant="h4" className="font-bold text-green-500">567</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{md : 3}}>
          <Card className="shadow-lg">
            <CardContent className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-full mr-4">
                <ThumbUpAltIcon className="text-yellow-500" />
              </div>
              <div>
                <Typography variant="" className="text-gray-600">New Leads Today</Typography>
                <Typography variant="h4" className="font-bold text-yellow-500">432</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{md : 3}}>
          <Card className="shadow-lg">
            <CardContent className="flex items-center">
              <div className="bg-teal-100 p-2 rounded-full mr-4">
                <ThumbUpAltIcon className="text-teal-500" />
              </div>
              <div>
                <Typography variant="" className="text-gray-600">Successful Leads</Typography>
                <Typography variant="h4" className="font-bold text-teal-500">1,120</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} className="mb-6">
        {/* Offers vs Demands */}
        <Grid item size={{md : 6}} sx={{height:"100%"}}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" className="mb-4 text-gray-800">Offers vs Demands</Typography>
              <BarChart
                dataset={offerDemandData}
                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                series={[
                  { dataKey: 'offers', label: 'Offers', color: '#4f46e5' },
                  { dataKey: 'demands', label: 'Demands', color: '#10b981' },
                ]}
                height={300}
                sx={{
                  [`& .${barElementClasses.root}`]: {
                    fillOpacity: 0.8,
                  },
                }}
                tooltip={{ trigger: 'item' }}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Top Companies */}
        <Grid item size={{md:6}}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" className="mb-4 text-gray-800">Top Companies by Transactions</Typography>
              <PieChart
                series={[
                  {
                    data: topCompaniesData,
                    innerRadius: 50,
                    outerRadius: 120,
                    paddingAngle: 3,
                    cornerRadius: 8,
                    arcLabel: (item) => `${item.value}`,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' },
                  },
                ]}
                height={300}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px',
                  },
                }}
                slotProps={{
                  legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    padding: 0,
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Top Products */}
        <Grid item size={{md:6}}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" className="mb-4 text-gray-800">Top Products by Quantity</Typography>
              <BarChart
                dataset={topProductsData}
                xAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                series={[{ dataKey: 'value', label: 'Quantity', color: '#ef4444' }]}
                height={300}
                sx={{
                  [`& .${barElementClasses.root}`]: {
                    fillOpacity: 0.9,
                    stroke: '#fff',
                    strokeWidth: 1,
                  },
                }}
                tooltip={{ trigger: 'item' }}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Trader Activity */}
        <Grid item size={{md:6}}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" className="mb-4 text-gray-800">Trader Activity (Last 5 Days)</Typography>
              <LineChart
                dataset={traderActivityData}
                xAxis={[{ dataKey: 'date', scaleType: 'point' }]}
                series={[
                  { dataKey: 'offers', label: 'Offers', color: '#4f46e5' },
                  { dataKey: 'demands', label: 'Demands', color: '#10b981' },
                ]}
                height={300}
                tooltip={{ trigger: 'item' }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Product Category Distribution */}
        <Grid item size={{md:5}}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" className="mb-4 text-gray-800">Product Category Distribution</Typography>
              <PieChart
                series={[
                  {
                    data: categoryDistributionData,
                    innerRadius: 50,
                    outerRadius: 120,
                    paddingAngle: 3,
                    cornerRadius: 8,
                    arcLabel: (item) => `${item.label} (${item.value}%)`,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' },
                  },
                ]}
                height={300}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px',
                  },
                }}
                slotProps={{
                  legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    padding: 0,
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid container size={{md:7}}>
          <Grid item xs={12}>
            <Card className="shadow-lg">
              <CardContent>
                <Typography variant="h6" className="mb-4 text-gray-800">Recent Transactions</Typography>
                <DataTable sx={{mt:2}} columns={columns} showPagination={false} data={recentTransactions} showToolbar={false} hideFooter={true}/>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Recent Transactions Table */}
    </div>
  );
};

export default Dashboard;