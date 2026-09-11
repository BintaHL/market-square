"use client";
// import * as React from "react";
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
} from "@/components/ui/table";
import { Button } from "@/app/global-components/buttonsLayout/Button";
import { X } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-[80%] mx-auto px-4 text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">CART</h1>
        <p className="text-gray-500 mb-6">Your cart is empty</p>
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
      <h1 className="text-3xl font-bold mb-8 text-center">View Cart</h1>
      <div className="flex gap-8">
        <Card className="mb-6 shadow-none flex-1">
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                {/* <TableRow> */}
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Subtotal</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                {/* </TableRow> */}
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
                          className="object-cover rounded"
                        />
                        <p className="font-medium">{item.name}</p>
                      </div>
                    </TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.id, Number(e.target.value))
                        }
                        className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                      />
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      ${(item.price * item.qty).toFixed(2)}
                    </TableCell>
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
            <div className="mt-4">
              <Link href="/products">
                <Button>Return To Shop</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="border border-black p-6 w-full md:w-96 rounded h-fit">
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
  );
}