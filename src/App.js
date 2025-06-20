import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Depression from "./components/Depression";
import Anxiety from "./components/Anxiety";
import Stress from "./components/Stress";
import SelfLove from "./components/SelfLove";
import Quote from "./components/Quote";
import Quote1 from "./components/Quote1";
import Blogs2 from "./components/Blogs2";
import MentalHealthArticle from "./components/MentalHealthArticle";
import PageLayout from "./components/PageLayout";
import ScrollToTop from "./components/ScrollToTop";
import DiscoverHope from "./components/DiscoverHope";
import SelfLoveBlog from "./components/SelfLoveBlog";
import SelfCareTips from "./components/SelfCareTips";
import SignUp from "./components/SignUp";
import ChatBot from "./components/Chatbot"; // ✅ Make sure this file includes createChat logic

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Categories />
              <Quote1 />
              <FeatureSection />
              <Blogs2 />
              <Quote />
            </PageLayout>
          }
        />
        <Route
          path="/depression"
          element={
            <PageLayout>
              <Depression />
              <DiscoverHope />
            </PageLayout>
          }
        />
        <Route
          path="/anxiety"
          element={
            <PageLayout>
              <Anxiety />
            </PageLayout>
          }
        />
        <Route
          path="/stress"
          element={
            <PageLayout>
              <Stress />
            </PageLayout>
          }
        />
        <Route
          path="/selflove"
          element={
            <PageLayout>
              <SelfLove />
            </PageLayout>
          }
        />
        <Route
          path="/mentalhealtharticle"
          element={
            <PageLayout>
              <MentalHealthArticle />
            </PageLayout>
          }
        />
        <Route
          path="/selfloveblog"
          element={
            <PageLayout>
              <SelfLoveBlog />
            </PageLayout>
          }
        />
        <Route
          path="/selfcaretips"
          element={
            <PageLayout>
              <SelfCareTips />
            </PageLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <PageLayout>
              <SignUp />
            </PageLayout>
          }
        />
        <Route
          path="/chatbot"
          element={
            <PageLayout>
              <ChatBot />
            </PageLayout>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
