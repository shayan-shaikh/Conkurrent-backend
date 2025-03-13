import { Router } from "express";
import emailRouter from "./email.route";
import suggestionRouter from "./suggestion.route";

const mainRoutes = Router();

mainRoutes.use('/email', emailRouter);
mainRoutes.use('/suggestion', suggestionRouter)


export default mainRoutes;