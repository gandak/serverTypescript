type typeProduct = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export const products = [
  {
    _id: 1,
    name: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 100,
    stock: 5001,
    category: "sport",
    images: [],
  },
];
