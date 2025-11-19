import { PipelineToolbar } from './components/common/Toolbar';
import { PipelineUI } from './components/PipelineUI';
import { SubmitButton } from './components/common/SubmitButton';

function App() {
  return (
    <div className="space-y-4">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
