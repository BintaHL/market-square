import Image from "next/image";
import { Smallcard } from "../global-components/cardsLayout/Smallcard";
import { ProductCard } from "../global-components/cardsLayout/ProductCard";
import Button from "@/app/global-components/buttonsLayout/Button";

export default function Home() {
  return (
    <div className="flex items-center justify-center">

      {/* clean this div line 8-16*/}
      <div className="Testing mt-50">
        <div className="">THE</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">

          <ProductCard
            image="/globe.svg"
            name="Product Name"
            price="₦25,000"
            reviews={55}
          />

          <ProductCard
            image="/next.svg"
            name="Laptop"
            price="₦450,000"
            badgeColor="bg-primary"
            reviews={32}
          />

          <ProductCard
            image="/vercel.svg"
            name="Smartphone"
            price="₦280,000"
            reviews={87}
            badge="SALE"
            rating={4}
          />

          <ProductCard
            image="/window.svg"
            name="Smartphone"
            price="₦280,000"
            reviews={87}
            badge="SALE"
            rating={4}
          />
        </div>

        <div className="flex items-center justify-between">

        <Button href="/">Back to home</Button>


        <Smallcard image="/globe.svg"
          title="Phones" />

        </div>



        All below is a test
        <p className="font-title-small">dsfsdfsfsdfdsfsd</p>
        <p className="text-base text-dark-muted">therhehhehf</p>
        <h3>SADRTRTDRHTDRHTHY
          GTFTF</h3>

      


        <button className="bg-primary hover:bg-primary-hover text-light rounded-2xl">fwefewfwefwef</button>

      </div>
    </div>
  );
}
