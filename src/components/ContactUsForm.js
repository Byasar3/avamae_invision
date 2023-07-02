const ContactUsForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Full name</label>
                    <input/>

                    <label>Email address</label>
                    <input/>                    
                </div>
                <div>
                    <label>Phone number 01 - <i>optional</i></label>
                    <input/>
                    <label>Phone number 02 - <i>optional</i></label>
                    <input/>
                    <button>Add new phone number</button>
                </div>
                <div>
                    <label>message</label>
                    <label>maximum text length is 500 characters</label>
                    <textarea/>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Add address details</label>

                    <label>Address line 1</label>
                    <input/>

                    <label>Address line 2 - <i>optional</i> </label>
                    <input/>   

                    <label>City/Town</label>
                    <input/>

                    <label>State/Country</label>
                    <input/>  

                    <label>Postcode</label>
                    <input/>

                    <label>Country</label>
                    <input/>  
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactUsForm;