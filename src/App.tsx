import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>My Blog</h1>
      <Outlet/>
    </>
  )
}

export default App
