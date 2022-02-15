import ContainerHomePage from "./ContainerHomePage";
import { BodyPage, GlobalStyle } from "../styled-components/home/body/style";

function HomePage() {
  return (
   <BodyPage>
      <GlobalStyle />
      <ContainerHomePage/>
    </BodyPage> 
  )
}

export default HomePage;
