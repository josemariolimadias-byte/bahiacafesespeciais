
export interface CoffeeRegion {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Product {
  id: string;
  name: string;
  region: string;
  price: number;
  description: string;
  imageUrl: string;
}
