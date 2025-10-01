export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  specs: Record<string, Record<string, string>>;
  datasheetUrl: string | null;
  images: string[];
  price: string | null;
  category: string;
  source: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
