import Card from './Card'
import './App.css'
import Contacts from './Contacts'


export default function App() {
  return (
    
    <div>
      <h1>Contacts</h1>
      <Card 
      name={Contacts[0].name} 
      img={Contacts[0].img}
      phone={Contacts[0].phone}
      email={Contacts[0].email}
      />
      <Card 
      name={Contacts[1].name} 
      img={Contacts[1].img}
      phone={Contacts[1].phone}
      email={Contacts[1].email}
      />
      <Card 
      name={Contacts[2].name} 
      img={Contacts[2].img}
      phone={Contacts[2].phone}
      email={Contacts[2].email}
      />
      
    </div>

  )
}