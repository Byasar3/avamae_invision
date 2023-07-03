import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import axios from "axios";
import { useState } from "react";

const ContactUsForm = () => {

    const initialValues = {
        FullName: '',
        Email: '',
        PhNumbers: [''],
        PhoneNumbers: ['',''],
        Message: '',
        AddressLine1: '',
        AddressLine2: '',
        CityTown: '',
        StateCounty: '',
        Postcode: '',
        Country: ''        
    }

    const onSubmit = values => {   
        console.log('values:', values)         
        axios.post('https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit', {
            FullName: values.FullName,
            EmailAddress: values.Email,
            PhoneNumbers: [values.PhoneNumbers[0], values.PhoneNumbers[1]],
            Message: values.Message,
            // bIncludeAddressDetails: 
            AddressDetails: {
                AddressLine1: values.AddressLine1,
                AddressLine2: values.AddressLine2,
                CityTown: values.CityTown,
                StateCounty: values.StateCounty,
                Postcode: values.Postcode,
                Country: values.Country
            }
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    const validate = values => {
        const errors = {}

        if (!values.FullName) {
            errors.FullName = 'Required'
        }

        if (!values.Email) {
            errors.Email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
            errors.Email = 'Invalid email address'
        }

        if (!values.Message) {
            errors.Message = 'Required'
        }

        if (!values.AddressLine1) {
            errors.AddressLine1 = 'Required'
        }

        if (!values.CityTown) {
            errors.CityTown = 'Required'
        }

        if (!values.StateCounty) {
            errors.StateCounty = 'Required'
        }

        if (!values.Postcode) {
            errors.Postcode = 'Required'
        }

        if (!values.Country) {
            errors.Country = 'Required'
        }

        return errors
    }

    const [showPhone2Field, setShowPhone2Field] = useState(false)

    const handleClickPhone2Btn = () => {
        setShowPhone2Field(true)
    }

    const [showAddressFields, setShowAddressFields] = useState(false)

    const handleCheckbox = () => {
        setShowAddressFields(true)
    }

    return (
        <Formik 
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}>
            <Form>
                <div>
                    <label className="NameLabel" htmlFor="FullName">Full name</label>
                    <Field 
                        className="NameInput" 
                        type="text" 
                        id="FullName"
                        name="FullName" 
                    />
                    <ErrorMessage name="FullName"/>

                    <label className="EmailLabel" htmlFor="Email">Email address</label>
                    <Field 
                        className="EmailInput" 
                        type="email" 
                        id="Email"
                        name="Email" 
                    />
                    <ErrorMessage name="Email"/>                
                </div>
                <div>
                    <label className="PhoneNumber1Label" htmlFor="PhoneNumber1">Phone number 01 - <i>optional</i></label>
                    <Field 
                        className="PhoneNumber1Input" 
                        type="number" 
                        id="PhoneNumber1"
                        name="PhoneNumbers[0]" 
                    />
            
                    <button className="NewNumberBtn" onClick={handleClickPhone2Btn}>Add new phone number</button>
                    {showPhone2Field && (
                    <div>
                        <label className="PhoneNumber2Label" htmlFor="PhoneNumber2">Phone number 02 - <i>optional</i></label>
                        <Field 
                            className="PhoneNumber2Input" 
                            type="number" 
                            id="PhoneNumber2"
                            name="PhoneNumbers[1]" 
                        />
                    </div>                        
                    )}
                </div>
                <div>
                    <label className="MessageLabel" htmlFor="Message">message</label>
                    <label className="MaxTextLabel">maximum text length is 500 characters</label>
                    <Field 
                        as="textarea"
                        id="Message"
                        name="Message" 
                    />
                    <ErrorMessage name="Message"/>
                </div>
                <div>
                    <input type="checkbox" checked={showAddressFields} onChange={(e) => setShowAddressFields(e.target.checked)}/>
                    <label>Add address details</label>
                    {showAddressFields && (
                        <div>
                            <label className="AddressLine1Label" htmlFor="AddressLine1">Address line 1</label>
                            <Field 
                                className="AddressLine1Input" 
                                type="text" 
                                id="AddressLine1"
                                name="AddressLine1" 
                            />
                            <ErrorMessage name="AddressLine1"/>

                            <label className="AddressLine2Label" htmlFor="AddressLine2">Address line 2 - <i>optional</i> </label>
                            <Field 
                                className="AddressLine2Input" 
                                type="text" 
                                id="AddressLine2"
                                name="AddressLine2" 
                            />   

                            <label className="CityTownLabel" htmlFor="CityTown">City/Town</label>
                            <Field 
                                className="CityTownInput" 
                                type="text" 
                                id="CityTown"
                                name="CityTown" 
                            />
                            <ErrorMessage name="CityTown"/>

                            <label className="StateCountyLabel" htmlFor="StateCounty">State/County</label>
                            <Field 
                                className="StateCountyInput" 
                                type="text" 
                                id="StateCounty"
                                name="StateCounty" 
                            />
                            <ErrorMessage name="StateCounty"/>  

                            <label className="PostcodeLabel" htmlFor="Postcode">Postcode</label>
                            <Field 
                                className="PostcodeInput" 
                                type="text" 
                                id="Postcode"
                                name="Postcode" 
                            />
                            <ErrorMessage name="Postcode"/>

                            <label className="CountryLabel" htmlFor="Country">Country</label>
                            <Field 
                                className="CountryInput" 
                                type="text" 
                                id="Country"
                                name="Country"                    
                            />
                            <ErrorMessage name="Country"/> 
                        </div>
                    )}
 
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default ContactUsForm;