import React from "react";

class StudentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "Anh",
            age: 19
        };
    }

   clickIncreaseAge = () => {
        this.setState(
            (prevAge) => {
                return {age: prevAge.age + 1}
            }
        );
    }

    render() {

        return (
           <div className="StudentClass">
            <div>Hello! I'm {this.state.studentName}. I'm {this.state.age} years old</div>
            <button onClick = {this.clickIncreaseAge}>Click Me</button>
           </div>
        )
    }
}

export default StudentClass;