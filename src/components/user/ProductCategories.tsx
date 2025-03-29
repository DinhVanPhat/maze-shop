import React from 'react';

const ProductCategories: React.FC = () => {
  return (
    <div className="bg-white py-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold px-4">DANH MỤC</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 px-4 mt-4">
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 1"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/D_ad6-8MB0m3CmwxgncAGY8Rce7_2skdrWS0OIbopIs.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Thời Trang Nam</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 2"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/V6hZOZ9VtkOheRYzL40t9atRpXEkhoyfq8Mwzex8wRg.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Điện Thoại &amp; Phụ Kiện</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 3"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/gdoVV28M2r2QRywRBO665XDoFyl8mTFTnNMJRFw5Ezs.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Thiết Bị Điện Tử</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 4"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/y-Evm9U4IP6kJUYLvoGepAB5NqH5wIxUUX1JUPPksAM.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Máy Tính &amp; Laptop</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 5"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/4mhA-VGisbSN_vfSW47IXHHWZjOypapHhIxdWA2FXD0.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Máy Ảnh &amp; Máy Quay Phim</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 6"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/ooAYXfVrUCl_nWHrHyjsVBM8A7ZInMmqlFY5FwGIbzE.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Đồng Hồ</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 7"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/HbAcF66-j--afMCUlHMgGCPqXnNc8LpCSi5S5RmadoE.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Giày Dép Nam</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 8"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/vda5YVYuuPapi0o6QT9bGDO76cEuzzOnHvjDOZW67k0.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Thiết Bị Điện Gia Dụng</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 9"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/wq-TrDHvNWpio04rq6yFiEaZE1FA3REzHqeown4at-k.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Thể Thao &amp; Du Lịch</span>
                </div>
            </a>
            <a href="#" className="block">
                <div className="text-center bg-white h-[140px] border border-transparent hover:border-gray-400 rounded-lg p-4">
                    <img
                        alt="Category 10"
                        className="mx-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/TW68xs7TfwR4eCoO-J6owNLhJbsY1GYXL1vkpeogy2k.jpg"
                        width="40"
                    />
                    <span className="block mt-2">Ô Tô &amp; Xe Máy &amp; Xe Đạp</span>
                </div>
            </a>
        </div>
    </div>
  );
};

export default ProductCategories;