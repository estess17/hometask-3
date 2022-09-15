import {Router, Request, Response, NextFunction} from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/note/note.validation';
import NoteService from '@/resources/note/note.service';


class NoteController implements Controller {
    public path = '/notes';
    public router = Router();
    private noteService = new NoteService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.get(`${this.path}`, this.getAll);
        this.router.get(`${this.path}/:id`, this.getById);
        this.router.delete(`${this.path}/:id`, this.delete);
        this.router.post(`${this.path}`, validationMiddleware(validate.create), this.create);
    }

    private create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const {name, category, content} = req.body;

            const note = await this.noteService.create(name, category, content);

            res.status(201).json({note});
        } catch (error) {
            next(new HttpException(400, 'Cannot create note'));
        }
    };

    private getAll = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const notes = await this.noteService.getAll();

            res.status(201).json({notes});
        } catch (error) {
            next(new HttpException(400, 'Cannot get notes'));
        }
    };

    private getById = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const id = req.params.id
            const note = await this.noteService.getById(id);

            res.status(201).json({note});
        } catch (error) {
            next(new HttpException(400, 'Cannot get notes'));
        }
    };

    private delete = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const id = req.params.id
            const note = await this.noteService.delete(id);

            res.status(201).json({note});
        } catch (error) {
            next(new HttpException(400, 'Cannot get notes'));
        }
    };
}

export default NoteController;
