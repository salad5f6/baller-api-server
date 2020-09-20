import * as express from 'express';
import 'dotenv/config';
import * as bodyParser from "body-parser";
import * as cors from "cors"

import { connectDB } from "./database";
import PhotoRouter from "./modules/photos/routes.photos"
import AuthRouter from "./modules/auth/routes.auth"
import ProfileRouter from "./modules/profile/routes.profile"
import TeamRouter from "./modules/team/routes.team"
import middlewares from "./middlewares"

const app = express();
//options for cors midddleware
const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
};

//use cors middleware
app.use(cors(options));

//enable pre-flight
app.options('*', cors(options));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(middlewares.authenticateIncomingAPIs)
app.use(PhotoRouter, AuthRouter, ProfileRouter, TeamRouter)

const port: Number = Number(process.env.PORT) || 3000;
const startServer = async () => {
    await app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
};

(async () => {
    await connectDB();
    startServer();
})();