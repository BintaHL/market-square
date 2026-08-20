import Image from "next/image";
import Card from "../global-components/cardsLayout/Card";
import { Smallcard } from "../global-components/cardsLayout/Smallcard";

export default function Home() {
  return (
    <div className="flex items-center justify-center">

      {/* clean this div line 8-16*/}
      <div className="Testing mt-50">
        <div className="">THE</div>
        <Card />

        <Smallcard image="/globe.svg"
          title="Phones" />


        All below is a test
        <p className="font-title-small">dsfsdfsfsdfdsfsd</p>
        <p className="text-base text-dark-muted">therhehhehf</p>
        <h3>SADRTRTDRHTDRHTHY
          GTFTF</h3>

        <button className="
                /* Layout & Dimensions */
                w-58.5 h-14 
                flex items-center justify-center gap-2.5
                pt-4 pr-12 pb-4 pl-12
                
                /* Borders & Opacity */
                rounded-sm opacity-100 rotate-0
                
                /* Team Customization Targets (Change These) */
                bg-primary text-light font-medium
                
                /* Behavior */
                transition-all duration-200 hover:opacity-90 active:scale-[0.98]
                ">
          <span>Button Text</span>
        </button>


        <button className="bg-primary hover:bg-primary-hover text-light rounded-2xl">fwefewfwefwef</button>

      </div>
    </div>
  );
}
