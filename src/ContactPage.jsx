import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

const ContactForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.dataReducer;
  });
  const navigate = useNavigate();

  function saveContact(values) {
    dispatch({ type: 'SAVE_CONTACT', payload: values });
  }

  const location = useLocation();
  const values = {
    id: location.state.id,
    firstName: location.state.firstName,
    city: location.state.city,
    phoneNumber: location.state.phoneNumber,
    website: location.state.website,
    lastName: location.state.lastName,
    country: location.state.country,
    email: location.state.email,
    favorite: location.state.favorite,
  };
  const validate = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'First name should be at least 2 characters or more')
      .max(30, 'First name cannot be longer than 30 characters')
      .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
      .required('First name required'),
    city: Yup.string()
      .min(2, 'City should be at least 2 characters or more')
      .max(50, 'City cannot be longer than 50 characters')
      .matches(/^([^0-9]*)$/, 'City should not contain numbers')
      .required('City required'),
    phoneNumber: Yup.string().required('Phone number required'),
    website: Yup.string().required('Website required'),
    lastName: Yup.string()
      .min(2, 'Last name should be at least 2 characters or more')
      .max(30, 'Lasst name cannot be longer than 30 characters')
      .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
      .required('Last name required'),
    country: Yup.string()
      .min(2, 'Country should be at least 2 characters or more')
      .max(50, 'Country cannot be longer than 50 characters')
      .matches(/^([^0-9]*)$/, 'Country should not contain numbers')
      .required('Country required'),
    email: Yup.string().email('Wrong email format').required('Email required'),
  });

  return (
    <Formik initialValues={values} validationSchema={validate}>
      {(formik) => {
        const { error, touched, dirty, isValid, values } = formik;
        return (
          <Form className='contact-info__contact-form'>
            <div className='contact-info__contact-form__column'>
              <div className='contact-info__contact-form__column__field-cont'>
                <div className='contact-info__contact-form__column__field-cont__inner'>
                  <label htmlFor='firstName'>First name</label>
                  <Field
                    name='firstName'
                    className='first-name input-field'
                    type='text'
                  />
                  <ErrorMessage
                    name='firstName'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='contact-info__contact-form__column__field-cont'>
                <div className='contact-info__contact-form__column__field-cont__inner'>
                  <label htmlFor='city'>City</label>
                  <Field name='city' className='city input-field' type='text' />
                  <ErrorMessage
                    name='city'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='contact-info__contact-form__column__field-cont'>
                <div className='contact-info__contact-form__column__field-cont__inner'>
                  <label htmlFor='phoneNumber'>Phone number</label>
                  <Field
                    name='phoneNumber'
                    className='phone-number input-field'
                    type='text'
                  />
                  <ErrorMessage
                    name='phoneNumber'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='contact-info__contact-form__column__field-cont'>
                <div className='contact-info__contact-form__column__field-cont__inner'>
                  <label htmlFor='website'>Website</label>
                  <Field
                    name='website'
                    className='website input-field'
                    type='text'
                  />
                  <ErrorMessage
                    name='website'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
            </div>
            <div className='contact-info__contact-form__column'>
              <div className='contact-info__contact-form__column__field-cont'>
                <div className='contact-info__contact-form__column__field-cont__inner'>
                  <label htmlFor='lastName'>Last name</label>
                  <Field
                    name='lastName'
                    className='last-name input-field'
                    type='text'
                  />
                  <ErrorMessage
                    name='lastName'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='contact-info__contact-form__column__field-cont'>
                <div className='contact-info__contact-form__column__field-cont__inner'>
                  <label htmlFor='country'>Country</label>
                  <Field
                    name='country'
                    className='country input-field'
                    type='text'
                  />
                  <ErrorMessage
                    name='country'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='contact-info__contact-form__column__field-cont'>
                <div className='contact-info__contact-form__column__field-cont__inner'>
                  <label htmlFor='email'>Email</label>
                  <Field
                    name='email'
                    className='email input-field'
                    type='text'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='error-msg'
                  />
                </div>
              </div>
              <div className='save-contact-btn-cont'>
                <button
                  className='contact-info__contact-form__column__field-cont save-contact-btn-cont__btn'
                  type='submit'
                  onClick={(e) => {
                    e.preventDefault();
                    saveContact(values);
                    navigate('/');
                  }}
                >
                  Save Contact
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <div className='contact-info'>
        <div className='contact-info__img-cont'>
          <div className='contact-info__img-cont__cont'>
            <img src='#' alt='img' />
          </div>
          <button className='contact-info__img-cont__cont__heart-btn'>
            Heart
          </button>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
