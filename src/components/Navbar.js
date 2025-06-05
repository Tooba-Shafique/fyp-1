import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle Navbar on Mobile
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Handle Dropdown (Click instead of Hover)
  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Change Navbar Style on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navbar Items
  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Mental Diseases",
      href: "/categories",
      dropdown: [
        { label: "Depression", href: "/depression" },
        { label: "Anxiety", href: "/anxiety" },
        { label: "Stress", href: "/stress" },
      ],
    },
    { label: "Selfcare", href: "/selflove" },
    {
      label: "Blogs",
      href: "/blogs2",
      dropdown: [
        { label: "Mental Health ", href: "/mentalhealtharticle" },
        { label: "Building Self Love", href: "/selfloveblog" },
        { label: "Self Care Tips", href: "/selfcaretips" },
      ],
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-5 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className={`text-4xl tracking-wide font-extrabold flex items-center transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
              <span className="text-sky-600">C</span>OGNI
              <span className="text-orange-500 italic">CARE</span>
            </span>
          </div>

          {/* Desktop Navbar */}
          <ul className={`hidden lg:flex ml-14 space-x-12 transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center cursor-pointer hover:text-orange-500 focus:outline-none"
                      onClick={() => handleDropdown(index)}
                    >
                      {item.label}
                      <ChevronDown className="ml-2" size={16} />
                    </button>

                    {openDropdown === index && (
                      <ul className="absolute left-0 top-8 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-300">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              onClick={() => setOpenDropdown(null)} // Close dropdown after clicking
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative hover:after:w-full after:w-0 after:h-[2px] after:bg-orange-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 ${isScrolled ? "text-black" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
  <Link
    to="/signup" // <-- Link to signup page
    className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white hover:opacity-90 transition-all"
  >
    Sign Up
  </Link>
  <Link
    to="/login" // <-- Link to login page
    className="bg-gradient-to-r from-sky-400 to-sky-600 py-2 px-4 rounded-md text-white hover:opacity-90 transition-all"
  >
    Login
  </Link>
</div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
            <button onClick={toggleNavbar} className="absolute top-5 right-5">
              <X size={30} />
            </button>
            <ul className="text-center text-gray-800 text-lg">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdown(index)}
                        className="flex items-center justify-center w-full"
                      >
                        {item.label} <ChevronDown className="ml-2" size={16} />
                      </button>
                      {openDropdown === index && (
                        <ul className="mt-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex} className="py-2">
                              <Link to={subItem.href} onClick={toggleNavbar}>
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={item.href} onClick={toggleNavbar}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
