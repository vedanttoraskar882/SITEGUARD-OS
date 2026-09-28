import { PilotSubmission } from '../types';

const STORAGE_KEY = 'siteguard_pilot_submissions';

export const getStoredSubmissions = (): PilotSubmission[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Error reading submissions from localStorage:', err);
    return [];
  }
};

export const savePilotSubmission = (data: {
  fullName: string;
  phoneNumber: string;
  email: string;
  organisationName: string;
}): PilotSubmission => {
  const currentSubmissions = getStoredSubmissions();
  
  const newSubmission: PilotSubmission = {
    fullName: data.fullName.trim(),
    phoneNumber: data.phoneNumber.trim(),
    email: data.email.trim(),
    organisationName: data.organisationName.trim(),
    submissionDateTime: new Date().toISOString()
  };

  const updatedSubmissions = [...currentSubmissions, newSubmission];
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSubmissions));
  } catch (err) {
    console.error('Error writing submission to localStorage:', err);
  }

  return newSubmission;
};
