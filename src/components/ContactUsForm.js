import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import GreenTick from '../Resources/Icon_Valid.svg'

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
                        <div className="TopRow">
                            <div className="NameContainer">
                                <label className="Label" htmlFor="FullName">Full name</label>
                                <Field 
                                className="NameInput" 
                                type="text" 
                                id="FullName"
                                name="FullName" 
                                />
                                <ErrorMessage className="ErrorMsg" name="FullName"/>
                            </div>
                            <div className="EmailContainer">
                                <label className="Label" htmlFor="Email">Email address</label>
                                <Field 
                                className="EmailInput" 
                                type="email" 
                                id="Email"
                                name="Email" 
                                />
                                <ErrorMessage className="ErrorMsg" name="Email"/>                                  
                            </div>
                        </div>
                        <div className="PhoneNumbers">
                            <label className="Label" htmlFor="PhoneNumber1">Phone number 01 - <i>optional</i></label>
                            <Field 
                            className="PhoneNumber1Input" 
                            type="text" 
                            id="PhoneNumber1"
                            name="PhoneNumbers[0]" 
                            />

                            {showPhone2Field && (
                                <div className="SecondPhoneNumber">
                                    <label className="Label" htmlFor="PhoneNumber2">Phone number 02 - <i>optional</i></label>
                                    <Field 
                                    className="PhoneNumber2Input" 
                                    type="text" 
                                    id="PhoneNumber2"
                                    name="PhoneNumbers[1]" 
                                    />
                                </div>                        
                            )}

                            <button className="NewNumberBtn" onClick={handleClickPhone2Btn}>Add new phone number</button>

                        </div>
                        <div className="Message">
                            <label className="MessageLabel" htmlFor="Message">Message</label>
                            <label className="MaxTextLabel">Maximum text length is 500 characters</label>
                            <Field 
                            className="MessageBox"
                            type="text"
                            id="Message"
                            name="Message" 
                            />
                            <ErrorMessage className="ErrorMsg" name="Message"/>
                        </div>
                        <div className="CheckboxAndAddressInfo">
                            <div className="CheckboxContainer">
                                <input className="Checkbox" type="checkbox" checked={showAddressFields} onChange={(e) => setShowAddressFields(e.target.checked)}/>
                                <label className="CheckboxLabel">Add address details</label>
                            </div>

                            {showAddressFields && (
                                <div className="AddressForm">
                                    <div className="TopRow">
                                        <div className="AddressLine1Container"> 
                                            <label className="Label" htmlFor="AddressLine1">Address line 1</label>
                                            <Field 
                                            className="AddressLine1Input" 
                                            type="text" 
                                            id="AddressLine1"
                                            name="AddressLine1" 
                                            />
                                            <ErrorMessage className="ErrorMsg" name="AddressLine1"/>                                        
                                        </div> 
                                        <div className="AddressLine2Container">
                                            <label className="Label" htmlFor="AddressLine2">Address line 2 - <i>optional</i> </label>
                                            <Field 
                                            className="AddressLine2Input" 
                                            type="text" 
                                            id="AddressLine2"
                                            name="AddressLine2" 
                                            />
                                        </div>  
                                    </div>
                                    <div className="TopRow">
                                        <div className="CityTownContainer">
                                            <label className="Label" htmlFor="CityTown">City/Town</label>
                                            <Field 
                                            className="CityTownInput" 
                                            type="text" 
                                            id="CityTown"
                                            name="CityTown" 
                                            />
                                            <ErrorMessage className="ErrorMsg" name="CityTown"/>
                                        </div>
                                        <div className="StateCountyContainer">
                                            <label className="Label" htmlFor="StateCounty">State/County</label>
                                            <Field 
                                            className="StateCountyInput" 
                                            type="text" 
                                            id="StateCounty"
                                            name="StateCounty" 
                                            />
                                            <ErrorMessage className="ErrorMsg" name="StateCounty"/>
                                        </div> 
                                        <div className="PostcodeContainer">
                                            <label className="Label" htmlFor="Postcode">Postcode</label>
                                            <Field 
                                            className="PostcodeInput" 
                                            type="text" 
                                            id="Postcode"
                                            name="Postcode" 
                                            />
                                            <ErrorMessage className="ErrorMsg" name="Postcode"/>
                                        </div>
                                        <div className="CountryContainer">
                                            <label className="Label" htmlFor="Country">Country</label>
                                            <Field 
                                            className="CountryInput" 
                                            type="text" 
                                            id="Country"
                                            name="Country"                    
                                            />
                                            <ErrorMessage className="ErrorMsg" name="Country"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button type="submit" className="SubmitBtn">Submit</button>
                        </div>
                    </div>
                )}
                <div>
                    {isFormSubmitted && formSubmissionStatus === "success" && (
                        <div className="SuccessMsg">
                            <img src={GreenTick} alt="greentick"/>
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