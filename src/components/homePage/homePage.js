import ContainerHomePage from "./containerHomePage";
import { BodyPage, GlobalStyle } from "../../styled-components/home/body/style";
import Technologies from "./technologies";
import SoftSkills from "./soft-skilss";
import AgileMethods from "./agileMethodologies";

function HomePage() {
  return (
   <BodyPage>
      <GlobalStyle/>
      <ContainerHomePage/>
      <Technologies/>
      <SoftSkills/>
      <AgileMethods/>
    </BodyPage> 
  )
}

export default HomePage;
