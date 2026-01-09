// Schema para modelar a entidade Product
export interface Product {
    id: number;
    name: string;
    category: string;
    quantity: number;
    price: number;
};

// Schema para modelar interação com long_term_data.json
export interface ProductData {
    products: Product[];
}