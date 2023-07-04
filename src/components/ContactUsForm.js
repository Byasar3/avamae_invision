import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";

const ContactUsForm = () => {

    const initialValues = {
        FullName: '',
        Email: '',
        PhoneNumbers: ['',''],
        Message: '',
        AddressLine1: '',
        AddressLine2: '',
        CityTown: '',
        StateCounty: '',
        Postcode: '',
        Country: ''        
    }

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [formSubmissionStatus, setFormSubmissionStatus]= useState(null)

    const onSubmit = values => {   
        console.log('values:', values)
        axios.post('https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit', {
            FullName: values.FullName,
            EmailAddress: values.Email,
            // check if first phone number exists
            // if it exists, check if second number exists, if second also exists, include both numbers in array
            // if second doesn't exist, only includes first number in array
            // if first doesn't exist (and therefore second doesn't), the array is set to be empty
            PhoneNumbers: values.PhoneNumbers[0] ? (values.PhoneNumbers[1] ? [values.PhoneNumbers[0], values.PhoneNumbers[1]] : [values.PhoneNumbers[0]]) : [],
            Message: values.Message,
            bIncludeAddressDetails: values.showAddressFields,
            AddressDetails: values.showAddressFields
            ? {
                AddressLine1: values.AddressLine1,
                AddressLine2: values.AddressLine2,
                CityTown: values.CityTown,
                StateCounty: values.StateCounty,
                Postcode: values.Postcode,
                Country: values.Country
            }
            : {},
        }).then(response => {
            console.log(response)
            setFormSubmissionStatus("success")
        }).catch(error => {
            console.log(error)
            setFormSubmissionStatus("error")
        }).finally(() => {
            setIsFormSubmitted(true)
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

        if (values.showAddressFields) {
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
        }

        return errors
    }

    const [showPhone2Field, setShowPhone2Field] = useState(false)
    
    const handleClickPhone2Btn = () => {
        setShowPhone2Field(true)
    }

    const [showAddressFields, setShowAddressFields] = useState(false)

    return (
        <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        >
            <Form>
                {!isFormSubmitted &&(
                    <div className="FullForm">
                        <div className="NameAndEmail">
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
                        <div className="PhoneNumbers">
                            <label className="PhoneNumber1Label" htmlFor="PhoneNumber1">Phone number 01 - <i>optional</i></label>
                            <Field 
                            className="PhoneNumber1Input" 
                            type="text" 
                            id="PhoneNumber1"
                            name="PhoneNumbers[0]" 
                            />

                            <button className="NewNumberBtn" onClick={handleClickPhone2Btn}>Add new phone number</button>

                            {showPhone2Field && (
                                <div className="SecondPhoneNumber">
                                    <label className="PhoneNumber2Label" htmlFor="PhoneNumber2">Phone number 02 - <i>optional</i></label>
                                    <Field 
                                    className="PhoneNumber2Input" 
                                    type="text" 
                                    id="PhoneNumber2"
                                    name="PhoneNumbers[1]" 
                                    />
                                </div>                        
                            )}
                        </div>
                        <div className="Message">
                            <label className="MessageLabel" htmlFor="Message">message</label>
                            <label className="MaxTextLabel">maximum text length is 500 characters</label>
                            <Field 
                            as="textarea"
                            id="Message"
                            name="Message" 
                            />
                            <ErrorMessage name="Message"/>
                        </div>
                        <div className="CheckboxAndAddressInfo">
                            <input className="Checkbox" type="checkbox" checked={showAddressFields} onChange={(e) => setShowAddressFields(e.target.checked)}/>
                            <label className="CheckBoxLabel">Add address details</label>
                            {showAddressFields && (
                                <div className="AddressForm">
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
                            <button type="submit" disabled>Submit</button>
                        </div>
                    </div>
                )}
                <div>
                    {isFormSubmitted && formSubmissionStatus === "success" && (
                        <div className="SuccessMsg">
                            <img src="greentick" alt="greentick"/>
                            <h3>Your message has been sent</h3>
                            <h4>We will contact you within 24 hours.</h4>
                        </div>
                    )}
                    {isFormSubmitted && formSubmissionStatus === "error" && (
                        <div className="ErrorMsg">
                            <p>Oh no! Something went wrong. Please try again.</p>
                        </div>   
                    )}
                </div>     
            </Form>
        </Formik>
    )
}

export default ContactUsForm;