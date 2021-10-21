// create your App component here
import React from 'react'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        const url = "http://api.open-notify.org/astros.json"

        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
     }


    render() {
        return(
            <div>
              {this.state.peopleInSpace.map(people => <h1>{people.name}</h1>)}
            </div>
        )
    }


}

export default App