import { useFormik } from "formik";

const ContactUsForm = () => {

    const formik = useFormik({
        initialValues: {
            FullName: '',
            Email: '',
            PhoneNumber1: '',
            PhoneNumber2: '',
            Message: '',
            AddressLine1: '',
            AddressLine2: '',
            CityTown: '',
            StateCounty: '',
            Postcode: '',
            Country: ''
        },
        onSubmit: values => {
            console.log('form data', values)
        }
    })

    console.log('Form Values', formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label className="NameLabel" htmlFor="FullName">Full name</label>
                    <input 
                        className="NameInput" 
                        type="text" 
                        id="FullName" 
                        onChange={formik.handleChange} 
                        value={formik.values.FullName}
                    />

                    <label className="EmailLabel" htmlFor="Email">Email address</label>
                    <input 
                        className="EmailInput" 
                        type="email" 
                        id="Email" 
                        onChange={formik.handleChange} 
                        value={formik.values.Email}
                    />                    
                </div>
                <div>
                    <label className="PhoneNumber1Label" htmlFor="PhoneNumber1">Phone number 01 - <i>optional</i></label>
                    <input 
                        className="PhoneNumber1Input" 
                        type="number" 
                        id="PhoneNumber1" 
                        onChange={formik.handleChange} 
                        value={formik.values.PhoneNumber1}
                    />
                    
                    <label className="PhoneTwoLabel" htmlFor="PhoneNumber2">Phone number 02 - <i>optional</i></label>
                    <input 
                        className="PhoneTwoInput" 
                        type="number" 
                        id="PhoneNumber2" 
                        onChange={formik.handleChange} 
                        value={formik.values.PhoneNumber2}
                    />

                    <button className="NewNumberBtn">Add new phone number</button>
                </div>
                <div>
                    <label className="MessageLabel" htmlFor="Message">message</label>
                    <label className="MaxTextLabel">maximum text length is 500 characters</label>
                    <textarea 
                        id="Message" 
                        onChange={formik.handleChange} 
                        value={formik.values.Message}
                    />
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Add address details</label>

                    <label className="AddressLine1Label" htmlFor="AddressLine1">Address line 1</label>
                    <input 
                        className="AddressLine1Input" 
                        type="text" 
                        id="AddressLine1" 
                        onChange={formik.handleChange} 
                        value={formik.values.AddressLine1}
                    />

                    <label className="AddressLine2Label" htmlFor="AddressLine2">Address line 2 - <i>optional</i> </label>
                    <input 
                        className="AddressLine2Input" 
                        type="text" 
                        id="AddressLine2" 
                        onChange={formik.handleChange} 
                        value={formik.values.AddressLine2}
                    />   

                    <label className="CityTownLabel" htmlFor="CityTown">City/Town</label>
                    <input 
                        className="CityTownInput" 
                        type="text" 
                        id="CityTown" 
                        onChange={formik.handleChange} 
                        value={formik.values.CityTown}
                    />

                    <label className="StateCountyLabel" htmlFor="StateCounty">State/County</label>
                    <input 
                        className="StateCountyInput" 
                        type="text" 
                        id="StateCounty" 
                        onChange={formik.handleChange} 
                        value={formik.values.StateCounty}
                    />  

                    <label className="PostcodeLabel" htmlFor="Postcode">Postcode</label>
                    <input 
                        className="PostcodeInput" 
                        type="text" 
                        id="Postcode" 
                        onChange={formik.handleChange} 
                        value={formik.values.Postcode}
                    />

                    <label className="CountryLabel" htmlFor="country">Country</label>
                    <input 
                        className="CountryInput" 
                        type="text" 
                        id="Country" 
                        onChange={formik.handleChange} 
                        value={formik.values.Country}
                    />  
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactUsForm;