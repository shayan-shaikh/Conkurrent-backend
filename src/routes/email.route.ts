import { Router } from "express";
import { sendSuggestionFeedback } from "../controllers/email.controller";

const emailRouter = Router();

emailRouter.post('/sendFeedback', sendSuggestionFeedback);

export default emailRouter;