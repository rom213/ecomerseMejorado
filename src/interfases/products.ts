// Generated by https://quicktype.io

export interface Products {
    id:          number;
    title:       string;
    description: string;
    price:       number;
    brand:       string;
    createdAt:   string;
    updatedAt:   string;
    categoryId:  number;
    images:      Image[];
    category:    Category;
}
interface Category {
    id:   number;
    name: string;
}
interface Image {
    id:  number;
    url: string;
}
