// controllers/submissionController.js
import Submission from '../models/submission.js';

export const submitEntry = async (req, res) => {
  try {
    const { username, pCodeLang, stdin, sourcecode } = req.body;
    const submission = new Submission({ username, pCodeLang, stdin, sourcecode });
    await submission.save();
    console.log('Submission inserted into database:', submission);
    res.status(200).json({ success: true, message: 'Entry submitted successfully' });
  } catch (err) {
    console.error('Error inserting submission into database:', err);
    res.status(500).json({ success: false, message: 'Failed to submit entry' });
  }
};

export const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find();
    console.log('Submissions retrieved from database:', submissions);
    res.status(200).json(submissions);
  } catch (err) {
    console.error('Error retrieving submissions from database:', err);
    res.status(500).json({ success: false, message: 'Failed to retrieve submissions' });
  }
};
