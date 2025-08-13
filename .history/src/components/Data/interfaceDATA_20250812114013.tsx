export interface Genre {
  id: number;
  title: string;
  created_at: string; // برای هماهنگی با تاریخ به صورت رشته
  updated_at: string;
  pivot: {
    book_id: number;
    genre_id: number;
  };
}

export interface Price {
  id: number;
  language: string;
  book_id: number;
  fileL: string;
  price: string;
  status: number;
}
export interface typefilebasket {
  file: {
    id: number;
    file:s
    language: string;
    book_id: number;
    price: string;
    created_at: null;
    updated_at: null;

    status: number;
  };
}

export interface Book {
  basket: string;
  description: string;
  order_id: number;
  book_id: number;
  type: string[];
  image: string;
  author: string;
  Genre: string;
  AbotBook: string;
  priceTranslation: number;
  pages: number;
  pricesummari: number;
  Date: string;
  ISBN: number;
  Translation: boolean;
  created_at?: string;
  id: number;
  title: string;
  img?: string;
  rating?: number;
  price?: number;
  rate?: number;
  language: string;
  age?: string;
  shabak?: string;
  is_translated?: number;
  genre?: Genre[];
  file: typefilebasket[];
  files?: Price[];
}
