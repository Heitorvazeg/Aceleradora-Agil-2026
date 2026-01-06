// Schema para modelar a entidade Product
export interface Product {
    id: string;
    Name: string;
    Category: string;
    Quantity: number;
    Price: number;
};

// Schema para modelar interação com long_term_data.json
export interface ProductData {
    products: Product[];
}