import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Records from "./components/Records";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Records />
      </Layout>
    </div>
  );
}

export default App;
