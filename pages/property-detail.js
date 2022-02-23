import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImLocation } from "react-icons/im";
import { GoVerified, GoPerson, GoUnverified } from "react-icons/go";
import Image from "next/image";
import { FaBath, FaBed, FaMobile } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import Map from "../components/Map";
import { BsWhatsapp } from "react-icons/bs";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import millify from "millify";

const PropertyDetail = ({
  property: {
    agency,
    purpose,
    title,
    description,
    location,
    rooms,
    baths,
    area,
    isVerified,
    price,
    coverPhoto,
    contactName,
    phoneNumber,
    geography,
  },
}) => {
  return (
    <div>
      <Navbar />

      <main className="bg-gray-100 px-6 py-6">
        <div className="bg-white shadow-2xl p-6 rounded-xl container mx-auto space-y-2">
          <div className="md:flex md:items-center">
            <h4 className="text-sm md:text-lg font-semibold">{title}</h4>
            <span className="mr-1 md:ml-2 p-1 bg-yellow-400 text-white font-light rounded-lg text-xs">
              {agency.product}
            </span>
            <span className="md:ml-2 p-1 text-white bg-green-500 rounded-lg text-xs font-light">
              {purpose}
            </span>
          </div>

          <div className="flex items-center">
            <div className="relative h-8 w-8">
              <Image
                src={agency.logo.url}
                alt="agency logo"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <h6 className="text-xs md:text-sm font-semibold ml-4">{agency.name}</h6>
          </div>

          <p className="flex items-center text-xs md:text-sm">
            <ImLocation />
            <span className="ml-1">{`${location[2].name}, ${location[1].name}`}</span>
          </p>

          <p className="text-green-700 flex items-center text-xs md:text-sm">
            {isVerified ? <GoVerified /> : <GoUnverified />}
            <span className="ml-1">{isVerified ? "Verified" : "Not Verified"}</span>
          </p>

          <hr />

          <div className="relative h-44 md:h-[36rem]">
            <Image
              src={coverPhoto.url}
              alt="image property"
              layout="fill"
              className="rounded-lg"
            />
          </div>

          <p className="text-xs md:text-sm text-justify">{description}</p>

          <div className="flex text-xs md:text-base justify-end">
            <div className="flex items-center mr-2">
              <span className="mr-2">{rooms}</span>
              <FaBed />
            </div>
            |
            <div className="mx-2 flex items-center">
              <span className="mr-2">{baths}</span>
              <FaBath />
            </div>
            |
            <div className="ml-2 flex items-center">
              <span className="mr-2">{millify(area)} Sqft</span>
              <MdSquareFoot />
            </div>
          </div>

          <div className="flex flex-col items-end">
            <p className="mb-2 text-lg md:text-2xl font-bold text-green-700">
              AED {millify(price)}
            </p>
            <button className="text-sm px-4 py-2 md:text-base md:px-6 md:py-2 bg-black hover:opacity-80 text-white font-semibold rounded w-44 text-center">
              {purpose === "for-rent" ? "Rent" : "Buy"}
            </button>
          </div>
        </div>

        <div className="container mx-auto bg-white px-6 py-2 shadow-2xl rounded-xl space-y-2 mt-4 w-full">
          <h6 className="text-sm md:text-lg text-center font-semibold">
            Contact Details
          </h6>
          <div className="text-xs md:flex md:justify-evenly md:items-center md:text-base">
            <p className="flex items-center">
              <GoPerson />
              <span className="ml-2">{contactName}</span>
            </p>
            <p className="flex items-center">
              <FaMobile />
              <span className="ml-2">
                {phoneNumber.mobile ? phoneNumber.mobile : "-"}
              </span>
            </p>
            <p className="flex items-center">
              <FaMobile />
              <span className="ml-2">{phoneNumber.phone ? phoneNumber.phone : "-"}</span>
            </p>
            <p className="flex items-center">
              <BsWhatsapp />
              <span className="ml-2">{phoneNumber.whatsapp}</span>
            </p>
          </div>
        </div>

        <div className="container mx-auto bg-white p-6 shadow-2xl rounded-xl space-y-2 mt-4">
          <h6 className="text-sm md:text-lg font-semibold">Location Info</h6>
          <p className="text-xs md:text-sm">{`${location[2].name}, ${location[1].name}`}</p>

          <div className="h-[300px]">
            <Map geography={geography} agency={agency} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;

export async function getServerSideProps({ query }) {
  const id = query.id;

  const response = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return { props: { property: response } };
}
