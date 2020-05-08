import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Axios from "axios";



const View = () => {
    useEffect(() => {
        fetchData();


    }, []);

    const [tableData, setTabledata] = React.useState([])
    const fetchData = async () => {
        const { data } = await Axios.get("https://jsonplaceholder.typicode.com/todos")
        setTabledata(data)
    }
    const [state, setState] = React.useState({
        columns: [
            { title: 'UserId', field: 'userId', type: 'numeric', width: 80 },
            { title: 'Id', field: 'id', type: 'numeric', width: 80 },
            { title: 'Title', field: 'title' },
            { title: 'Completed', field: 'completed', type: 'boolean' },

        ],
    })
    return (<div>
        <MaterialTable title="User Data"
            options={{ padding: "dense" }}
            columns={state.columns}
            data={tableData}>



        </MaterialTable>

    </div>);



}
export default View;