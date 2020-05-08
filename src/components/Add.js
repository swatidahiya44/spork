import React, { useState } from "react";
import { Card, CardContent, TextField, CardActions, Button, Grid, Box, Typography } from "@material-ui/core";
import falconForm, { isRequired, isEmail } from "falcon-form";
import { useHistory } from "react-router-dom";

const Add = ({ history }) => {
    let [formInitialValues] = useState({
        email: "",
        name: ""
    });
    const formSubmitAction = values => {
        console.log("Form submitted", values);
    };
    const fieldValidators = {
        email: [isRequired, isEmail],
        name: [isRequired]
    };
    const handleSubmit=()=> {
        history.push("/")
        
      }
    const { values, errors, fieldChange, formSubmit } = falconForm(
        formInitialValues,
        formSubmitAction,
        fieldValidators
    );
    //const history = useHistory();

    return (
        
            <div id="Add">
                <Card square style={{ maxWidth: "50vh" }}>
                    <CardContent>
                        <Grid container direction="column">
                            <TextField value={values.name} label="Name" name="name" type="text" onChange={fieldChange}/>
                            <Typography><Box color="red" fontStyle="italic" fontSize={12}>{errors.name}</Box></Typography> 
                            <TextField value={values.email} label="Email" name="email" type="email" onChange={fieldChange} />
                            <Typography><Box color="red" fontStyle="italic" fontSize={12}>{errors.email}</Box></Typography> 
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" onClick={handleSubmit} color="secondary">
                         Submit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        
        
            
        

    );
}
export default Add;