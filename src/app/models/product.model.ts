export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  rates?: boolean[];
  isFavourite?: boolean;
}
