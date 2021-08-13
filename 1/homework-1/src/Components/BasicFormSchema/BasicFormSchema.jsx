import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameRegExp = /^[a-z ,.'-]+$/i
const BasicFormSchema = Yup.object().shape({
    name: Yup.string().required("Required").min(2, "Must be longer than 2 characters")
        .max(20, "Nice try, nobody has a first name that long")
        .required("Required").matches(nameRegExp, 'Name typed incorrect'),
    surname: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(30, "Too long surname")
        .required("Required"),
    age: Yup.number().required("Required").positive("cannot be less than zero").integer("only round numbers").max(99, "invalid").min(11),
    address:Yup.string().min(5,"Too short address").max(33, 'Too long').required("Required"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').max(12)
});
export default BasicFormSchema;