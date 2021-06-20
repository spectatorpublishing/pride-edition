import FirstFold from '../src/containers/FirstFold';
import Articles from '../src/containers/Articles';
import LetterToEditor from '../src/containers/LetterToEditor';
import Credits from '../src/containers/Credits';

const App = () => {
  return (
    <div className="App">
      <FirstFold />
      <Articles />
      <LetterToEditor />
      <Credits />
    </div>
  );
}

export default App;
