import { useState, useEffect } from 'react';
import menuJson from '@/data/menu.json';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  ingredients: string[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface ContactInfo {
  phone1: string;
  phone2: string;
  location: string;
  working_hours: string;
  delivery: string;
  social_media: {
    instagram: string;
    tiktok: string;
    telegram: string;
    telegram_group: string;
  };
}

interface MenuData {
  items: MenuItem[];
  categories: Category[];
  contact_info: ContactInfo;
}

export const useMenuData = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMenuData(menuJson as MenuData);
    setLoading(false);
  }, []);

  return { menuData, loading, error: null };
};
