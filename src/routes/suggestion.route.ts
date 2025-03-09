import { Router } from "express";
import { body, validationResult } from 'express-validator';
import { addNewSuggestion, deleteSuggestion, getAllSuggestions, getSuggestionById, updateStatus, updateSuggestion } from "../controllers/recomms.controller";


const validateSuggestion = [
    body('topic').notEmpty().withMessage('Topic is required').trim().escape(),
    body('description').notEmpty().withMessage('Description is required').trim().escape(),
    body('status').optional().isIn(['New', 'ToDo', 'In Progress', 'Done']).withMessage('Invalid status')
];


const suggestionRouter = Router();

suggestionRouter.get('/suggestions', getAllSuggestions);

// GET a single suggestion by ID
suggestionRouter.get('/suggestions/:id', getSuggestionById);

// POST a new suggestion
suggestionRouter.post('/suggestions', validateSuggestion, addNewSuggestion);

// PUT (update) a suggestion
suggestionRouter.put('/suggestions/:id', validateSuggestion, updateSuggestion);

suggestionRouter.patch('/suggestions/:id/status', updateStatus);

// DELETE a suggestion
suggestionRouter.delete('/suggestions/:id', deleteSuggestion);

export default suggestionRouter;