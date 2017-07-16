import { Router, NextFunction, Request, Response } from "express";

export class ViewRoutes {
    public static initializeRoutes(router: Router) {
        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.render('greeter');
        });
        router.get('/race', (req: Request, res: Response, next: NextFunction) => {
            res.render('race');
        });
    }
}