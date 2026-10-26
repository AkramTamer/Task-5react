import {createContext} from "react"
import { useState } from "react";


export const globalStore = createContext();
const MainStore = ({children}) => {
    const [num, setNum] = useState(0);
       const products = [
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    category: "Electronics",
    description: "Over-ear bluetooth headphones with active noise cancellation and 30-hour battery life.",
    rating: { rate: 4.8, count: 120 },
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Minimalist Modern Smartwatch",
    price: 199.50,
    category: "Electronics",
    description: "Sleek fitness tracker and smartwatch with heart rate monitor, GPS, and OLED display.",
    rating: { rate: 4.6, count: 85 },
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Classic Leather Backpack",
    price: 89.00,
    category: "Accessories",
    description: "Handcrafted genuine leather backpack with a padded laptop compartment up to 15 inches.",
    rating: { rate: 4.5, count: 64 },
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Mechanical Gaming Keyboard",
    price: 129.99,
    category: "Electronics",
    description: "RGB backlit mechanical keyboard with tactile switches and customizable keymaps.",
    rating: { rate: 4.7, count: 210 },
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Ergonomic Running Shoes",
    price: 110.00,
    category: "Footwear",
    description: "Lightweight breathable sneakers designed for high-impact running and daily comfort.",
    rating: { rate: 4.4, count: 98 },
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Stainless Steel Insulated Water Bottle",
    price: 24.99,
    category: "Lifestyle",
    description: "Double-wall vacuum insulated water bottle keeping drinks cold for 24 hours or hot for 12 hours.",
    rating: { rate: 4.9, count: 340 },
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80"
  }
];
    

    const value ={
        num,
        setNum,
        products

    };
    return(
    <globalStore.Provider value={value}>{children}</globalStore.Provider>
    )
};

export default MainStore;