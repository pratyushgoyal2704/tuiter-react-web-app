// import logo from './logo.svg';
// import Labs from "./labs";
// import Tuiter from "./tuiter";
// // import './App.css';
// import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
// import Nav from "./nav";
//
// function App() {
//   return (
//       <BrowserRouter>
//           <div className="container">
//               <h1>Welcome</h1>
//               <Nav/>
//               <Routes>
//                   <Route index element={<Labs/>}/>
//                   <Route path="tuiter" element={<Tuiter/>}/>
//                   <Route path="labs" element={<Labs/>}/>
//               </Routes>
//               <h1>footer</h1>
//           </div>
//
//       </BrowserRouter>
//
//   );
// }
//
// export default App;
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;