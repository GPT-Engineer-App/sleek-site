import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { testimonials } from "@/data/testimonials";

const Index = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <CoursesOverview />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
    <h1 className="text-5xl font-bold text-white">Unlock Your Future with Free Government Funded Courses</h1>
    <p className="mt-4 text-2xl text-white">Guaranteed Job Interviews Upon Completion</p>
    <Button variant="primary" size="lg" className="mt-8">Get Started</Button>
  </section>
);

const CoursesOverview = () => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">Our Courses</h2>
    <p className="mt-2 text-lg">Explore our range of courses designed to help you succeed.</p>
    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
          </CardHeader>
          <CardContent>
            <CardTitle>{course.title}</CardTitle>
            <p>{course.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    <Button variant="outline" className="mt-8">View All Courses</Button>
  </section>
);

const HowItWorks = () => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">How It Works</h2>
    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-col items-center">
          <img src={step.icon} alt={step.title} className="w-16 h-16" />
          <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
          <p className="mt-2">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">Testimonials</h2>
    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id}>
          <CardHeader>
            <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
          </CardHeader>
          <CardContent>
            <CardTitle>{testimonial.name}</CardTitle>
            <p>{testimonial.story}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern web applications.",
    image: "/images/web-development.jpg",
  },
  {
    id: 2,
    title: "Data Science",
    description: "Master data analysis and visualization.",
    image: "/images/data-science.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Become an expert in online marketing strategies.",
    image: "/images/digital-marketing.jpg",
  },
];

const steps = [
  {
    id: 1,
    title: "Apply",
    description: "Submit your application to enroll in our courses.",
    icon: "/icons/apply.svg",
  },
  {
    id: 2,
    title: "Learn",
    description: "Attend classes and complete assignments.",
    icon: "/icons/learn.svg",
  },
  {
    id: 3,
    title: "Get Hired",
    description: "Receive job interview opportunities upon completion.",
    icon: "/icons/get-hired.svg",
  },
];

export default Index;