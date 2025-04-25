import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Hanna Lisem",
    role: "Project Manager",
    image: "https://assets.goal.com/images/v3/blte3a1144221f24e2e/e1bcc3a821bfff285d68586b8ae436ffc75b5f95.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    comment:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
  },
  {
    name: "Ronne Galle",
    role: "Project Manager",
    image: "https://assets.goal.com/images/v3/blte3a1144221f24e2e/e1bcc3a821bfff285d68586b8ae436ffc75b5f95.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    comment:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
  },
  {
    name: "Missy Limana",
    role: "Engineer",
    image: "https://assets.goal.com/images/v3/blte3a1144221f24e2e/e1bcc3a821bfff285d68586b8ae436ffc75b5f95.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    comment:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
  },
  {
    name: "Alex Jonne",
    role: "Designer",
    image: "https://assets.goal.com/images/v3/blte3a1144221f24e2e/e1bcc3a821bfff285d68586b8ae436ffc75b5f95.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    comment:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
  },
  {
    name: "Lina Weston",
    role: "Developer",
    image: "https://assets.goal.com/images/v3/blte3a1144221f24e2e/e1bcc3a821bfff285d68586b8ae436ffc75b5f95.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    comment:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 3; // Large screens
      if (window.innerWidth >= 768) return 2; // Medium screens 
      return 1; // Small screens
    }
    return 1;
  };

  const visibleCards = getVisibleCards();
  const half = Math.floor(visibleCards / 2);

  return (
    <div className="flex flex-col items-center justify-center w-full px-8 py-8  bg-white ">
      <div className="text-center mb-12">
        <h1 className=" text-[23px] sm:text-[35px] md:text-[40px] font-extrabold font-playfair leading-snug tracking-tight text-gray-900">
          What Clients Say
        </h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={cardContainerRef}
          className="flex gap-6 justify-center transition-all duration-700"
        >
          {testimonials.map((t, i) => {
            const position = (i - activeIndex + testimonials.length) % testimonials.length;
            const isCenter = position === 0 || (visibleCards > 1 && position === half);
            const isVisible = position < visibleCards;

            return (
              <motion.div
                key={i}
                className={cn(
                  "transition-opacity duration-500 ease-in-out flex-shrink-0",
                  visibleCards === 1 ? "w-full" : visibleCards === 2 ? "w-1/2" : "w-1/4",
                  isVisible ? "block" : "hidden"
                )}
              >
                <Card
                  className={cn(
                    "text-center py-6 px-4 transition-all duration-500 relative", 
                    isCenter ? "opacity-100 scale-100" : "opacity-60 scale-95",
                    "h-80" // Increased the height of the card
                  )}
                >
                  <div
                    className="absolute top-0 left-0 w-15 h-20 bg-green-700 rounded-br-full font-extrabold text-white text-4xl text-center items-center justify-center flex"
                    aria-hidden="true"
                  >&#10075;</div>
                  <CardContent className="flex flex-col items-center h-full justify-evenly">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={t.image} alt={t.name} className="object-cover"/>
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-sky-600 font-semibold text-lg">{t.name}</div>
                    <p className="text-muted-foreground italic text-sm max-w-md overflow-hidden text-ellipsis">
                      “ {t.comment} ”
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-3 w-3 rounded-full cursor-pointer transition-all",
                i === activeIndex ? "bg-sky-600 scale-110" : "bg-gray-300"
              )}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}