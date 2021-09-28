import Server from "../domain/server";
import express from 'express';
import ErrorHandler from "../presentation/error.handler";

export default class ExpressServer implements Server {
    app: any;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.all('*', function (req: any, res: any, next: any) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type,authentication');
            next();
        });
        this.app.options("*", function (req: any, res: any) {
            res.end();
        });
    }

    async on({ method, url, fn }: { method: string; url: string; fn: any; }): Promise<void> {
        this.app[method](this.convertUrl(url), async (req: any, res: any, next: any) => {
            try {
                const data = await fn(req.params, req.body)
                return res.json(data);
            } catch (error: unknown) {
                if (error instanceof ErrorHandler) {
                    res.status(error.code)
                    res.send(error.message)
                }
                next(error);
            }
        })
    }

    async listen({ port }: { port: number }) {
        this.app.listen(port);
    }

    convertUrl(url: string): string {
        return url.replace(/\$\{/g, ":").replace(/\}/g, "");
    }

}