import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            form:{
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "",
                user_id: this.props.current_user.id
            },
            success: false
        }
    }
    // handles changes in the form (watches for the event)
    handleChange = (e) => {
        // destructuring form from state
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    // handles the logic once we click the submit button
    handleSubmit = (e) => {
        // prevents unnecessary refresh
        e.preventDefault()
        // creates a new apartment using method from app.js using the info in the form through state 
        this.props.createNewApartment(this.state.form)
        // once we click submit we set success to true (which will redirect us to my apartments)
        this.setState({ success: true })
    }

    render(){
        console.log("current_user", this.props.current_user);
        return(
            <React.Fragment>
                <h3>Add an Apartment</h3>
                <div className="body-container">
                    <div className="form">
                        <Form>
                        <FormGroup>
                                <Label>Street</Label>
                                <Input 
                                    type="text"
                                    name="street"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.street }
                                />
                            </FormGroup>                            
                            <FormGroup>
                                <Label>City</Label>
                                <Input 
                                    type="text"
                                    name="city"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.city }
                                />
                            </FormGroup>                            
                            <FormGroup>
                                <Label>State</Label>
                                <Input 
                                    type="text"
                                    name="state"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.state }
                                />
                            </FormGroup>                            
                            <FormGroup>
                                <Label>Manager</Label>
                                <Input 
                                    type="text"
                                    name="manager"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.manager }
                                />
                            </FormGroup>                                  
                            <FormGroup>
                                <Label>Manager Email</Label>
                                <Input 
                                    type="text"
                                    name="email"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.email }
                                />
                            </FormGroup>     
                            <FormGroup>
                                <Label>Monthly Rent</Label>
                                <Input 
                                    type="number"
                                    name="price"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.price}
                                />
                            </FormGroup>                         
                            <FormGroup>
                                <Label>Bedrooms</Label>
                                <Input 
                                    type="number"
                                    name="bedrooms"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.bedrooms }
                                />
                            </FormGroup>                            
                            <FormGroup>
                                <Label>Bathrooms</Label>
                                <Input 
                                    type="number"
                                    name="bathrooms"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.bathrooms }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Pets</Label>
                                <Input 
                                    type="text"
                                    name="pets"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.pets }
                                />
                            </FormGroup>
                            <Button
                                name="submit"
                                color="secondary"
                                onClick={ this.handleSubmit }
                                >
                                Add a New Apartment
                            </Button>
                        </Form>
                    </div>
                </div>
                { this.state.success && <Redirect to="/myapartments" />}
            </React.Fragment>
        )
    }
}

export default ApartmentNew