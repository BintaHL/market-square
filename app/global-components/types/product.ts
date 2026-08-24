export interface Product {
    product?: Product;

    id?: string | number;
    image?: string;
    imageAlt?: string;
    name?: string;
    price?: number;
    reviews?: number;
    rating?: number;
    badge?: string;
    badgeColor?: string;
    onAddToCart?: (id: string | number) => void;
}