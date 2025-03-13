import { validationResult } from "express-validator";
import Suggestion  from "../schema/recomms.schema.js";
import { Request, Response } from 'express';
import {v4 as uuidv4} from 'uuid';

export const getAllSuggestions = async (req: Request, res : Response) => {
  try {
    const suggestions = await Suggestion.find().sort({ addedAt: -1 });
    res.json(suggestions);
  } catch (err) {
    console.error('Error fetching suggestions:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

export const getSuggestionById = async (req: Request, res : Response) => {
  try {
    const suggestion = await Suggestion.findById(req.params.id);
    
    if (!suggestion) {
      return res.status(404).json({ message: 'Suggestion not found' });
    }
    
    res.json(suggestion);
  } catch (err) {
    console.error('Error fetching suggestion:', err);
    res.status(500).json({ message: 'Server error' });
  }
}


export const addNewSuggestion = async (req: Request, res : Response) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { topic, description, status, id, submittedBy } = req.body;
    
    const newSuggestion = new Suggestion({
      topic,
      description,
      status: status || 'New',
      addedAt: new Date(),
      completedAt: status === 'Done' ? new Date() : null,
      id: id ? id : uuidv4(),
      submittedBy
    });
    
    const savedSuggestion = await newSuggestion.save();
    res.status(201).json(savedSuggestion);
    console.log('suggestion received --> ', savedSuggestion)
    console.log('Suggestion saved successfully✅')
  } catch (err) {
    console.error('Error creating suggestion:', err);
    res.status(500).json({ message: 'Server error' });
  }
}


export const updateSuggestion = async (req: Request, res : Response)  => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { topic, description, status } = req.body;
    
    // Check if status is being updated to 'Done'
    const suggestion = await Suggestion.findOne({id: req.params.id});
    if (!suggestion) {
      return res.status(404).json({ message: 'Suggestion not found' });
    }
    
    // Set completedAt based on status
    const completedAt = status === 'Done' 
      ? (suggestion.status !== 'Done' ? new Date() : suggestion.completedAt) 
      : null;
    
    const updatedSuggestion = await Suggestion.findOneAndUpdate(
      {id:req.params.id},
      { 
        topic, 
        description, 
        status, 
        completedAt 
      },
      { new: true, runValidators: true }
    );
    
    if (!updatedSuggestion) {
      return res.status(404).json({ message: 'Suggestion not found' });
    }
    
    res.status(200).json(updatedSuggestion);
  } catch (err) {
    console.error('Error updating suggestion:', err);
    res.status(500).json({ message: 'Server error' });
  }
}


export const updateStatus = async (req: Request, res : Response)  => {
    try {
        const { status } = req.body;
        
        // Validate status
        if (!['New', 'ToDo', 'In Progress', 'Done'].includes(status)) {
          return res.status(400).json({ message: 'Invalid status' });
        }
        
        // Find current suggestion
        const suggestion = await Suggestion.findOne({id: req.params.id});
        if (!suggestion) {
          return res.status(404).json({ message: 'Suggestion not found' });
        }
        
        // Set completedAt based on status
        const completedAt = status === 'Done' 
          ? (suggestion.status !== 'Done' ? new Date() : suggestion.completedAt) 
          : null;
        
        const updatedSuggestion = await Suggestion.findOneAndUpdate(
          {id: req.params.id},
          { status, completedAt },
          { new: true }
        );
        
        res.status(200).json(updatedSuggestion);
      } catch (err) {
        console.error('Error updating suggestion status:', err);
        res.status(500).json({ message: 'Server error' });
      }
  }


export const deleteSuggestion = async (req: Request, res : Response)  => {
    try {
      const deletedSuggestion = await Suggestion.findOneAndDelete({id: req.params.id});
      
      if (!deletedSuggestion) {
        return res.status(404).json({ message: 'Suggestion not found' });
      }
      
      res.status(200).json({ message: 'Suggestion deleted successfully' });
    } catch (err) {
      console.error('Error deleting suggestion:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }