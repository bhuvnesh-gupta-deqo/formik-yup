/* eslint-disable react/prop-types */
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
Address: Yup.string().required("Please enter your address"),
City:Yup.string().required("Please enter your city"),
State:Yup.string().required("Please enter your state"),
Zip: Yup.string().matches(/^\d{6}?$/, "Must be a valid postal code (e.g., 123456").required("Zip Code is required"),
})

function AddressForm() {
    const initialValues = {
        Address: "",
        Address2: "",
        City: "",
        State:"",
        Zip: "",
    };


    const handleSubmit = values => {
        console.log("form data",values)
    };


    const InputField = ({label, name, type, placeholder}) => {
      return (
        <div className="form-group">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="form-control"
        />
        <ErrorMessage name={name} component="div" className="text-danger" />
      </div>
      )
    }


  return (
    <div>
      <h3 className="text-center mt-3">Address Form</h3>
      <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="col-md-6 p-4 mx-auto mt-4">
        <InputField
          label="Address"
          name="Address"
          placeholder="Enter your address"
        />
        <InputField
          label="Address 2"
          name="Address2"
          placeholder="Optional address"
        />
         <InputField
          label="City"
          name="City"
          placeholder="Enter your City"
        />

        <InputField
          label="State"
          name="State"
          placeholder="Enter your State"
        />
         <InputField
          label="Zip"
          name="Zip"
          placeholder="Enter your Zip"
        />
         <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </Form> 
        </Formik>
    </div>
  )
}

export default AddressForm;
