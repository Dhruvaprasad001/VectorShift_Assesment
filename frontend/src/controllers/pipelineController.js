// pipelineController.js
import { submitPipelineService, healthCheck } from '../services/pipelineService';

export async function submitPipeline(pipeline) {
  try {
    // Optional: ping the backend first
    await healthCheck().catch(() => {});
  } catch {}
  return submitPipelineService(pipeline);
}


