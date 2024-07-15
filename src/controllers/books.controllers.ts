import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

interface IBooksControllers {
    create(req: Request, res: Response): Response;
    get(req: Request, res: Response): Response;
    getOne(req: Request, res: Response): Response;
    update(req: Request, res: Response): Response;
    delete(req: Request, res: Response): Response;
};

export class BooksControllers implements IBooksControllers {
    create(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        const create = booksServices.create(req.body);

        return res.status(201).json(create);
    };

    get(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        const get = booksServices.get(req.query.search as string);

        return res.status(200).json(get);
    };

    getOne(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        const getOne = booksServices.getOne(req.params.id);

        return res.status(200).json(getOne);
    };

    update(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        const update = booksServices.update(req.params.id, req.body);

        return res.status(200).json(update);
    };

    delete(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        booksServices.delete(req.params.id);

        return res.status(204);
    };
};
