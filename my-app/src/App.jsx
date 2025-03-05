import { useEffect, useState } from 'react'
import Card from './card'
import './App.css'
import Header from './header'
function App() {
  // const [data, setData] = useState(0)

  // var url = '';
  // useEffect(() => {
  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     }).then((data => {
  //       setData(data);
  //       console.log(data);
  //     }))
  //   }, [])

  var labels = ['What to cook', 'Recipes', 'Ingredients','Occasions','About Us']
  var obj  = [{
    name: 'React',
    url: './img/a.png',
    description: 'A JavaScript library for building user interfaces'
  }, {
    name: 'Vite',
    url: './img/b.png',
    description: 'Next generation frontend tooling'
  }, {
    name: 'Tailwind CSS',
    url: './img/c.png',
    description: 'A utility-first CSS framework for rapid UI development'
  }]
  

  return (
    <>
      <Header labels = {labels}></Header>
      <Card items={obj}></Card>

    </>
  )
}

export default App
