interface IItems {
  id:           number;
  name:         string;
  description:  string;
  img:          string;
}
interface ICategory {
  id:           number;
  name:         string;
  products: IProduct[];
}

interface IProduct {
  id:        number;
  name:      string;
  imageUrl:  string;
  category:  ICategory;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  name: string;
  id: number;
}

// type WindowStates = "open" | "closed" | "minimized";
// type LockStates = "locked" | "unlocked";
// type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
