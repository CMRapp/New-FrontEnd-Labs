import React, {Component} from 'react'

let date = new Date()
let singleUser = {
  name: 'John',
  time: date.toDateString(),
}

export default class Section extends Component {
    render() {
        return (
            <section className='welcome'>
                <h1>Welcome, {singleUser.name}!</h1>
                <p>Today's Date: {singleUser.time}</p>
            </section>
        )
    }
}