export interface Product {
    id: string;
    image: string;
    name: string;
    price: number;
    reviews?: number;
    rating?: number;
    badge?: string;
    badgeColor?: string;

    onAddToCart?: (productId: string) => void;
}