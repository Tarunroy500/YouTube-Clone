import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body.js';
import Head from "./components/head.js";
import store from './utils/store.js';
function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-end gap-1">
        <Head/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;



// -Head
// -Body
//   -sidebars
//     -MenuItems
//   -MainContainer
//     -buttonlist
//     -VideoContainer
//       -Video
      

