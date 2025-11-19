// pipelineService.js
import { api } from './api';

export async function submitPipelineService(payload) {
  // Example endpoint - adjust to your backend route
  return api.post('/pipeline/submit', payload);
}

export async function healthCheck() {
  return api.get('/health');
}


