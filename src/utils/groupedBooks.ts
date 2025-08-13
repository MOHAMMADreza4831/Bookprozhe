import { Book } from "@src/components/Data/interfaceDATA";


export function groupBooksByDate(
  books: Book[]
): Record<string, Book[]> {
  return books.reduce((groups, book) => {
    if (!book.created_at) return groups;  
    const onlyDate = book.created_at.split("T")[0];
    if (!groups[onlyDate]) {
      groups[onlyDate] = [];
    }
    groups[onlyDate].push(book);
    return groups;
  }, {} as Record<string, Book[]>);
}
