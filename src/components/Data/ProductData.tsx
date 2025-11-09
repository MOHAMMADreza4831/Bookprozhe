import image1 from "@src/assets/image/The forest princess img.png";
import image2 from "@src/assets/image/The story of a girl img.png";
import image3 from "@src/assets/image/1730804595-81YyraOaX1L.png";
import image4 from "@src/assets/image/images.png";
import image5 from "@src/assets/image/Mystery.png";
import image6 from "@src/assets/image/Adventure.png";
import image7 from "@src/assets/image/sina.png";
import image8 from "@src/assets/image/Criminal.png";
import darsi from "@src/assets/image/61a2fa9d3556af9abf2f0c3e397909a5.png";
import manga from "@src/assets/image/08de020ad7502a0f6334d486430fd39f.png";
import roman from "@src/assets/image/b7d132d9591b535b86a47febf6f390e3.png";
import icone1 from "@src/assets/image/ProfileCircle-Outline-32px.png";
// import icone2 from "@src/assets/image/icons8-update-50.png";
// import icone3 from "@src/assets/image/icons8-profile-50.png";

export const alarm = [
  { title: "بروزرسانی امنیتی ", image: icone1 },
  // { title: "بروزرسانی کنید ", image: icone2 },
  // { title: "شما پروفایل خود را کامل کردید ", image: icone3 },
];

// export const genertitle = [
//   { title: "همه", id: 0 },
//   { title: "جنایی", id: 1 },
//   { title: "تاریخی", id: 3 },
//   { title: "معمایی", id: 2 },
// ];

export const genre = [
  {
    success: true,
    snackbar: null,
    data: [
      {
        id: 3,
        title: "علمی",
        image: image7,
        created_at: null,
        updated_at: null,
        book: [
          {
            id: 65,
            language: "فارسی",
            age: 18,
            title: "title",
            description: "توضیجات کتاب ارباب حلقه ها",
            summary: "خلاصه کتاب",
            is_translated: 1,
            shabak: "123-123-123",
            pages: "220",
            rate: 1,
            rate_count: 6,
            image: "2",
            created_at: "2025-08-05T19:04:40.000000Z",
            updated_at: "2025-10-05T12:02:22.000000Z",
            picture: image1,
            pivot: {
              genre_id: 3,
              book_id: 65,
            },
          },
          {
            id: 65,
            language: "فارسی",
            age: 18,
            title: "title",
            description: "توضیجات کتاب ارباب حلقه ها",
            summary: "خلاصه کتاب",
            is_translated: 1,
            shabak: "123-123-123",
            pages: "220",
            rate: 1,
            rate_count: 6,
            image: "2",
            created_at: "2025-08-05T19:04:40.000000Z",
            updated_at: "2025-10-05T12:02:22.000000Z",
            picture: image1,
            pivot: {
              genre_id: 3,
              book_id: 65,
            },
          },
          {
            id: 65,
            language: "فارسی",
            age: 18,
            title: "title",
            description: "توضیجات کتاب ارباب حلقه ها",
            summary: "خلاصه کتاب",
            is_translated: 1,
            shabak: "123-123-123",
            pages: "220",
            rate: 1,
            rate_count: 6,
            image: "2",
            created_at: "2025-08-05T19:04:40.000000Z",
            updated_at: "2025-10-05T12:02:22.000000Z",
            picture: image1,
            pivot: {
              genre_id: 3,
              book_id: 65,
            },
          },
        ],
      },
      {
        id: 2,
        title: "معمایی",
        image: image5,
        created_at: null,
        updated_at: null,
        book: [
          {
            id: 65,
            title: "the story of a girl",
            author: "نویسنده",
            language: "فارسی",
            age: 18,
            description: "توضیجات کتاب ارباب حلقه ها",
            summary: "خلاصه کتاب",
            is_translated: 1,
            shabak: "123-123-123",
            pages: "220",
            rate: 1,
            rate_count: 6,
            image: "2",
            created_at: "2025-08-05T19:04:40.000000Z",
            updated_at: "2025-10-05T12:02:22.000000Z",
            picture: image2,
            pivot: {
              genre_id: 2,
              book_id: 65,
            },
          },
        ],
      },
      {
        id: 1,
        title: "جنایی",
        image: image8,
        created_at: "2025-08-03T09:50:01.000000Z",
        updated_at: "2025-08-03T09:50:43.000000Z",
        book: [
          {
            id: 64,
            title: "",
            author: "rere",
            language: "farsi",
            age: 12,
            description: "tetett",
            summary: "rrereerr",
            is_translated: 0,
            shabak: "123469",
            pages: "222",
            rate: 1.1166666666667,
            rate_count: 6,
            image: "1",
            created_at: "2025-08-05T18:46:32.000000Z",
            updated_at: "2025-10-05T12:10:22.000000Z",
            picture: image3,
            pivot: {
              genre_id: 1,
              book_id: 64,
            },
          },
        ],
      },
      {
        id: 4,
        title: "جنایی",
        image: manga,
        created_at: "2025-08-03T09:50:01.000000Z",
        updated_at: "2025-08-03T09:50:43.000000Z",
        book: [
          {
            id: 64,
            author: "rere",
            language: "farsi",
            age: 12,
            title: "title",
            description: "",
            summary: "rrereerr",
            is_translated: 0,
            shabak: "123469",
            pages: "222",
            rate: 1.1166666666667,
            rate_count: 6,
            image: "1",
            created_at: "2025-08-05T18:46:32.000000Z",
            updated_at: "2025-10-05T12:10:22.000000Z",
            picture: image4,
            pivot: {
              genre_id: 1,
              book_id: 64,
            },
          },
        ],
      },
      {
        id: 5,
        title: "رومان",
        image: roman,
        created_at: "2025-08-03T09:50:01.000000Z",
        updated_at: "2025-08-03T09:50:43.000000Z",
        book: [
          {
            id: 64,
            author: "rere",
            language: "farsi",
            age: 12,
            title: "title",
            description: "",
            summary: "rrereerr",
            is_translated: 0,
            shabak: "123469",
            pages: "222",
            rate: 1.1166666666667,
            rate_count: 6,
            image: "1",
            created_at: "2025-08-05T18:46:32.000000Z",
            updated_at: "2025-10-05T12:10:22.000000Z",
            picture: image5,
            pivot: {
              genre_id: 1,
              book_id: 64,
            },
          },
        ],
      },
      {
        id: 6,
        title: "درسی",
        image: darsi,
        created_at: "2025-08-03T09:50:01.000000Z",
        updated_at: "2025-08-03T09:50:43.000000Z",
        book: [
          {
            id: 64,
            author: "rere",
            language: "farsi",
            age: 12,
            title: "title",
            description: "",
            summary: "rrereerr",
            is_translated: 0,
            shabak: "123469",
            pages: "222",
            rate: 1.1166666666667,
            rate_count: 6,
            image: "1",
            created_at: "2025-08-05T18:46:32.000000Z",
            updated_at: "2025-10-05T12:10:22.000000Z",
            picture: image5,
            pivot: {
              genre_id: 1,
              book_id: 64,
            },
          },
        ],
      },
    ],
    pagination: {
      total: 6,
      totalPages: 1,
      perPage: 10,
      currentPage: 1,
    },
  },
];

export const Dataemail = [
  {
    id: 1,
    firstname: "mohammad",
    lastname: "mohammadzade",
    password: 123456,
    email: "mmhmdzadh1384@gmail.com",
  },
];

export const Card_detail = [
  {
    Author: "Author Author",
    Rate: 2,
    numberpage: 30,
    Language: "ENG",
    price: "$ 1200",
    image: image1,
    id: 1,
    aboute:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,aperiam deleniti ipsum labore cupiditate, ratione pariatur velit              aliquid magnam nihil, quis dignissimos nisi amet dolorem delectus              porro similique mollitia eveniet! Lorem ipsum dolor sit amet              consectetur adipisicing elit. Iste accusamus alias doloribus              laborum id expedita sint numquam omnis ducimus! Praesentium ipsa            eaque modi, inventore aliquam consectetur deleniti sequi ex            eveniet?",
    title: " the forest princess ",
    Genre: "Criminal",
  },
  {
    Author: " Author Author",
    aboute:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,aperiam deleniti ipsum labore cupiditate, ratione pariatur velit              aliquid magnam nihil, quis dignissimos nisi amet dolorem delectus              porro similique mollitia eveniet! Lorem ipsum dolor sit amet              consectetur adipisicing elit. Iste accusamus alias doloribus              laborum id expedita sint numquam omnis ducimus! Praesentium ipsa            eaque modi, inventore aliquam consectetur deleniti sequi ex            eveniet?",
    Rate: 1.2,
    numberpage: 210,
    Language: "PR",
    price: "$ 1200",
    image: image2,
    id: 2,
    title: "the story of a girl ",
    Genre: "Mystery",
  },
  {
    Author: "Author Author",
    aboute:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,aperiam deleniti ipsum labore cupiditate, ratione pariatur velit              aliquid magnam nihil, quis dignissimos nisi amet dolorem delectus              porro similique mollitia eveniet! Lorem ipsum dolor sit amet              consectetur adipisicing elit. Iste accusamus alias doloribus              laborum id expedita sint numquam omnis ducimus! Praesentium ipsa            eaque modi, inventore aliquam consectetur deleniti sequi ex            eveniet?",

    Rate: 5,
    numberpage: 202,
    Language: "FRC",
    price: "$ 1200",
    image: image3,
    id: 3,
    title: "the lord of Rings",
    Genre: "Adventure",
  },
  {
    Author: "Author Author",
    aboute:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,aperiam deleniti ipsum labore cupiditate, ratione pariatur velit              aliquid magnam nihil, quis dignissimos nisi amet dolorem delectus              porro similique mollitia eveniet! Lorem ipsum dolor sit amet              consectetur adipisicing elit. Iste accusamus alias doloribus              laborum id expedita sint numquam omnis ducimus! Praesentium ipsa            eaque modi, inventore aliquam consectetur deleniti sequi ex            eveniet?",

    Rate: 2.2,
    numberpage: 201,
    Language: "ENG",
    price: "$ 1200",
    image: image4,
    id: 4,
    title: "the lord of Rings",
    Genre: "Scientific",
  },
];

export const Genredata = [
  { Gener: "علمی", id: 1, image: image7 },
  { Gener: "ماجراجویی", id: 2, image: image6 },
  { Gener: "رمز و راز", id: 2, image: image5 },
  { Gener: "جنایی", id: 2, image: image8 },
];

export const RecommendedForyou = [
  { Gener: "درسی", id: 1, image: darsi },
  { Gener: "مانگا", id: 2, image: manga },
  { Gener: "رومان", id: 2, image: roman },
  { Gener: "جنایی", id: 2, image: image8 },
];
