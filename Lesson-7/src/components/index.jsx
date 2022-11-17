import React, { useEffect, useState } from "react";

const Table = () => {
    const [tableData, setTableData] = useState([
        {Company: "Lazada", Contact: "ABC", Country: "VietNam"},
        {Company: "Shopee", Contact: "DEF", Country: "Germany"},
        {Company: "Facebook", Contact: "IGH", Country: "USA"},
        {Company: "Amazon", Contact: "LMN", Country: "Canada"},
        {Company: "Ebay", Contact: "XYZ", Country: "Campuchia"}
    ]);

    const [input, setInput] = useState({company:"", contact:"", country:""});

    const handleClick = () =>{
        setTableData([...tableData, {Company: input.company, Contact: input.contact, Country: input.country}]);
        localStorage.setItem("data", JSON.stringify([...tableData, input]));
        setInput({company:"", contact:"", country:""});
    }

    useEffect(() => {
        const localTableData = JSON.parse(localStorage.getItem("data"));
        console.log(localTableData);
        if (localTableData != null) {
            setTableData([...localTableData]);
        }
    }, []);
    
    const handleInput = (event) =>{
        const {name, value} = event.target;
        console.log("Name", name);
        console.log("Value", value);
        setInput({...input, [name]: value});
        console.log(input);
    }

    useEffect(() => {

    })

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th><button onClick={handleClick} name="Company">Add</button></th>
                        <th><button onClick={handleClick}>Add</button></th>
                        <th><button onClick={handleClick}>Add</button></th>
                    </tr>
                    <tr>
                        <th><input type="text" onChange={handleInput} value = {input.company} name="company"/></th>
                        <th><input type="text" onChange={handleInput} value = {input.contact} name="contact"/></th>
                        <th><input type="text" onChange={handleInput} value = {input.country} name="country"/></th>
                    </tr>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((value, index) => (
                        <tr>
                            <td>{tableData[index].Company}</td>
                            <td>{tableData[index].Contact}</td>
                            <td>{tableData[index].Country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;