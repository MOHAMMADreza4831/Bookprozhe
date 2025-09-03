// import { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import { Book } from "../Data/interfaceDATA";
// // import { useSavestatus } from "@src/hooks/usestatesave";

// type Props = {
//   book: Book;
// };

// export default function SaveIcon({ book }: Props) {
//   // const { handleSubmit, isSaved } = useSavestatus(book); 
//   // const [exist, setExist] = useState(isSaved);

//   const handleClick = () => {
//     handleSubmit();
//     setExist((prev) => !prev);
//   };

//   useEffect(() => {
//     setExist(isSaved);
//   }, [isSaved]);

//   return (
//     <div className="flex justify-center">
//       <div
//         className="w-7 h-7 flex justify-center items-center rounded-full"
//         style={{ backgroundColor: "#FCDCDCCC" }}
//       >
//         <button className="flex items-center" onClick={handleClick}>
//           {exist ? <BookmarkIcon sx={{color:"#DD7475"}} /> : <BookmarkBorderIcon sx={{color:"#DD7475"}} />}
//         </button>
//       </div>
//     </div>
//   );
// }
