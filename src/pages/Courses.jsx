import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="space-y-12">
      <HeroSection />
      <CoursesList setSelectedCourse={setSelectedCourse} />
      {selectedCourse && <CourseDetailsModal course={selectedCourse} />}
    </div>
  );
};

const HeroSection = () => (
  <section className="text-center">
    <h1 className="text-5xl font-bold">Explore Our Courses</h1>
    <p className="mt-4 text-2xl">Find the Right Course for You</p>
  </section>
);

const CoursesList = ({ setSelectedCourse }) => (
  <section className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
    {courses.map((course) => (
      <Card key={course.id}>
        <CardHeader>
          <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        </CardHeader>
        <CardContent>
          <CardTitle>{course.title}</CardTitle>
          <p>{course.description}</p>
          <DialogTrigger asChild>
            <button onClick={() => setSelectedCourse(course)} className="mt-4 text-primary">
              Learn More
            </button>
          </DialogTrigger>
        </CardContent>
      </Card>
    ))}
  </section>
);

const CourseDetailsModal = ({ course }) => (
  <Dialog open={true} onOpenChange={() => setSelectedCourse(null)}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{course.title}</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <p>{course.details}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Curriculum:</strong> {course.curriculum}</p>
        <p><strong>Eligibility:</strong> {course.eligibility}</p>
        <p><strong>Benefits:</strong> {course.benefits}</p>
        <button className="mt-4 text-primary">Sign Up</button>
      </div>
    </DialogContent>
  </Dialog>
);

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern web applications.",
    image: "/images/web-development.jpg",
    details: "This course covers HTML, CSS, JavaScript, and React.",
    duration: "12 weeks",
    curriculum: "HTML, CSS, JavaScript, React",
    eligibility: "Basic computer knowledge",
    benefits: "Job interview opportunities, Certification",
  },
  {
    id: 2,
    title: "Data Science",
    description: "Master data analysis and visualization.",
    image: "/images/data-science.jpg",
    details: "This course covers Python, Pandas, and data visualization.",
    duration: "10 weeks",
    curriculum: "Python, Pandas, Data Visualization",
    eligibility: "Basic programming knowledge",
    benefits: "Job interview opportunities, Certification",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Become an expert in online marketing strategies.",
    image: "/images/digital-marketing.jpg",
    details: "This course covers SEO, SEM, and social media marketing.",
    duration: "8 weeks",
    curriculum: "SEO, SEM, Social Media Marketing",
    eligibility: "Basic marketing knowledge",
    benefits: "Job interview opportunities, Certification",
  },
];

export default Courses;