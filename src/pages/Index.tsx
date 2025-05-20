
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CourseShowcase from "@/components/home/CourseShowcase";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <CourseShowcase />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
