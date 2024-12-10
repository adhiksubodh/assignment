import React, { useState } from 'react';
import './styles.css';

const BusinessForm = () => {
    const [formData, setFormData] = useState({
        legalName: '',
        doingBusinessAs: '',
        companyRegistrationNumber: '',
        randomRegistrationNumber: '',
        websiteUrl: '',
        industryName: '',
        oneSentenceDescription: '',
        whichProducts: '',
        anotherRandomDropdown: '',
        accountUsage: '',
        randomCountPerWeek: '',
        expectedTotalSales: '',
        purposeOfUsingTheForm: '',
        productDescription: '',
        contactEmail: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div class="container">
        <div class="header">
        <div class="header">
    <h1>Multi-Step Process Form Assignment</h1>
</div>
<div class="steps">
    <div class="step completed">
        <span class="circle">&#10003;</span> 
       <p>Business Type</p>
    </div>
    <div class="step active">
        <span class="circle"></span>
        <p>Business Details</p>
    </div>
    <div class="step">
        <span class="circle"></span>
        <p>Authorized Representative</p>
    </div>
    <div class="step">
        <span class="circle"></span>
        <p>Business Address</p>
    </div>
    <div class="step">
        <span class="circle"></span>
        <p>Company Directors</p>
    </div>
    <div class="step">
        <span class="circle"></span>
        <p>Supporting Information</p>
    </div>
    <div class="step">
        <span class="circle"></span>
        <p>Anti-Fraud Details</p>
    </div>
    <div class="step">
        <span class="circle"></span>
        <p>Complete Registration</p>
    </div>
</div>
</div>
        <form>
            <h2>Tell us more about your business</h2>
            <p>Your info is like the Wi-Fi password—totally crucial for keeping things running, impressing the money folks, and making sure you get top-notch service without any buffering!</p>
           <div class="containerform"> <div class="form-group">
                <label for="legal-name">Legal Name <span class="required">*</span></label>
                <input type="text" id="legal-name" name="legal-name"/>
            </div>
            <div class="form-group">
                <label for="doing-business-as">Doing Business As <span class="required">*</span></label>
                <input type="text" id="doing-business-as" name="doing-business-as"/>
            </div>
            <div class="form-group">
                <label for="company-registration-number">Company Registration Number <span class="required">*</span></label>
                <input type="text" id="company-registration-number" name="company-registration-number"/>
            </div>
            <div class="form-group">
                <label for="random-registration-number">Random Registration Number <span class="required">*</span></label>
                <input type="text" id="random-registration-number" name="random-registration-number"/>
            </div>
            <div class="form-group">
                <label for="website-url">Website URL<span class="required">*</span></label>
                <input type="url" id="website-url" name="website-url"/>
            </div>
            <div class="form-group">
                <label for="industry-name">Industry Name <span class="required">*</span></label>
                <input type="text" id="industry-name" name="industry-name"/>
            </div>
            <div class="form-group">
                <label for="one-sentence-description">One Sentence Description <span class="required">*</span></label>
                <input type="text" id="one-sentence-description" name="one-sentence-description"/>
            </div>
            <div class="form-group">
                <label for="which-products">Which products would you like to select? <span class="required">*</span></label>
                <select id="which-products" name="which-products">
                    <option value="">Select</option>
                </select>
            </div>
            <div class="form-group">
                <label for="another-random-dropdown">Another Random Dropdown Appears <span class="required">*</span></label>
                <select id="another-random-dropdown" name="another-random-dropdown">
                    <option value="">Select</option>
                </select>
            </div>
            <div class="form-group">
                <label for="account-usage">Account Usage <span class="required">*</span></label>
                <select id="account-usage" name="account-usage">
                    <option value="">Select</option>
                </select>
            </div>
            <div class="form-group">
                <label for="random-count-per-week">Random count per week <span class="required">*</span></label>
                <input type="number" id="random-count-per-week" name="random-count-per-week"/>
            </div>
            <div class="form-group">
                <label for="expected-total-sales">Expected total sales in this page <span class="required">*</span></label>
                <input type="number" id="expected-total-sales" name="expected-total-sales"/>
            </div>
            <div class="form-group">
                <label for="purpose-of-using-the-form">Purpose of using the form <span class="required">*</span></label>
                <input type="text" id="purpose-of-using-the-form" name="purpose-of-using-the-form"/>
            </div>
            <div class="form-group">
                <label for="product-description">Product Description <span class="required">*</span></label>
                <textarea id="product-description" name="product-description" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="contact-email">Contact email <span class="required">*</span></label>
                <input type="email" id="contact-email" name="contact-email"/>
            </div>
            </div>
            <div class="form-group">
                <label for="certificate-of-incorporation">Certificate of Incorporation <span class="required">*</span></label>
                <div class="file-upload">
                    <i class="fas fa-upload"></i>
                    <p>Click to select or drag and drop</p>
                    <small>Maximum file size: 500 KB</small>
                </div>
            </div>
            <div class="form-group">
                <label for="company-logo">Company Logo <span class="required">*</span></label>
                <div class="file-upload">
                    <i class="fas fa-upload"></i>
                    <p>Click to select or drag and drop</p>
                    <small>Maximum file size: 500 KB</small>
                </div>
            </div>
            <div class="buttons">
                <button type="button" class="btn-prev">Previous</button>
                <button type="submit" class="btn-next">Next</button>
            </div>
        </form>
    </div>

    );
};

export default BusinessForm;