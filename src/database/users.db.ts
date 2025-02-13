type User = {
  _id?: number;
  name: string;
  email: string;
  password: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export const users: User[] = [
  {
    _id: 1,
    name: "Gandak",
    email: "gandak0930@gmail.com",
    password: "123456",
  },
];
