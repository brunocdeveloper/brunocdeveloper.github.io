import ContainerHomePage from "./components/homepage";
import { BodyPage, GlobalStyle } from "./styled-components/home/body/style";

function App() {
  return (
    <BodyPage>
      <GlobalStyle/>
      <ContainerHomePage></ContainerHomePage>
    </BodyPage>
  );
}

export default App;
 