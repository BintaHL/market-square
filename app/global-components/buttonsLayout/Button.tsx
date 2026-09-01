"use client";

import { useRouter } from "next/navigation";

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





// IMPORTING / USAGE OF THE ABOVE IN OTHER PAGES

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

