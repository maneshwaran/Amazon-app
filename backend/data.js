import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Manesh",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
      countInStock: 10,
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      brand: "Adidas",
      rating: 4,
      numReviews: 10,
      description: "high quality product",
      countInStock: 10,
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
      countInStock: 10,
    },
    {
      name: "Nike Slim Pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 78,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
      countInStock: 10,
    },
    {
      name: "Puma Slim Pant",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 65,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
      countInStock: 10,
    },
    {
      name: "Addidas Fit Shirt",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 139,
      brand: "Addidas",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
      countInStock: 10,
    },
  ],
};
export default data;
