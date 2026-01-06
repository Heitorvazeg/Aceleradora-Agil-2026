import { FilterProvider } from "./components/context/context";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import Bar from "./components/bar/bar";

// App contém todos os outros componentes.
function App() {
  return (
    <>
      <FilterProvider>
        <Header></Header>
        <Bar></Bar>
        <Body></Body>
        <Footer></Footer>
      </FilterProvider>
    </>
  )
}

export default App;