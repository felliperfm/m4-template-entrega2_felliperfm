import { booksDatabase, generateId } from "../database/database";
import { IBook, TCreateBook, TUpdateBook } from "../interfaces/book";

interface IBooksServices {
    create(body: TCreateBook): IBook;
    get(query?: string): IBook[];
    getOne(id: string): IBook;
    update(id: string, body: TUpdateBook): IBook;
    delete(id: string): void;
}

export class BooksServices implements IBooksServices {
    create(body: TCreateBook): IBook {
        const date = new Date();

        const newBook: IBook = {
            id: generateId(),
            name: body.name,
            pages: body.pages,
            category: body.category,
            createdAt: date,
            updatedAt: date,
        };

        booksDatabase.push(newBook);

        return newBook;
    };

    get(query?: string): IBook[] {
        if (query) {
            const searchBooksDatabase = booksDatabase.filter(book => book.name.toLowerCase().includes(query.toLowerCase()));
            return searchBooksDatabase;
        };

        return booksDatabase;
    };

    getOne(id: string): IBook {
        const book = booksDatabase.find((book) => book.id === Number(id)) as IBook;

        return book;
    };

    update(id: string, body: TUpdateBook): IBook {
        const date = new Date();

        const currentBook = booksDatabase.find((book) => book.id === Number(id)) as IBook;

        const newBook = {... currentBook, ...body, updatedAt: date};

        const index = booksDatabase.findIndex((book) => book.id === Number(id));

        booksDatabase.splice(index, 1, newBook);

        return newBook;
    };

    delete(id: string): void {
        const index = booksDatabase.findIndex((books) => books.id === Number(id));

        booksDatabase.splice(index, 1);
    };
};
