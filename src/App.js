import logo from './logo.svg';
// import './App.css';
import ColorBox from "./components/ColorBox";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      {/*<TodoFeature>*/}

      {/*</TodoFeature>*/}
        <AlbumFeature></AlbumFeature>
    </div>
  );
}

export default App;
