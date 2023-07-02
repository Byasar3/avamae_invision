import { useFormik } from "formik";

const ContactUsForm = () => {

    const formik = useFormik({})

    return (
        <div>
            <form>
                <div>
                    <label className="NameLabel" htmlFor="name">Full name</label>
                    <input className="NameInput" type="text" id="name"/>

                    <label className="EmailLabel" htmlFor="email">Email address</label>
                    <input className="EmailInput" type="email" id="email"/>                    
                </div>
                <div>
                    <label className="PhoneOneLabel" htmlFor="number1">Phone number 01 - <i>optional</i></label>
                    <input className="PhoneOneInput" type="number" id="number1"/>
                    <label className="PhoneTwoLabel" htmlFor="number2">Phone number 02 - <i>optional</i></label>
                    <input className="PhoneTwoInput" type="number" id="number2"/>
                    <button className="NewNumberBtn">Add new phone number</button>
                </div>
                <div>
                    <label className="MessageLabel" htmlFor="message">message</label>
                    <label className="MaxTextLabel">maximum text length is 500 characters</label>
                    <textarea id="message"/>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Add address details</label>

                    <label className="AddressLineOneLabel" htmlFor="address1">Address line 1</label>
                    <input className="AddressLineOneInput" type="text" id="address1"/>

                    <label className="AddressLineTwoLabel" htmlFor="address2">Address line 2 - <i>optional</i> </label>
                    <input className="AddressLineTwoInput" type="text" id="address2"/>   

                    <label className="CityLabel" htmlFor="city">City/Town</label>
                    <input className="CityInput" type="text" id="city"/>

                    <label className="StateLabel" htmlFor="state">State/Country</label>
                    <input className="StateInput" type="text" id="state"/>  

                    <label className="PostcodeLabel" htmlFor="postcode">Postcode</label>
                    <input className="PostcodeInput" type="text" id="postcode"/>

                    <label className="CountryLabel" htmlFor="country">Country</label>
                    <input className="CountryInput" type="text" id="country"/>  
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactUsForm;