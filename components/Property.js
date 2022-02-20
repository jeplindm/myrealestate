import Image from "next/image";
import DefaultImage from "../public/image-not-found.png";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";

export default function Property({
  property: { title, price, rooms, rentFrequency, isVerified, coverPhoto, area, baths },
}) {
  return (
    <div className="p-5 hover:shadow-2xl hover:cursor-pointer hover:rounded-lg hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-72">
        <Image
          src={coverPhoto ? coverPhoto.url : <DefaultImage />}
          alt="property image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-full">
        <h6 className="text-sm mt-1">
          {title.length > 20 ? `${title.substring(0, 20)}...` : title}
        </h6>

        <div className="flex justify-between items-center mt-1">
          <span className="text-xs">{millify(area)} sqft</span>
        </div>

        <div className="flex">
          <div className="flex items-center mr-2">
            <span className="mr-2 text-xs">{rooms}</span>
            <FaBed />
          </div>
          |
          <div className="ml-2 flex items-center">
            <span className="mr-2 text-xs">{baths}</span>
            <FaBath />
          </div>
        </div>

        <button className="w-full py-2 px-3 text-sm text-white bg-black font-bold button-2 text-center mt-1 rounded-lg">
          USD {millify(price)} {rentFrequency && `/ ${rentFrequency}`}
        </button>
        {isVerified && (
          <div className="flex justify-end items-center text-xs text-green-700 font-semibold mt-2">
            <span className="mr-2">Verified</span>
            <GoVerified />
          </div>
        )}
      </div>
    </div>
  );
}
