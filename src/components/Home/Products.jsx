import { FaShippingFast, FaFingerprint } from "react-icons/fa";
import { MdSupport } from "react-icons/md";
import { IoReturnUpBackOutline } from "react-icons/io5";

function Products() {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-semibold">Discover NEW Arrivals</h1>
        <p className="text-gray-500 mt-2">Recently added shirts!</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {[
          { src: "/pic-1.png", name: "Plain White Shirt", price: "$29.00" },
          { src: "/pic-2.png", name: "Denim Jacket", price: "$69.00" },
          { src: "/pic-3.png", name: "Black Polo Shirt", price: "$49.00" },
          { src: "/pic-4.png", name: "Blue Sweatshirt", price: "$79.00" },
          { src: "/pic-5.png", name: "Blue Plain Shirt", price: "$49.00" },
          { src: "/pic-6.png", name: "Dark Blue Shirt", price: "$89.00" },
          { src: "/pic-7.png", name: "Outcast T Shirt", price: "$19.00" },
          { src: "/pic-8.png", name: "Polo Plain Shirt", price: "$29.00" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-60 object-cover mb-2"
            />
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-blue-500">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 mb-12 text-center">
        <div className="flex items-center gap-4">
          <FaShippingFast className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">FREE SHIPPING</h3>
            <p>Free shipping on all<br />orders above $100</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MdSupport className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">SUPPORT 24/7</h3>
            <p>Support team here to<br />help with any queries</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IoReturnUpBackOutline className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">30 DAYS RETURN</h3>
            <p>Return within 30 days<br />for an exchange</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaFingerprint className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">100% PAYMENT SECURE</h3>
            <p>Secured with 256-bit<br />encryption</p>
          </div>
        </div>
      </div>

      {/* Banners */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="flex-1 bg-black p-8 text-center rounded">
          <h2 className="text-white text-2xl mb-4">PEACE OF MIND</h2>
          <p className="text-white mb-6">
            A one-stop platform for all your fashion needs.<br />
            Buy with peace of mind.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-blue-100">
            BUY NOW
          </button>
        </div>
        <div className="flex-1 bg-black p-8 text-center rounded">
          <h2 className="text-white text-2xl mb-4">BUY 2 GET 1 FREE</h2>
          <p className="text-white mb-6">
            End of season sale. Buy any 2 items and get 1 free.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-blue-100">
            BUY NOW
          </button>
        </div>
      </div>

      {/* Top Sellers */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Top Sellers</h2>
        <p className="text-gray-500">Browse our top-selling products</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-6">
        {["/pic-10.png", "/pic-11.png", "/pic-12.png", "/pic-13.png"].map(
          (src, idx) => (
            <div key={idx}>
              <img
                src={src}
                alt="Top Seller"
                className="w-full h-60 object-cover mb-2"
              />
              <h3>Outcast T Shirt</h3>
              <p className="text-blue-500">$19.00</p>
            </div>
          )
        )}
      </div>
      <div className="text-center mb-12">
        <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Products;
