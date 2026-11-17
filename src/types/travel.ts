export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Africa' | 'Americas' | 'Europe' | 'Asia';
  description: string;
  longDescription: string;
  image: string;
  bestTime: string;
  avgDuration: string;
  highlights: string[];
  startingPrice: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
  included: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  trip: string;
  rating: number;
  avatarInitials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  category: string;
}

export interface BookingFormData {
  destination: string;
  fullName: string;
  email: string;
  phone: string;
  travelDates: string;
  travelersCount: number;
  travelStyle: 'Luxury Bespoke' | 'Balanced Explorer' | 'Active Adventure' | 'Culture & Food';
  specialRequests: string;
}
