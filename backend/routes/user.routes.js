// routes/submissionRoutes.js
import express from 'express';
import { submitEntry, getSubmissions } from '../controllers/submissionController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

// POST endpoint to handle form submission
router.post('/add',protectRoute, submitEntry);

// GET endpoint to retrieve all submissions
router.get('/submissions',protectRoute, getSubmissions);

export default router;
