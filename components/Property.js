import Image from "next/image";
import DefaultImage from "../public/image-not-found.png";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";
import { useRouter } from "next/router";

export default function Property({
  property: {
    title,
    price,
    rooms,
    rentFrequency,
    isVerified,
    coverPhoto,
    area,
    baths,
    agency,
    externalID,
  },
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/property-detail",
      query: {
        id: externalID,
        title,
        price,
        rooms,
        rentFrequency,
        isVerified,
        coverPhoto,
        area,
        baths,
        agency,
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="p-5 hover:shadow-2xl hover:cursor-pointer hover:rounded-lg hover:scale-105 transition transform duration-200 ease-out"
    >
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
        <div className="flex items-center justify-between mt-2">
          <h6 className="text-md font-semibold">
            {title.length > 25 ? `${title.substring(0, 25)}...` : title}
          </h6>

          <div className="relative h-6 w-6 border border-gray-300 rounded-full">
            <Image
              src={agency.logo.url}
              alt="logo image"
              layout="fill"
              objectFit="fill"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-1">
          <span className="text-sm">{millify(area)} sqft</span>
        </div>

        <div className="flex">
          <div className="flex items-center mr-2">
            <span className="mr-2 text-sm">{rooms}</span>
            <FaBed />
          </div>
          |
          <div className="ml-2 flex items-center">
            <span className="mr-2 text-sm">{baths}</span>
            <FaBath />
          </div>
        </div>

        <button className="w-full py-2 px-3 text-sm text-white bg-black hover:opacity-80 font-semibold button-2 text-center mt-1 rounded">
          AED {millify(price)} {rentFrequency && `/ ${rentFrequency}`}
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
