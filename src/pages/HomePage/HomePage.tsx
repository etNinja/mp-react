import { Helmet } from "react-helmet";
import { TestDiv } from "./styled";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Main - my marketplace</title>
      </Helmet>

      <TestDiv>Main Page</TestDiv>
    </>
  );
};

export default HomePage;
