import AsksIcon from "./assets/icons/asks.svg"
import Main from "./pages/Main"

function App() {
  return (
    <div className="bg-main w-full h-screen relative bg-no-repeat bg-contain bg-center" style={{ backgroundImage: `url(${AsksIcon})` }}>
      <Main />
      <div className="bg-orange w-[50px] h-[50px] rounded-tr-full absolute bottom-0 left-0" />
      <div className="bg-orange w-[100px] h-[100px] rounded-bl-full absolute top-0 right-0" />
    </div>
  )
}

export default App
