import Image from "next/image";


interface CategoryCardProps {
  image: string;
  title: string;
  alt?: string;
}

export function Smallcard({
  image,
  title,
  alt = "",
}: CategoryCardProps) {
  return (
    <div className="w-42.5 h-36.25 rounded-sm border border-[#E5E5E5] flex flex-col items-center justify-center gap-2 shadow-sm shadow-grayish">
      {/* Image / Icon */}
      <Image
        src={image}
        alt={alt}
        width={1000}
        height={50}
        className="w-14 h-14 object-contain"
      />

      {/* Text */}
      <p className="text-[16px] font-normal leading-6 tracking-[0%]">
        {title}
      </p>
    </div>
  );
}


// USAGE OF THE ABOVE IN OTHER PAGES 

{/* <Smallcard
  image="/images/phones.png"
  title="Phones"
/> */}
