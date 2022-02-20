import Image from "next/image";

export default function Banner() {
  return (
    <div className="mt-2 relative h-[10rem] sm:h-[20rem] md:h-[31.25rem] xl:h-[36.75rem] 2xl:h-[58.75rem]">
      <Image src="/banner-image.jpg" alt="banner image" layout="fill" objectFit="cover" />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-white font-bold lg:text-2xl bg-black p-4">
          Explore Apartments, Villas, Homes and more
        </p>
      </div>
    </div>
  );
}
