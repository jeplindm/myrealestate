import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <div>
      <Head>
        <title>My Real Estate</title>
      </Head>

      <Navbar />

      <Banner />

      <main>
        <div className="mt-4 px-6">
          <h2 className="text-2xl font-bold text-center">Rental Homes For Everyone</h2>
          <section className="mt-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 space-y-2">
            {propertiesForRent?.map((property) => (
              <Property key={property.id} property={property} />
            ))}
          </section>
        </div>

        <div className="mt-4 px-6">
          <h2 className="text-2xl font-bold text-center">
            Find, Buy & Own Your Dream Home
          </h2>
          <section className="mt-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 space-y-2">
            {propertiesForSale?.map((property) => (
              <Property key={property.id} property={property} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const propertiesForRent = await fetchApi(
    `${baseUrl}/properties/list?hitsPerPage=8&locationExternalIDs=5002&purpose=for-rent`
  );
  const propertiesForSale = await fetchApi(
    `${baseUrl}/properties/list?hitsPerPage=8&locationExternalIDs=5002&purpose=for-sale`
  );

  return {
    props: {
      propertiesForRent: propertiesForRent?.hits,
      propertiesForSale: propertiesForSale?.hits,
    },
  };
}
