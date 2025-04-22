import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    { title: 'What People Say?', content: 'We got exactly what we wanted for a fair price and they’ve healed beautifully, so we 100% happy with our choice to use Ink and Iron' },
    { title: 'What People Say?', content: 'Clean Shop, great atmoshpere and custom service. I never felt uncomfortable and sometimes mid conversation with these awesome workers, I tend to forget i am getting tattooed' },
    { title: 'What People Say?', content: 'Very professional and knowledgeable! The staff go above and beyond to make you feel comfortable and accomodate' }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentTestimonial + 1) % testimonials.length;
      setCurrentTestimonial(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTestimonial, testimonials.length]);

  return (
    <div
      className="testimonial-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="testimonial-title">{testimonials[currentTestimonial].title}</div>
      <div className="testimonial-content">{testimonials[currentTestimonial].content}</div>
      {hovered && (
        <div className="testimonial-navigation">
          {/* Remove the arrow icons */}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
