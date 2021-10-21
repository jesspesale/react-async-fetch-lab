// create your App component here
import React from 'react'


class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        const url = "http://api.open-notify.org/astros.json"

        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        
    }


    render() {
        return(
            <div>

            </div>
        )
    }


}

export default App