import ContainerHomePage from "./ContainerHomePage";
import { BodyPage, GlobalStyle } from "../../styled-components/home/body/style";
import Technologies from "./technologies";

function HomePage() {
  return (
   <BodyPage>
      <GlobalStyle />
      <ContainerHomePage/>
      <Technologies />
    </BodyPage> 
  )
}

export default HomePage;
