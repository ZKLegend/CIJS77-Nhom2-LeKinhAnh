import React, {useState} from "react";

const Student = () => {
    const [student, setStudent] = useState({name: 'Anh', age: 20});

    const clickIncreaseAge = () => {
        setStudent({...student, age: student.age + 1});
    }

    return (
        <div className="Student">
            <div>Hello! I'm {student.name}. I'm {student.age} years old</div>
            <button onClick = {clickIncreaseAge}>Click Me</button>
        </div> 
    )
}

export default Student;