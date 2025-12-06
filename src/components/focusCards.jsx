import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Admission",
      src: "/images/admission-grid.png",
      href: "/admission"
    },
    {
      title: "Campus",
      src: "/images/campus-grid.png",
      href: "/campus"
    },
    {
      title: "Careers",
      src: "/images/careers-grid.png",
      href: "/careers"
    },
    {
      title: "Courses",
      src: "/images/courses-grid.png",
      href: "/courses"
    },
    {
      title: "Faculty and Staff",
      src: "/images/faculty-grid.png",
      href: "/faculty-and-staff"
    },
    {
      title: "Facilities",
      src: "/images/facilities-grid.png",
      href: "/facilities"
    },
  ];

  return <FocusCards cards={cards} />;
}
