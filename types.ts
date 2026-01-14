import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface Product {
  id: string;
  category: string; // e.g., 'gates', 'fences'
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  image: string;
  title: string;
}

export interface NavLink {
  path: string;
  label: string;
}