import React from "react";

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    clickIncreaseCount = () => {
        this.setState(
            (prevCount) => {
                return {count: prevCount.count + 1}
            }
        );
    }

    render() {
        
        return (
            <div className="CounterClass">
                <div>Count: {this.state.count}</div>
                <button onClick = {this.clickIncreaseCount}>Click Me</button>
            </div>      
        )
    }
}

export default CounterClass;