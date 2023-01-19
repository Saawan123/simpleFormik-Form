import './App.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'
function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
      country: ""
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "username must be less than or equals to 10 characters")
        .required("this is required field"),
      name: Yup.string()
        .required("this is required field"),
      email: Yup.string()
        .email("Please provide a valid email")
        .required("this is required field"),
        status:Yup.string()
        .required("this is required field"),
        country:Yup.string()
        .required("this is required field"),
    }),
    onSubmit: (values) => {
      console.log("form submitted", values)
    }
  })
  console.log(formik.touched)


  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
      <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder='enter your username here'
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username}</p>}
        <br/>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder='enter your name here'
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        <br/>
{formik.touched.name && formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
<label>Email</label>
        <input
          type="email"
          name="email"
          placeholder='enter your email here'
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
         <br />
        <span>Your status</span>
        <input
          type="radio"
          name="status"
          onChange={formik.handleChange}
          value="Male"
        />
        <label>Male</label>
        <input
          type="radio"
          name="status"
          onChange={formik.handleChange}
          value="Female"
        />
        <label>Female</label>
        <input
          type="radio"
          name="status"
          onChange={formik.handleChange}
          value="Other"
        />
        <label>Other</label>
        {formik.touched.status && formik.errors.status && <p style={{ color: "red" }}>{formik.errors.status}</p>}
        <br />
        <select name="country" onChange={formik.handleChange} onBlur={formik.handleBlur}>
          <option value="">Select Country</option>
          <option value="India">INDIA</option>
          <option value="UK">UK</option>
          <option value="Australia">AUSTRALIA</option>
        </select>
        {formik.touched.country && formik.errors.country && <p style={{ color: "red" }}>{formik.errors.country}</p>}
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;
