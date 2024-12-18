import React, { useState, useEffect, useRef, useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { Navigate, Link, Outlet} from "react-router-dom";
import { LoginContext } from "../Store/Store";
import Canonical from "../components/Canonical";

const PricingTable = () => {
  const { state } = useContext(LoginContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [redirectTo, setRedirectTo] = useState(null); // State for redirection
  const autoSlideTimer = useRef(null);

  // Minimum swipe distance (in px) to trigger slide
  const minSwipeDistance = 50;

  const plans = [
    {
      name: "BRONZE",
      price: "5999",
      features: [
        "Get your profile boosted for higher visibility",
        "Filter matches by specific preferences",
        "Send messages after matching",
        "Engage in private video calls",
        "Access a community of verified profiles",
        "Receive faster responses from customer service",
        "suggest 100 profile",
        "deliver standard profiles",
      ],
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      hoverEffect: "hover:shadow-xl",
      included: [true, true, false, false, false, false, false, false],
    },
    {
      name: "SILVER",
      price: "8999",
      features: [
        "Suggest 500 profile",
        "Deliver high-class profiles",
        "Get your profile boosted for higher visibility",
        "Filter matches by specific preferences",
        "Send messages without matching",
        "Engage in private video calls(inc, semi-nude)",
        "Access a community of verified profiles",
        "Receive faster responses from customer service",
      ],
      bgColor: "bg-pink-400",
      textColor: "text-white",
      hoverEffect: "hover:shadow-xl",
      included: [true, true, true, true, true, false, false, false],
    },
    {
      name: "GOLD",
      price: "15999",
      features: [
        "Suggest 1000 profile",
        "Deliver premium profiles(well mentioned)",
        "Get your profile boosted for higher visibility",
        "Filter matches by specific preferences",
        "Send messages without matching",
        "Engage in private video calls(inc, full-nude)",
        "Access a community of verified profiles",
        "Receive faster responses from customer service",
      ],
      bgColor: "bg-pink-600",
      textColor: "text-white",
      hoverEffect: "hover:shadow-xl",
      included: [true, true, true, true, true, true, true, true],
    },
  ];

  const allFeatures = [
    "Get your profile boosted for higher visibility",
    "Filter matches by specific preferences",
    "Send messages after matching",
    "Engage in private video calls",
    "Access a community of verified profiles",
    "Receive faster responses from customer service",
    "Suggest 100 profile",
    "deliver standard profiles",
  ];

  const handleClick = (planName) => {
    console.log(planName);
    setRedirectTo(`/checkout?plan=${planName}`);
  };

  const onTouchStart = (e) => {
    clearInterval(autoSlideTimer.current);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeIndex < plans.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
        setIsAnimating(false);
      }, 300);
    }

    if (isRightSwipe && activeIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => prev - 1);
        setIsAnimating(false);
      }, 300);
    }

    // Reset touch coordinates
    setTouchStart(null);
    setTouchEnd(null);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideTimer.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % plans.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
  };

  // Auto-slide functionality
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideTimer.current);
  }, []);

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <>
    <Canonical />
    <Outlet />
    <div
      className="min-h-screen bg-gray-100 py-12 px-4 
    sm:px-6 lg:px-8 pt-[150px]"
    >
      <div
        className="flex flex-row-reverse flex-end justify-center 
      items-center px-5 gap-5 mb-3"
      >
        <button
          className="py-3 px-5 rounded-full text-white hover:bg-gradient-to-bl
        bg-gradient-to-tr from-pink-500 to-red-600 transition-all"
        >
          <Link className="font-bold" to="/withdraw">
            Withdraw
          </Link>
        </button>
        {state.user ? (
          <div className="text-nowrap">
            Total Money :{" "}
            <span className="text-red-700">{state.user.balance + "₹"}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="max-w-5xl mx-auto">
        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-3 gap-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${plan.bgColor} ${plan.textColor} rounded-lg p-6 transition-transform duration-300 transform ${plan.hoverEffect}`}
                onClick={() => handleClick(plan.name)}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold">
                    <span className="text-lg">₹</span>
                    {plan.price}
                  </div>
                </div>
                <div className="space-y-3">
                  {/* {allFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {plan.included[featureIndex] && (
                        <FaCheck className="mr-2" />
                      )}
                      <span
                        className={
                          !plan.included[featureIndex] ? "opacity-50" : ""
                        }
                        style={{ fontSize: "0.8rem" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))} */}
                  {plan.features.map((feature, featureIndex) => {
                    return (
                      <div className="flex items-center" key={featureIndex}>
                        <FaCheck className="mr-2" />
                        <span className="text-[0.9rem] italic">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View with Touch Carousel */}
        <div className="sm:hidden relative overflow-hidden">
          <div className="flex justify-center mb-4">
            {plans.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                  index === activeIndex ? "bg-blue-600 w-4" : "bg-blue-200"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div
            className="relative h-[600px] overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={`absolute w-full flex transition-transform duration-300 ease-in-out ${
                isAnimating ? "transition-all duration-300" : ""
              }`}
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 px-4 transition-all duration-300 ${
                    index === activeIndex
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-50"
                  }`}
                  onClick={() => handleClick(plan.name)}
                >
                  <div
                    className={`
                      ${plan.bgColor} 
                      ${plan.textColor} 
                      rounded-lg 
                      p-6 
                      transition-all 
                      duration-300 
                      transform 
                      ${index === activeIndex ? "shadow-2xl" : "shadow-md"}
                    `}
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold">
                        <span className="text-lg">₹</span>
                        {plan.price}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => {
                        return (
                          <div className="flex items-center" key={featureIndex}>
                            <FaCheck className="mr-2" />
                            <span className="text-[0.7rem] italic">{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PricingTable;
