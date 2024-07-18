import React, { useRef } from "react";
import SearchBar from "../components/SearchBar";
import { useAuth } from "../context/AuthContext";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation

const HomePage = () => {
  const { user } = useAuth();
  const sliderRef = useRef(null); // Ref for the Slider component

  // Check if user exists and is an employer
  const isEmployerLoggedIn = user && user.type === "employer";

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    fade: true,
    className: "slider",
  };

  // Function to go to the next slide
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Call slickNext method from the Slider component
    }
  };

  return (
    <div className="content-area">
      {!isEmployerLoggedIn && (
        <>
          <SearchBar />
          <div className="hero-section bg-blue-500 p-4 text-center text-white md:p-8">
            <Slider {...settings} ref={sliderRef}>
              <div className="flex h-60 flex-col items-center md:h-auto">
                <h1 className="mb-4 text-4xl font-bold">Find Your Dream Job</h1>
                <p className="text-lg">
                  Explore thousands of job opportunities across various
                  industries.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Link to="/jobseeker/signin" className="btn-primary">
                    Sign In as Job Seeker
                  </Link>
                  <Link to="/employer/signin" className="btn-secondary">
                    Sign In as Employer
                  </Link>
                </div>
              </div>
              <div className="flex h-60 flex-col items-center md:h-auto">
                <h1 className="mb-4 text-4xl font-bold">Join Top Companies</h1>
                <p className="text-lg">
                  Get hired by the best companies and build your career.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Link to="/jobseeker/signin" className="btn-primary">
                    Sign In as Job Seeker
                  </Link>
                  <Link to="/employer/signin" className="btn-secondary">
                    Sign In as Employer
                  </Link>
                </div>
              </div>
              <div className="flex h-60 flex-col items-center md:h-auto">
                <h1 className="mb-4 text-4xl font-bold">Boost Your Career</h1>
                <p className="text-lg">
                  Advance your career with our extensive job listings.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Link to="/jobseeker/signin" className="btn-primary">
                    Sign In as Job Seeker
                  </Link>
                  <Link to="/employer/signin" className="btn-secondary">
                    Sign In as Employer
                  </Link>
                </div>
              </div>
            </Slider>
            {/* Button to manually navigate to the next slide */}
            <button
              onClick={nextSlide}
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Next Slide
            </button>
          </div>
          <div className="features-section grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:p-8">
            <div className="feature-card transform rounded bg-white p-4 shadow transition-transform duration-500 hover:scale-105">
              <h2 className="mb-2 text-2xl font-bold">Easy to Use</h2>
              <p>
                Our platform is designed to be user-friendly and easy to
                navigate.
              </p>
            </div>
            <div className="feature-card transform rounded bg-white p-4 shadow transition-transform duration-500 hover:scale-105">
              <h2 className="mb-2 text-2xl font-bold">Wide Range of Jobs</h2>
              <p>Find job opportunities in various fields and locations.</p>
            </div>
            <div className="feature-card transform rounded bg-white p-4 shadow transition-transform duration-500 hover:scale-105">
              <h2 className="mb-2 text-2xl font-bold">Secure and Reliable</h2>
              <p>We ensure the security and reliability of our platform.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
