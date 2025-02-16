import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Divider, Typography } from 'antd';

const { Title } = Typography;
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <div
        className="relative flex items-center justify-center w-full  p-9 bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483782817618-9804403024ba?w=1500&auto=format&fit=crop&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6">
          <div className="text-center md:text-left md:w-1/2 space-y-4 text-white">
            <h1 className="text-4xl font-bold">Welcome to 🚀 This Site</h1>
            <p className="text-lg">
              We build innovative solutions that shape the future.
            </p>
            <Button
              type="primary"
              size="large"
              className="bg-blue-500 hover:bg-blue-600"
            >
              Get Started <ArrowRightOutlined />
            </Button>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
            <Image
              src="https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Hero Banner"
              width={500}
              height={350}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
<h1 className="font-bold text-center pl-5">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto text-center my-12 px-6 ">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🚀 Fast Performance</h3>
          <p className="text-gray-600">Experience blazing-fast loading speeds.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🎨 Modern UI</h3>
          <p className="text-gray-600">Beautiful and user-friendly designs.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🔒 Secure & Reliable</h3>
          <p className="text-gray-600">Your data is safe with top-level security.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
