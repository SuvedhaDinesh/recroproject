import "./styles.css";
import Accordion from "./component/Accordion";
import ModifyIconContainer from "./component/ModifyIconContainer";
import IconContextProvider from "./IconContext";
export default function App() {
  return (
    <div className="App">
      <IconContextProvider>
        <h2>Widget to share on social media:</h2>
        <Accordion />
        <ModifyIconContainer />
      </IconContextProvider>
    </div>
  );
}
