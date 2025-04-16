import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext"; // AuthContext এর প্রোভাইডার
import { ThemeProvider } from "./contexts/ThemeContext"; // ThemeContext এর প্রোভাইডার

import Home from "./Pages/Home";
import Details from "./components/Details/Details";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Login/Register";
import Dashboard from "./Dashboard/Dashboard";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import MyDonations from "./components/MyDonations/MyDonations";
import AllCampaigns from "./Pages/Campings/AllCampaigns";
import Mycamping from "./components/MyCamping/Mycamping";
import RunningCampaigns from "./components/RunningCampaigns/RunningCampaigns";
import CampaignDetails from "./Pages/Campings/CampaignDetails";
import UpdateCampaign from "./components/UpdateCampaign/UpdateCampaign";
import AddNewCampaign from "./Pages/Campings/AddNewCampaign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home Page
  },
  {
    path: "/home",
    element: <Home />, // Home Page
  },
  {
    path: "/allcamping",
    element: <AllCampaigns />, // All Campaign Page
  },
  {
    path: "/mycamping",
    element: (
      <PrivateRoute>
        <Mycamping />
      </PrivateRoute>
    ), // My Campaign Page
  },
  {
    path: "/my-donations",
    element: (
      <PrivateRoute>
        <MyDonations />
      </PrivateRoute>
    ), // My Donations Page
  },
  {
    path: "/running-campaigns",
    element: <RunningCampaigns />, // Running Campaigns Page
  },
  {
    path: "/campaign/:id",
    element: (
      <PrivateRoute>
        <CampaignDetails />
      </PrivateRoute>
    ), // Campaign Details Page
  },
  {
    path: "/updateCampaign/:id",
    element: (
      <PrivateRoute>
        <UpdateCampaign />
      </PrivateRoute>
    ), // Update Campaign Page
  },
  {
    path: "/AddNewCampaign",
    element: <AddNewCampaign />, // Add New Campaign Page
  },
  {
    path: "/campaigns/:id",
    element: (
      <PrivateRoute>
        <Details />
      </PrivateRoute>
    ), // Campaign Detail Page
  },
  {
    path: "/login",
    element: <Login />, // Login Page
  },
  {
    path: "/register",
    element: <Register />, // Register Page
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />, // Forgot Password Page
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ), // Dashboard Page
  },
  {
    path: "/update-profile",
    element: (
      <PrivateRoute>
        <UpdateProfile />
      </PrivateRoute>
    ), // Update Profile Page
  },
  {
    path: "*", // Invalid Routes
    element: <NotFound />, // 404 Page
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider> {/* ThemeProvider এখানে রাখা হয়েছে */}
      <AuthProvider> {/* AuthProvider এর ভেতরে */}
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
