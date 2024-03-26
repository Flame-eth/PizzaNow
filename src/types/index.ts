export interface ProductType {
    id: number;
    name: string;
    image: string;
    price: number;
}

export type PizzaSizeType = 'S' | 'M' | 'L' | 'XL';

export interface CartItemType  {
  id: string;
  product: ProductType;
  product_id: number;
  size: PizzaSizeType;
  quantity: number;
};

export const OrderStatusListRype: OrderStatusType[] = [
  'New',
  'Cooking',
  'Delivering',
  'Delivered',
];

export type OrderStatusType = 'New' | 'Cooking' | 'Delivering' | 'Delivered';

export interface OrderType  {
  id: number;
  created_at: string;
  total: number;
  user_id: string;
  status: OrderStatusType;

  order_items?: OrderItemType[];
};

export interface OrderItemType  {
  id: number;
  product_id: number;
  products: ProductType;
  order_id: number;
  size: PizzaSizeType;
  quantity: number;
};

export interface Profile  {
  id: string;
  group: string;
};
