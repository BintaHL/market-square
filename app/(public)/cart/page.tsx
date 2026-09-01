"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useCart } from "@/app/(public)/context/CartContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // shadcn table
import { Button } from "@/app/global-components/buttonsLayout/Button";
// import { Button } from "@/components/ui/button"; // optional
import { X } from "lucide-react"; // for delete icon

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-[80%] mx-auto px-4 text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">CART</h1>
        <p className="text-gray-500 mb-6 ">Your cart is empty</p>
        <Link href="/products">
          <Button className="bg-primary hover:bg-primary-hover">
            Return To Shop
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[80%] mx-auto px-4 py-10 mt-40">
      <h1 className="text-3xl font-bold mb-8 text-center justify-center">View Cart</h1>

      {/* shadcn Table */}
      <div className="flex">
      <Card className="mb-6 shadow-none">
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableHead className="flex item-center">Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="">Quantity</TableHead>
              <TableHead className="">Subtotal</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableHeader>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  {/* Product: Image and Name */}
                  <TableCell>
                    <div className="flex flex-col items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="object-cover rounded"
                      />
                      <p className="font-medium text-wrap">{item.name}</p>
                    </div>
                  </TableCell>

                  {/* Price */}
                  <TableCell>${item.price.toFixed(2)}</TableCell>

                  {/* Quantity with input */}
                  <TableCell>
                    <div className="flex justify-center">
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.id, Number(e.target.value))
                        }
                        className="w-16 border-gray-300 rounded px-2 py-1 text-center"
                      />
                    </div>
                  </TableCell>

                  {/* Subtotal */}
                  <TableCell className="text-right font-semibold">
                    ${(item.price * item.qty).toFixed(2)}
                  </TableCell>

                  {/* Remove Product Button */}
                  <TableCell> 
                   
                  <button 
                    onClick={() => {
                      removeFromCart(item.id);
                      toast.error(`${item.name} removed`);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={18} />
                  </button> 

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        
         <Button  href="/products">Return To Shop</Button>
      </Card>

        

      {/* Cart Total Box */}
      <div className="flex justify-end mt-10">
        <div className="ml-20 border border-black p-6 w-full md:w-96 rounded">
          <h2 className="text-xl font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between border-b pb-3 mb-3">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-b pb-3 mb-3">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <p>Total:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <Link href="/checkout">
            <Button className="bg-red-600 hover:bg-red-700 w-full">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
