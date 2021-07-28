import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css'

// setState adalah asynchronous function call
// { Component } adalah properti react, jadi bisa React.Component {}


//function class is render, componentDidMount, handleChange, dimana class nya sendiri adalah App

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search here" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App

//TEMPAT MERENDER KOMPONEN CHILD