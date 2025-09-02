import { Book } from "../Data/interfaceDATA";
import axioshandel from "../login/header";

type datatype = {
  collection: string;
  ref_type: string;
  ref_id: string;
};

export default function PostCollection(book: datatype) {
  axioshandel.post("/collection-items", {
    collection: book.collection,
    ref_type: book.ref_type,
    ref_id: book.ref_id,
  });
}
