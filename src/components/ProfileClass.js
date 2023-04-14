import react from "react"

class Profile extends react.Component {
    constructor(props){
     super(props);
     console.log("Child-constructor " + this.props.name)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("hello world")
        },1000)
        console.log("Child-componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
      }
    
    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("componentWillUnmount")
    }
    render() {
        console.log("Child-render" + this.props.name)
      return (
        <div>
            <h2>Profile - the class based component</h2>
        </div>
      )  
    }
}
export default Profile;
