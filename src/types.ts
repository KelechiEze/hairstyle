export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  popular?: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
}
