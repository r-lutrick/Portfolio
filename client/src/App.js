import "bootstrap/dist/css/bootstrap.min.css"
import Main from "./static/views/Main";
import Navbar from "./static/views/Navbar";
import "./static/styles/App.css"
// import { useEffect } from "react";

/* 
  *** Colors ***
  Text: #FFFFFF (White)
  Primary: #34be5b (Green)
  Complementary: #be3497 (Purple/Pink)
  Analogous: #52be34 (Light Green), #34bea0 (Turquoise)
  Triadic: #3497be (Teal), #5b34be (Indigo)
*/

function App() {

  /* This can be used to change attributes */
  // const height = document.documentElement.clientHeight * 1
  // const [backdrop, setBackdrop] = useState(lightBackdrop)
  // const changeBAckground = () => {
  //   window.scrollY >= height ? setBackdrop(darkBackdrop) : setBackdrop(lightBackdrop)
  // }
  // useEffect(() => {
  //   changeBAckground();
  //   window.addEventListener("scroll", changeBAckground)
  // })
  
  // let mouse = document.querySelector('.mouse')
  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     mouse.style.
  //   })
  // })

  return (
    <div className="back-drop">
      {/* <div className="mouse"> */}
        <Navbar />
        <Main />
      {/* </div> */}
    </div>
  );
}

export default App;
