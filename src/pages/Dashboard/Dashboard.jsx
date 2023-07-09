import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {
  LineChart,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
} from 'recharts';

const Dashboard = () => {
  // Sample data for the graphs and table
  const recentActivitiesData = [
    {name: 'Activity 1', value: 10},
    {name: 'Activity 2', value: 20},
    {name: 'Activity 3', value: 15},
    // Add more data as needed
  ];

  const tradeTrendsData = [
    {name: 'Jan', value: 1000},
    {name: 'Feb', value: 1500},
    {name: 'Mar', value: 1200},
    // Add more data as needed
  ];

  const inventoryData = [
    {name: 'Item 1', availableItems: 5, totalPrice: 100},
    {name: 'Item 2', availableItems: 10, totalPrice: 200},
    {name: 'Item 3', availableItems: 8, totalPrice: 150},
    // Add more data as needed
  ];

  // Calculate the sum of total inventories
  const totalInventorySum = inventoryData.reduce(
    (sum, item) => sum + item.totalPrice,
    0,
  );

  return (
    <div>
      <Grid container spacing={2}>
        {/* Widgets */}
        <Grid item xs={4}>
          <Typography variant="h6">Total Inventory: X</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Last Activity: Y</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">No. of Transactions: Z</Typography>
        </Grid>

        {/* Graphs */}
        <Grid item xs={6}>
          <Typography variant="h6">Recent Activities</Typography>
          <LineChart width={500} height={300} data={recentActivitiesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Trade Trends</Typography>
          <BarChart width={500} height={300} data={tradeTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </Grid>

        {/* Table */}
        <Grid item xs={12}>
          <Typography variant="h6">Total Available Inventories</Typography>
          <table>
            <thead>
              <tr>
                <th>Inventory Name</th>
                <th>No. of Available Items</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.availableItems}</td>
                  <td>{item.totalPrice}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Sum of Total Inventories:</td>
                <td>{totalInventorySum}</td>
              </tr>
            </tfoot>
          </table>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
