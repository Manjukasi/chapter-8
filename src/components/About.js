import {Outlet} from "react-router-dom"
import Profile from "./Profile"
import ProfileClass from "./ProfileClass"
import { Component } from "react"

class About extends Component {

  constructor(props) {
    super(props);
    console.log("Parent-constructor")
  }
  componentDidMount() {
    console.log("Parent-componentDidMount")
  }

  render() {
    console.log("Parent-render")
    return (
      <div>
        <h1>About us Page</h1>
        <p> This has the complete details of the page</p>
        <Outlet />
      </div>
    )  
  }
}
export default About;