import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

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

    const onSubmit = values => {            
        axios({
                method: 'post',
                url: 'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit',
                data: values
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

        if (values.Country) {
            errors.Country = 'Required'
        }

        return errors
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
                    
                    <label className="PhoneTwoLabel" htmlFor="PhoneNumber2">Phone number 02 - <i>optional</i></label>
                    <Field 
                        className="PhoneTwoInput" 
                        type="number" 
                        id="PhoneNumber2"
                        name="PhoneNumbers[0]" 
                    />

                    <button className="NewNumberBtn">Add new phone number</button>
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
                    <input type="checkbox"/>
                    <label>Add address details</label>

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

                    <label className="CountryLabel" htmlFor="country">Country</label>
                    <Field 
                        className="CountryInput" 
                        type="text" 
                        id="Country"
                        name="Country"                    
                    />
                    <ErrorMessage name="Country "/>  
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default ContactUsForm;