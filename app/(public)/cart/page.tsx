"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/global-components/buttonsLayout/Button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image, { StaticImageData } from "next/image";
import axios from "axios";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string | StaticImageData;
};

// Remove this once API is ready
// const mockCart: CartItem[] = [
//   { id: 1, name: "LCD Monitor", price: 650, qty: 1, image: "/Monitor.png" },
//   { id: 2, name: "HI Gamepad", price: 550, qty: 2, image: "/gamepad.png" },
// ];

const API_URL = "";

function Page() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  // const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState(true); // Fixed casing to lowercase 'l'
  const [error, setError] = useState<string | null>(null);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Fetch cart with axios
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);

        // Mock delay for now
        // await new Promise((resolve) => setTimeout(resolve, 500));
        // setCart(mockCart);

        // Real API call with axios
        // const res = await axios.get(`${API_URL}/cart`)
        // setCart(res.data)

        // } catch (err: any) {
        //   setError(
        //     err.response?.data?.message || err.message || "Something went wrong",
        //   );
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Update qty with axios
  const updateQty = async (id: number, qty: number) => {
    if (qty < 1) return; // Prevent negative or 0

    // Optimistic update - fixed the arrow function syntax error here
    const oldCart = cart;
    setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));

    try {
      // Mock api delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Real api call
      // await axios.patch(`${API_URL}/cart/${id}`, {qty})
    } catch (error) {
      setCart(oldCart); // Fixed fallback to use oldCart variable
      console.error("failed to update quantity");
    }
  };

  if (loading) return <div className="p-10 text-center">Loading cart ....</div>;
  if (error)
    return <div className="p-10 text-center text-red-500">Error: {error}</div>;
  if (cart.length === 0)
    return <div className="p-10 text-center">Your cart is empty</div>; // Fixed 'lenght' typo

  return (
    <div className="max-w-[80%] mx-auto pt-50 flex mt-20 min-h-screen">
      <div className=" flex flex-col w-full gap-10">
        <p className="text-gray-500 mb-10">
          <Link href="/">Home</Link> / <span className="text-black">Cart</span>
        </p>

        <Card className="mb-6 shadow-none">
          <CardContent className="p-6">
            <Table className="">
              <TableHeader>
                <TableHead className="">Product</TableHead>
                <TableHead className="">Price</TableHead>
                <TableHead className="">Quantity</TableHead>
                <TableHead className=" text-right">Subtotal</TableHead>
              </TableHeader>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        {item.name}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      ${item.price}
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min={1}
                        value={item.qty.toString().padStart(2, "0")}
                        className="w-20"
                        onChange={(e) =>
                          updateQty(item.id, Number(e.target.value))
                        }
                      />
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap">
                      ${item.price * item.qty}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex justify-between mb-10 mt-4 gap-7">
          <Button href="/">Return To Shop</Button>
          <Button className="bg-white! text-black! border-2 border-s-black border-b-black">
            Update Cart
          </Button>
        </div>
      </div>
      {/* Coupon + Cart Total */}
      {/* <div className="flex md:flex-row justify-between gap-8"> */}
      {/* <div className="flex gap-4 items-start"> */}
      {/* <input
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border-2 border-black p-2 rounded"
          /> */}
      {/* <Button disabled={cart.length === 0}
                onClick={() => router.push(`/checkout`)} className="bg-red-600">Apply Coupon</Button> */}
      {/* </div> */}

      {/* Cart Total Card */}
      <div className="ml-20 px-10 py-20">
        <h3 className="mt-10 mb-7 font-bold text-lg">Cart Total</h3>
        <div className="flex justify-between border-b border-black pb-5">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>

        <div className="flex justify-between border-b border-black pt-4 pb-5">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between pb-6 pt-5 font-bold">
          <span>Total:</span>
          <span>${subtotal}</span>
        </div>

        <div className="flex items-center justify-between mt-20">
          <Button
            onClick={() => router.push(`/checkout`)}
            className="bg-red-600"
          >
            Proceed to checkout
          </Button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Page;
