export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
