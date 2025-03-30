import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 fixed top-0 px-4 w-full lg:px-[130px]">
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Nút mở menu (Mobile) */}
        <button
          className="top-4 left-4 z-50 bg-white text-black p-2 rounded-md min-w-[40px] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
        <div className="flex items-center space-x-2 my-2 sm:mb-0">
          <img
            alt="Buy Me Logo"
            className="h-10 hidden lg:block"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/QaMWO3iBmzd5g3ptjurbb3Hr0n98sggzpiVkw-mVKqE.jpg"
            width="50"
          />
          <div className="relative w-full max-w-md md:ml-[5px]">
            <input
              className="md:w-[350px] py-2 px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Buy Me bao ship 0Đ - Đăng ký ngay!"
              type="text"
            />
            {/* Nút Search nằm trong input */}
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-2 py-1 rounded">
              🔍
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <i className="fas fa-shopping-cart text-white"></i>
        </div>

        {/* Menu trên Desktop */}
        <div className="hidden md:flex items-center text-white text-sm space-x-4">
          <a href="/dang-phat-trien" className="hidden lg:inline">Kênh Người Bán</a>
          <p className="hidden text-gray-300 lg:inline">|</p>
          <a href="/dang-phat-trien" className="hidden lg:inline">Trở thành Người bán Shopee</a>
          <p className="hidden text-gray-300 lg:inline">|</p>
          <a href="/dang-phat-trien" className="hidden lg:inline">Tải ứng dụng</a>
        </div>

        <div className="hidden md:flex items-center text-white text-sm space-x-4">
          <a href="/dang-phat-trien" className="hidden lg:inline">Thông Báo</a>
          <a href="/dang-phat-trien" className="hidden lg:inline">Hỗ Trợ</a>
          <a href="/dang-phat-trien" className="hidden lg:inline">Đăng Ký</a>
          <a href="/dang-nhap" className="hidden lg:inline">Đăng Nhập</a>
        </div>
        {/* Menu chính - Hiển thị dọc trên Mobile */}
        {menuOpen && (
          <div
            className={`fixed top-0 pt-[70px] left-0 w-[280px] h-full bg-gray-100 text-white p-6 flex flex-col space-y-1
                       transform transition-transform duration-300 ease-in-out 
                       ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
                       md:hidden lg:relative lg:translate-x-0 lg:flex lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0`}
          >
            <a href="/dang-phat-trien">
              <button className="bg-white text-black shadow-md pl-[10px] w-full h-[40px]">
                Kênh Người Bán
              </button>
            </a>
            <a href="/dang-phat-trien">
              <button className="bg-white text-black shadow-md pl-[10px] w-full h-[40px]">
                Trở thành Người bán Shopee
              </button>
            </a>
            <a href="/dang-phat-trien">
              <button className="bg-white text-black shadow-md pl-[10px] w-full h-[40px]">
                Tải ứng dụng
              </button>
            </a>
            <a href="/dang-phat-trien">
              <button className="bg-white text-black shadow-md pl-[10px] w-full h-[40px]">
                Thông Báo
              </button>
            </a>
            <a href="/dang-phat-trien">
              <button className="bg-white text-black shadow-md pl-[10px] w-full h-[40px]">
                Hỗ Trợ
              </button>
            </a>
            <a href="/dang-phat-trien">
              <button className="bg-white text-black shadow-md pl-[10px] w-full h-[40px]">
                Đăng Ký
              </button>
            </a>
            <a href="/dang-nhap">
              <button className="bg-white text-black shadow-md pl-[10px] w-full h-[40px]">
                Đăng Nhập
              </button>
            </a>
          </div>
        )}
      </div>


    </header>
  );
};

export default Header;