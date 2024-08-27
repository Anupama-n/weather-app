
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import './App.css';
import UimReact from '@iconscout/react-unicons-monochrome/icons/uim-react'

function App() {
  return (
    <div className="mx-auto max-auto max-w-screen-md mt-4 py-5 px32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs/>
    </div>
  );
}

export default App;
