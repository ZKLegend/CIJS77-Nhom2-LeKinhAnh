import React, { useState } from "react";



const Table = () => {
    const [tableData, setTableData] = useState([
        {Company: "Lazada", Contact: "ABC", Country: "VietNam"},
        {Company: "Shopee", Contact: "DEF", Country: "Germany"},
        {Company: "Facebook", Contact: "IGH", Country: "USA"},
        {Company: "Amazon", Contact: "LMN", Country: "Canada"},
        {Company: "Ebay", Contact: "XYZ", Country: "Campuchia"}
    ]);

    const [input, setInput] = useState({company:"", contact:"", country:""});

    const addCompany = () =>{
        // setTableData([...tableData, {[Company]: input}]);
    }
    
    const addContact = () =>{
        // setTableData([...tableData, {Contact: input}]);
    }

    const addCountry = () =>{
        // setTableData([...tableData, {Country: input}]);
    }

   
    const handleInput = (event) =>{
        const {name, value} = event.target;
        console.log("Name", name);
        console.log("Value", value);
        setInput({...input, [name]: value});
        console.log(input);
    }

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th><button onClick={addCompany}>Add</button></th>
                        <th><button onClick={addContact}>Add</button></th>
                        <th><button onClick={addCountry}>Add</button></th>
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