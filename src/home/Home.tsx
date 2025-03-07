import { Container, Stack } from "@mui/material";
import BuildFastSection from "./components/BuildFastSection";
import CustomerSuportSection from "./components/CustomerSuportSection";
import MainSection from "./components/MainSection";
import OnlineSaleSection from "./components/OnlineSaleSection";
import PlansSection from "./components/PlansSection";
import StepsToDeploySection from "./components/StepsToDeploySection";
import TemplateCustomSection from "./components/TemplateCustomSection";
import Buscador from "./components/Buscador";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <MainSection />
      </Container>

      <Container maxWidth={false} className="background-light">
        <Container>
        <Buscador></Buscador>
          <Stack spacing={8} py={8}>
            <PlansSection />
            
            
            
            
            
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Home;
