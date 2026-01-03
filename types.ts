
export interface CoffeeRegion {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cities: string[];
  climate: string;
  terroir: string;
  specifications: {
    altitude: string;
    process: string;
    sensoryNotes: string;
  };
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
