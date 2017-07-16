import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

import { ViewRoutes } from "./routes/viewRoutes";


export class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  // Configure application
  public config() {
    this.app.use(express.static(path.join(__dirname, "/../public")));
    this.app.set("views", path.join(__dirname, "/../../views"));
    this.app.set("view engine", "pug");

    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: false
    }));

    //mount cookie parker
    this.app.use(cookieParser());

    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }

  //Create and return Router.
  private routes() {
    let router: express.Router;
    router = express.Router();

    ViewRoutes.initializeRoutes(router);
    this.app.use(router);
  }
}