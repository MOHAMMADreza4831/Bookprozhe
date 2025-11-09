export type Book = {
  id: string;
  title: string;
  author: string;
  language: string;
  age: number;
  description: string;
  summary: string;
  is_translated: number;
  shabak: string;
  pages: string;
  rate: number;
  rate_count: number;
  image: string;
  created_at: string;
  updated_at: string;
  picture: string;
  GenreBook: [];
};
export interface book {
  id: string;
  title: string;
  author: string;
  language: string;
  age: number;
  description: string;
  summary: string;
  is_translated: number;
  shabak: string;
  pages: string;
  rate: number;
  rate_count: number;
  image: string;
  created_at: string;
  updated_at: string;
  picture: string;
}

export interface GenreBook {
  book: [];
  created_at?: string;
  id: number;
  image: string;
  title: string;
  updated_at: string;
}
