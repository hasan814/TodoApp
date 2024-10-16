import ReduxProvider from "@/providers/ReduxProvider";
import HomePage from "@/components/templates/HomePage";

const Home = () => {
  return (
    <ReduxProvider>
      <HomePage />
    </ReduxProvider>
  );
};

export default Home;
