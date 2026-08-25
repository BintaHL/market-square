"use client";

import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`
        w-58.5 h-14
        flex items-center justify-center gap-2.5
        px-12 py-4
        rounded-sm 
        bg-primary text-light font-medium
        transition-all duration-200
        hover:opacity-90
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

interface AddToCartButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function AddToCartButton({
  children = "Add to Cart",
  href,
  onClick,
  className = "",
}: AddToCartButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full
        h-10
        flex items-center justify-center gap-2
        px-4
        bg-primary
        text-light
        text-sm
        font-medium
        rounded-none
        transition-all duration-200
        hover:opacity-90
        active:scale-[0.98]
      "
    >
      <ShoppingCart className="w-4 h-4" />
      {children}
    </button>
  );
}


// USAGE OF THE ABOVE IN OTHER PAGES

// (1) 
// <Button href="/">
//   Back to Home
// </Button>

// (2) 
// Because we're using children, you can put anything inside the button:

{/* <Button href="/cart">
  <ShoppingCart className="w-5 h-5" />
  <span>View Cart</span>
</Button> */}

// FOR ADDCART BUTTON

{/* <AddToCartButton href="/cart">
  Add to Cart
</AddToCartButton> */}

{/* <AddToCartButton href={`/cart/${product.id}`}>
  Add to Cart
</AddToCartButton> */}

{/* <AddToCartButton onClick={() => addToCart(product)}>
  Add to Cart
</AddToCartButton> */}