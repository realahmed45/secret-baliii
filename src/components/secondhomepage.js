import React, { useState } from "react";
import Navbar from "./navbar";
import bottomImage from "../images/bottom-image.png";
import backgroundImage from "../images/home-banner.png";
import TestimonialsSection from "./testimonials";
import { useNavigate } from "react-router-dom";
import BookingCalendar from "./calender"; // Correct the import path if needed

import Footer from "./footer";
import {
  FaMapMarkerAlt,
  FaSuitcase,
  FaShoppingCart,
  FaUtensils,
  FaInfinity,
  FaWater,
  FaCalendarAlt,
  FaUser,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaBuilding,
  FaHome,
  FaBed,
  FaSearch,
  FaUmbrellaBeach,
} from "react-icons/fa";

// Import property images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";

const Homepage = () => {
  const navigate = useNavigate();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev);
  const toggleGuestSelector = () => setIsGuestSelectorOpen((prev) => !prev);

  const propertyCategories = [
    { name: "Apartments", icon: <FaBuilding /> },
    { name: "Bungalows", icon: <FaHome /> },
    { name: "Cabins", icon: <FaHome /> },
    { name: "Condos", icon: <FaBuilding /> },
    { name: "Villas", icon: <FaHome /> },
    { name: "Entire Home", icon: <FaHome /> },
    { name: "Private Room", icon: <FaBed /> },
    { name: "Beachfront", icon: <FaUmbrellaBeach /> },
  ];

  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0]);

  const properties = [
    {
      id: 1,
      images: [image1, image2],
      tags: ["Featured", "For Sale"],
      title: "Private room in guesthouse in Kecamatan Kuta, Indonesia",
      type: "House · Private room",
      guests: "2 Guests · 1 Bedroom · 1 Bathroom",
      price: "$89/night",
    },
    {
      id: 2,
      images: [image3, image4],
      tags: ["Featured", "For Rent"],
      title: "Room in Kecamatan Kuta, Indonesia",
      type: "House · Private room",
      guests: "2 Guests · 1 Bedroom · 1 Bathroom",
      price: "$88/night",
    },
    {
      id: 3,
      images: [image5, image6],
      tags: ["Featured", "For Rent"],
      title: "Room in Kecamatan Kuta, Indonesia",
      type: "House · 2 Bedrooms · 1 Bathroom",
      guests: "4 Guests · 2 Bedrooms · 1 Bathroom",
      price: "$155/night",
    },
    {
      id: 4,
      images: [image7, image8],
      tags: ["Featured", "For Rent"],
      title: "Private room in guesthouse in Kecamatan Kuta, Indonesia",
      type: "House · Shared room",
      guests: "4 Guests · 1 Bedroom · 1 Bathroom",
      price: "$117/night",
    },
  ];

  const routes = ["/property-1", "/property-2", "/property-3", "/property-4"];

  const toggleImage = (index) => {
    setCurrentImages((prev) => {
      const newImages = [...prev];
      newImages[index] = newImages[index] === 0 ? 1 : 0;
      return newImages;
    });
  };

  return (
    <div className="relative w-full h-screen ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative lg:w-[85%] mt-0 h-[40%] bg-cover bg-center mx-auto border-[5px] border-white rounded-[20px] ">
        {/* Search Bar for larger screens */}
        <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 bg-[#e0dcd4] shadow-lg rounded-lg p-2 hidden md:block">
          <div className="flex items-center justify-between space-x-4">
            {/* Check-In Field */}
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleCalendar}
              >
                <FaCalendarAlt className="text-[#e09c34]" />
                <p className="text-gray-600">Add Dates</p>
              </div>
              {isCalendarOpen && (
                <div className="absolute top-full mt-2 bg-white border shadow-lg rounded-lg p-4">
                  <label className="block mb-2 text-sm font-semibold text-gray-600">
                    Check-In Date:
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#e09c34]"
                  />
                  <label className="block mb-2 text-sm font-semibold text-gray-600">
                    Check-Out Date:
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#e09c34]"
                  />
                </div>
              )}
            </div>

            {/* Guests Field */}
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleGuestSelector}
              >
                <FaUser className="text-[#e09c34]" />
                <p className="text-gray-600">Add Guests</p>
              </div>
              {isGuestSelectorOpen && (
                <div className="absolute top-full mt-2 bg-white border shadow-lg rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-gray-600">
                      Adults <span className="text-xs">(13+ years)</span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            adults: Math.max(0, prev.adults - 1),
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <span>{guests.adults}</span>
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            adults: prev.adults + 1,
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-gray-600">
                      Children <span className="text-xs">(2-12 years)</span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            children: Math.max(0, prev.children - 1),
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <span>{guests.children}</span>
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            children: prev.children + 1,
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-semibold text-gray-600">
                      Infants <span className="text-xs">(Under 2 years)</span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            infants: Math.max(0, prev.infants - 1),
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <span>{guests.infants}</span>
                      <button
                        onClick={() =>
                          setGuests((prev) => ({
                            ...prev,
                            infants: prev.infants + 1,
                          }))
                        }
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-[#e09c34] font-semibold"
                    onClick={toggleGuestSelector}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center bg-[#e09c34] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#d89332] focus:outline-none focus:ring-2 focus:ring-[#e09c34]"
            >
              <FaSearch className="mr-2" />
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar  for smaller screens */}
      <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 bg-[#e0dcd4] shadow-lg rounded-lg p-4 sm:hidden mb-28">
        <div className="flex flex-col space-y-4">
          {/* Check-In Field */}
          <div
            className="flex items-center space-x-4 p-2 border rounded-lg cursor-pointer"
            onClick={toggleCalendar}
          >
            <FaCalendarAlt className="text-[#e09c34]" />
            <p className="text-gray-600">Add Dates</p>
          </div>
          {isCalendarOpen && (
            <div className="p-4 bg-white border shadow-lg rounded-lg">
              <label className="block mb-2 text-sm font-semibold text-gray-600">
                Check-In Date:
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#e09c34]"
              />
              <label className="block mb-2 text-sm font-semibold text-gray-600">
                Check-Out Date:
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#e09c34]"
              />
            </div>
          )}

          {/* Guests Field */}
          <div
            className="flex items-center space-x-4 p-2 border rounded-lg cursor-pointer"
            onClick={toggleGuestSelector}
          >
            <FaUser className="text-[#e09c34]" />
            <p className="text-gray-600">Add Guests</p>
          </div>
          {isGuestSelectorOpen && (
            <div className="p-4 bg-white border shadow-lg rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-semibold text-gray-600">
                  Adults <span className="text-xs">(13+ years)</span>
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        adults: Math.max(0, prev.adults - 1),
                      }))
                    }
                    className="bg-gray-200 px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span>{guests.adults}</span>
                  <button
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        adults: prev.adults + 1,
                      }))
                    }
                    className="bg-gray-200 px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-semibold text-gray-600">
                  Children <span className="text-xs">(2-12 years)</span>
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        children: Math.max(0, prev.children - 1),
                      }))
                    }
                    className="bg-gray-200 px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span>{guests.children}</span>
                  <button
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        children: prev.children + 1,
                      }))
                    }
                    className="bg-gray-200 px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-semibold text-gray-600">
                  Infants <span className="text-xs">(Under 2 years)</span>
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        infants: Math.max(0, prev.infants - 1),
                      }))
                    }
                    className="bg-gray-200 px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span>{guests.infants}</span>
                  <button
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        infants: prev.infants + 1,
                      }))
                    }
                    className="bg-gray-200 px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="text-[#e09c34] font-semibold"
                onClick={toggleGuestSelector}
              >
                Close
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center bg-[#e09c34] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#d89332] focus:outline-none focus:ring-2 focus:ring-[#e09c34]"
          >
            <FaSearch className="mr-2" />
            Check Availability
          </button>
        </div>
      </div>

      {/* Property Section */}
      <div className="bg-white py-10 mt-12">
        {/* Section Title */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase text-1xl tracking-wide text-gray-600 font-semibold ">
            The properties for your next vacation
          </p>
          <h2 className="text-2xl font-semibold text-[#e09c34] mt-4 ">
            Savor An Unforgettable Secret Home Bali
          </h2>
        </div>

        {/* Property Categories */}
        <div className="flex flex-wrap justify-center gap-6 mt-3">
          {propertyCategories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center space-y-2 cursor-pointer hover:text-border border-gray-200 rounded-lg transition-all duration-200 mt-3 mb-10"
            >
              <div className="text-2xl">{category.icon}</div>
              <p className="text-sm font-small text-gray-600">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* Property Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-24">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(routes[index])} // Navigate to the respective route
            >
              {/* Image Slider */}
              <div className="relative">
                <img
                  src={property.images[currentImages[index]]}
                  alt={property.title}
                  className="w-full h-56 object-cover border rounded-sm"
                />
                <button className="absolute top-2 left-2 bg-yellow-500 text-white text-xs py-1 px-2 rounded-md">
                  {property.tags[0]}
                </button>
                <button className="absolute top-2 right-2 bg-gray-900 text-white text-xs py-1 px-2 rounded-md">
                  {property.tags[1]}
                </button>
                <button
                  className="absolute bottom-2 left-2 bg-white p-1 rounded-full shadow"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation when toggling images
                    toggleImage(index);
                  }}
                >
                  <FaChevronLeft className="text-black" />
                </button>
                <button
                  className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation when toggling images
                    toggleImage(index);
                  }}
                >
                  <FaChevronRight className="text-black" />
                </button>
              </div>

              {/* Property Details */}
              <div className="p-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">{property.title}</h3>
                  <button className="text-gray-500 hover:text-red-500">
                    <FaHeart />
                  </button>
                </div>
                <p className="text-xs text-gray-600">{property.type}</p>
                <p className="text-xs text-gray-600">{property.guests}</p>
                <p className="text-md font-normal text-[#e09c34] mt-2">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* New Section: What To Expect From Our Properties */}
        <div className="py-24 bg-white">
          <h1 className="text-center text-1xl lg:text-1x1 font-normal text-black mb-2">
            WHY CHOOSE US
          </h1>
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-[#e09c34] mb-0">
            What To Expect From Our Properties
          </h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16 ">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between mt-8 lg: h-36 ">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#b98d1c] text-1xl mr-2" />
                <h3 className="text-lg font-normal text-[#b98d1c]">
                  Exceptional Location
                </h3>
              </div>
              <p className="text-gray-700 text-sm mb-3  text-left ml-7">
                Nestled in a serene part of Bali, our villa offers a tranquil
                escape while being just a short drive from vibrant local
                attractions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between mt-8 lg: h-36 ">
              <div className="flex items-center">
                <FaSuitcase className="text-[#b98d1c] text-1xl mr-2" />
                <h3 className="text-lg font-normal text-[#b98d1c]">
                  Tailored Packages
                </h3>
              </div>
              <p className="text-gray-700 text-sm mt-0 text-left ml-7">
                Choose from our diverse packages designed to suit various needs,
                from adventurous getaways to self-healing retreats. Each package
                is thoughtfully crafted to offer maximum value and an
                unforgettable experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-2 flex flex-col justify-between mt-8 lg: h-36 ">
              <div className="flex items-center">
                <FaShoppingCart className="text-[#b98d1c] text-1xl mr-2" />
                <h3 className="text-lg font-normal text-[#b98d1c]">
                  Luxurious Accommodations
                </h3>
              </div>
              <p className="text-gray-700 text-sm mt-0 text-left ml-7">
                Our villa features beautifully designed rooms with modern
                amenities and a touch of elegance. Each room is equipped with
                air conditioning, en-suite bathrooms, and stunning views,
                ensuring a comfortable and luxurious stay.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between mt-8 lg: h-36 ">
              <div className="flex items-center">
                <FaInfinity className="text-[#b98d1c] text-1xl mr-2" />
                <h3 className="text-lg font-normal text-[#b98d1c]">
                  Commitment to Excellence
                </h3>
              </div>
              <p className="text-gray-700 text-sm mt-1 text-left ml-7">
                Our commitment to providing a superior guest experience is
                reflected in everything we do. We continuously strive to exceed
                your expectations and make your stay with us truly
                unforgettable.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between mt-8 lg: h-36 ">
              <div className="flex items-center">
                <FaWater className="text-[#b98d1c] text-1xl mr-2" />
                <h3 className="text-lg font-normal text-[#b98d1c]">
                  Stunning Amenities
                </h3>
              </div>
              <p className="text-gray-700 text-sm mt-1 text-left ml-7">
                Take advantage of our private pool, lush gardens, and fully
                equipped kitchen. Whether you want to relax by the pool, cook a
                meal, or simply unwind in our cozy living areas, our villa has
                everything you need.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between mt-8 lg: h-36 ">
              <div className="flex items-center">
                <FaUtensils className="text-[#b98d1c] text-1xl mr-2" />
                <h3 className="text-lg font-normal text-[#b98d1c]">
                  Culinary Delights
                </h3>
              </div>
              <p className="text-gray-700 text-sm mt-1 text-left ml-7">
                Savor delicious meals prepared by our talented chefs, with
                options tailored to your preferences. From local delicacies to
                international cuisine, we ensure every meal is a delightful
                experience.
              </p>
            </div>
          </div>
        </div>
        <BookingCalendar />
        {/* Bottom Image */}
        <div className="lg:w-[90%] h-[40%] mt-20 grid place-items-center lg:ml-20 ml-0">
          <a href="/home-page" target="_blank" rel="noopener noreferrer">
            <img
              src={bottomImage}
              alt="Bottom Decorative"
              className="w-full object-cover"
            />
          </a>
        </div>

        <TestimonialsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
