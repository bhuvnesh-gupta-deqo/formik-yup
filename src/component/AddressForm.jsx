
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



  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} >
    <Form className="col-md-6 mx-auto mt-5">
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <Field type="text" className="form-control" id="inputAddress" placeholder="Enter your address" name="Address" />
    <ErrorMessage name="Address" component="div" className="text-danger" />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <Field type="text" name="Address2" className="form-control" id="inputAddress2" placeholder="Optional Address" />
  </div>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="inputCity">City</label>
      <Field type="text" className="form-control" id="inputCity" name="City" />
      <ErrorMessage name="City" component="div" className="text-danger" />
    </div>
    <div className="form-group">
    <label htmlFor="inputState">State</label>
      <Field type="text" className="form-control" id="inputState" name="State" />
      <ErrorMessage name="State" component="div" className="text-danger" />
    </div>
    <div className="form-group">
      <label htmlFor="inputZip">Zip</label>
      <Field type="text" className="form-control" id="Zip"  name="Zip"/>
      <ErrorMessage name="Zip" component="div" className="text-danger" />
    </div>
  </div>
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
</Form>
</Formik>
  )
}

export default AddressForm;
