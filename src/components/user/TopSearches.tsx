import React from 'react';

const TopSearches: React.FC = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">TÌM KIẾM HÀNG ĐẦU</h2>
                <a className="text-blue-600" href="#">Xem tất cả</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <a href="#" className="block">
                <div className="bg-white p-2 rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-103 min-h-[225px]">
                    <img alt="Phụ Tùng Xe Đạp Điện" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Phụ Tùng Xe Đạp Điện</p>
                    <p className="text-center text-blue-500 font-bold">Bán 7k+/tháng</p>
                </div>
                </a>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="Quần Lót Nữ Cotton" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Quần Lót Nữ Cotton</p>
                    <p className="text-center text-blue-500 font-bold">Bán 133k+/tháng</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="Quần Ống Rộng Nữ" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Quần Ống Rộng Nữ</p>
                    <p className="text-center text-blue-500 font-bold">Bán 111k+/tháng</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="Bao Cao Su" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Bao Cao Su</p>
                    <p className="text-center text-blue-500 font-bold">Bán 69k+/tháng</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="Son Kem Lì Mịn Môi Romand" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Son Kem Lì Mịn Môi Romand</p>
                    <p className="text-center text-blue-500 font-bold">Bán 128k+/tháng</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="Mặt Nạ Xe Điện Xmen" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Mặt Nạ Xe Điện Xmen</p>
                    <p className="text-center text-blue-500 font-bold">Bán 8k+/tháng</p>
                </div>
            </div>
        </div>
    );
};

export default TopSearches;