import React from 'react';

const Flashsale: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-600">FLASH SALE</h2>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">00</span>
          <span className="text-lg font-bold">:</span>
          <span className="text-lg font-bold">00</span>
          <span className="text-lg font-bold">:</span>
          <span className="text-lg font-bold">00</span>
        </div>
        {/* <a className="text-blue-600" href="#">Xem tất cả</a> */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <a href="#" className="block">
          <div className="bg-white p-2 rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-103">
            <img alt="Product 1" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
            <p className="text-blue-500 font-bold">₫169.000</p>
            <p className="text-blue-600">ĐANG BÁN CHẠY</p>
          </div>
        </a>
        <div className="bg-white p-2 rounded-lg shadow-md">
          <img alt="Product 2" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
          <p className="text-blue-500 font-bold">₫1.060.000</p>
          <p className="text-blue-600">ĐANG BÁN CHẠY</p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md">
          <img alt="Product 2" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
          <p className="text-blue-500 font-bold">₫1.060.000</p>
          <p className="text-blue-600">ĐANG BÁN CHẠY</p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md">
          <img alt="Product 3" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
          <p className="text-blue-500 font-bold">₫154.000</p>
          <p className="text-blue-600">ĐANG BÁN CHẠY</p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md">
          <img alt="Product 4" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
          <p className="text-blue-500 font-bold">₫315.000</p>
          <p className="text-blue-600">ĐANG BÁN CHẠY</p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md">
          <img alt="Product 5" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
          <p className="text-blue-500 font-bold">₫1.877.000</p>
          <p className="text-blue-600">ĐANG BÁN CHẠY</p>
        </div>
      </div>
    </div>
  );
};

export default Flashsale;