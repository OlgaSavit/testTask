import ContainerComponent from "./components/Container";
import CardBlock from "./blocks/CardBlock";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "./img/banner.png";
import AuthBlock from "./blocks/Auth/index";
import { useState } from "react";
import SuccessRegistration from "./blocks/SuccessRegistration";
import { Container } from "@mui/material";
function App() {
  const [successAddUser, setSuccessUser] = useState(false);
  return (
    <div>
      <Header />
      <ContainerComponent type={"light"}>
        <Banner
          title={"Test assignment for front-end developer"}
          text={
            "What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
          }
          bgImg={"../../img/banner.png"}
        ></Banner>
      </ContainerComponent>
      <ContainerComponent>
        <CardBlock successAddUser={successAddUser} />
        {!successAddUser ? (
          <AuthBlock setSuccessUser={setSuccessUser} />
        ) : (
          <SuccessRegistration />
        )}
      </ContainerComponent>
    </div>
  );
}

export default App;
