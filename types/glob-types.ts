interface IItems {
  id:           number;
  name:         string;
  description:  string;
  img:          string;
}
interface ICategory {
  id:           number;
  name:         string;
  imageUrl:         string;
  products: IProduct[];
}

interface IProduct {
  id:        number;
  name:      string;
  images:  ImagesPrd[];
  price:        number;
  category:  ICategory;
  createdAt: Date;
  updatedAt: Date;
}

interface ImagesPrd {
  id: number;
  imageUrl: string;

}

interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  imageUrl: string;
  role: string;
  verified: Date;
  createdAt: Date;
  updatedAt: Date;
}

// type WindowStates = "open" | "closed" | "minimized";
// type LockStates = "locked" | "unlocked";
// type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
