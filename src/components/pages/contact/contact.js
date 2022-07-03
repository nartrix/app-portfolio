import FormContact from "../../form-contact/form-contact";
import MountainsContact from "../../mountains-contact/mountains-contact";

function Contact() {
    return (
        <>
            <div className="contact">
                <FormContact/>
                <MountainsContact/>
            </div>
        </>
    );
}

export default Contact;