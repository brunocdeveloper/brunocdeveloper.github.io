import ContainerHomePage from "./ContainerHomePage";
import { BodyPage, GlobalStyle } from "../../styled-components/home/body/style";
import Technologies from "./technologies";
import SoftSkills from "./soft-skilss";

function HomePage() {
  return (
   <BodyPage>
      <GlobalStyle/>
      <ContainerHomePage/>
      <Technologies/>
      <SoftSkills/>
    </BodyPage> 
  )
}

export default HomePage;
