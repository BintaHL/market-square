// import Image from "next/image";
import { SearchIcon } from "lucide-react"
import {
  Field
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IoNotificationsCircleOutline } from "react-icons/io5";
import CustomerTable from "./components/CustomerTable";
import Link from "next/link";
import { FaLeftLong } from "react-icons/fa6";

const Customer = () => {

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="sticky top-0 z-20 w-full bg-white border-b border-[#d5d5d5] px-5 flex items-center justify-between">
        <h2 className="text-[22px] font-bold py-6">Customers</h2>
        <div className="flex items-center gap-3">
          {/* <Field className="max-w-sm">
            <InputGroup>
              <InputGroupInput id="inline-start-input" placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <SearchIcon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field> */}
          <div className='flex items-center cursor-pointer'>
            <Link href="/admin/products">
            <FaLeftLong className='text-primary inline mr-2' />
            Back to Home</Link>
          </div>

          <IoNotificationsCircleOutline className="w-10 h-10"/>
        </div>
      </div>

      <div className="px-5 bg-gray-100">
        <CustomerTable />
      </div>
   
    </div>
  );
};

export default Customer;
