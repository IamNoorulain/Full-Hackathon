import Link from "next/link";
import { FaFacebook } from "react-icons/fa"
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#EEEFFB] h-auto sm:h-[500px] md:h-[500px] py-8 text-[#8A8FB9] items-center">

        <div className="container mx-auto px-12 items-center">

          <div className="mt-[94px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left lg:text-left">
            <div className="mt-2 sm:mt-0">

              <Link href="/" className="text-2xl font-bold text-black">
                Hekto
              </Link>
              <div className="mt-4 flex items-center gap-x-2 justify-center sm:justify-start">


                <div className="flex w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">

                  <input
                    type="search"
                    className="w-2/3 h-12 px-4 text-gray-700 bg-white border-none outline-none placeholder-gray-400"
                    placeholder="Search"
                  />

                  <button className="w-1/3 h-12 bg-[#FB2E86] text-white font-medium hover:bg-[#e12b77] transition duration-300">
                    Sign Up
                  </button>
                </div>

              </div>

              <p className="mt-4 text-xs leading-4 text-center sm:text-left">
                Contact Info: <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Categories</h3>
              <ul className="mt-2 space-x-0 md:space-y-5 md:mb-6  text-sm ">
                <li className="cursor-pointer hover:text-pink-500">Laptops & Computers</li>
                <li className="cursor-pointer hover:text-pink-500">Cameras & Photography</li>
                <li className="cursor-pointer hover:text-pink-500">Smart Phones & Tablets</li>
                <li className="cursor-pointer hover:text-pink-500">Video Games & Consoles</li>
                <li className="cursor-pointer hover:text-pink-500">Waterproof Headphones</li>
              </ul>
            </div>


            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Customer Care</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="cursor-pointer hover:text-pink-500">My Account</li>
                <li className="cursor-pointer hover:text-pink-500">Discount</li>
                <li className="cursor-pointer hover:text-pink-500">Returns</li>
                <li className="cursor-pointer hover:text-pink-500">Orders History</li>
                <li className="cursor-pointer hover:text-pink-500">Order Tracking</li>
              </ul>
            </div>


            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Pages</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="cursor-pointer hover:text-pink-500">Blog</li>
                <li className="cursor-pointer hover:text-pink-500">Browse the Shop</li>
                <li className="cursor-pointer hover:text-pink-500">Category</li>
                <li className="cursor-pointer hover:text-pink-500">Pre-Built Pages</li>
                <li className="cursor-pointer hover:text-pink-500">Visual Composer Elements</li>
                <li className="cursor-pointer hover:text-pink-500">WooCommerce Pages</li>
              </ul>
            </div>
          </div>



        </div>
      </footer>


      <div className="bg-[#E7E4F8]  ">
        <div className="container px-5  h-[80px] sm:h-[53px] mx-auto flex items-center sm:flex-row flex-col">

          <p className="text-sm text-[#9DA0AE] sm:ml-6 sm:mt-0 mt-4">
            © 2024 Hekto —
            <a
              href="https://twitter.com/knyttnev"
              rel="noopener noreferrer"
              className="text-[#9DA0AE] ml-1"
              target="_blank"
            >
              @Right Reserved
            </a>
          </p>
          <span className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

            <div className="w-5 h-5 " ><a href="#"><FaFacebook /></a></div>
            <div className="w-5 h-5  ml-3 text-gray-900"><a href="#"><RxInstagramLogo /></a></div>
            <div className="w-5 h-5  ml-3 text-gray-900"><a href="#"><FaLinkedin /></a></div>

          </span>
        </div>
      </div>


    </div>
  );
};

export default Footer;




