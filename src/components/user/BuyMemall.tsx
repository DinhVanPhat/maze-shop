import React from 'react';

const BuyMemall: React.FC = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">BUY ME MALL</h2>
                <a className="text-blue-600" href="#">Xem tất cả</a>
            </div>
            <div className="flex justify-between items-center mb-4">
                <span>Trả Hàng Miễn Phí 15 Ngày</span>
                <span>Hàng Chính Hãng 100%</span>
                <span>Miễn Phí Vận Chuyển</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <a href="#" className="block">
                    <div className="bg-white p-2 rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-103">
                        <img alt="Shop Uy Tin" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                        <p className="text-center">Ưu đãi đến 50%</p>
                    </div>
                </a>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="L'Oreal" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Ưu đãi đến 50%</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="L'Oreal" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Ưu đãi đến 50%</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="Unilever" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Mua 1 tặng 1</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="Watsons" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Mua là có quà</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img alt="Deli" className="w-full h-32 object-cover mb-2" height="150" src="https://placehold.co/150x150" width="150" />
                    <p className="text-center">Deli siêu sale</p>
                </div>
            </div>
        </div>
    );
};

export default BuyMemall;