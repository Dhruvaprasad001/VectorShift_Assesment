// SubmitButton.jsx
import { useStore } from '../../store';
import { submitPipeline } from '../../controllers/pipelineController';

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const onSubmit = async () => {
    try {
      await submitPipeline({ nodes, edges });
      // For demo purpose only
      // eslint-disable-next-line no-console
      console.log('Submitted pipeline', { nodes, edges });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Submit failed:', e?.message || e);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={onSubmit}
        className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-500 transition-colors"
      >
        Submit
      </button>
    </div>
  );
}


