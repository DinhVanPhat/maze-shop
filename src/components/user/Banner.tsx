import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-20 mb-4">
        <img
            alt="Banner 1"
            className="col-span-1 lg:col-span-2"
            src="https://cf.shopee.vn/file/sg-11134258-7rd6n-m7t43jcjd8us2a_xxhdpi"
            width="850" height="230"
        />
        <div className="grid grid-cols-1 gap-1">
            <img
                alt="Banner 2"
                src="https://cf.shopee.vn/file/sg-11134258-7rd4q-m7t43kanzczc13_xhdpi"
                width="420" height="110"
            />
            <img
                alt="Banner 3"
                src="https://cf.shopee.vn/file/sg-11134258-7rd5p-m7t43msadk1z99_xhdpi"
                width="420" height="110"
            />
        </div>
    </div>
  );
};

export default Banner;