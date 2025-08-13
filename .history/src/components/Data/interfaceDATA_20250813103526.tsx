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
    file:string
    language: string;
    book_id: number;
    price: string;
    created_at: null;
    updated_at: null;

    status: number;
  };
}

export interface shopdata { 
  book_files : [] 
  file_id:number
id:number
image:string
order_id:number
price:string
status:string
title:string
updated_at:string
user_id:number
}



export interface databook_files { 
  book_files:{


    book_id:number
  created_at:null
  file:string
  id : number
  languageP:string
  price : string
  status:string
  updated_at:null
  }

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
  book_files:databook_files[]
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
  file_id:number
  rating?: number;
  price?: number;
  rate?: number;
  language: string;
  age?: string;
  shabak?: string;
  is_translated?: number;
  genre?: Genre[];
  file: typefilebasket;
  files?: Price[];
}
