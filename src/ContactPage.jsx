import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function saveContact(values) {
    dispatch({ type: 'SAVE_CONTACT', payload: values });
  }

  const location = useLocation();
  const contactInfo = {
    id: location.state.id,
    firstName: location.state.firstName,
    city: location.state.city,
    phoneNumber: location.state.phoneNumber,
    website: location.state.website,
    lastName: location.state.lastName,
    country: location.state.country,
    email: location.state.email,
    favorite: location.state.favorite,
    image: location.state.image,
    searched: location.state.searched,
  };
  const validate = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'First name should be at least 2 characters')
      .max(30, 'First name cannot be longer than 30 characters')
      .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
      .required('First name required'),
    city: Yup.string()
      .min(2, 'City should be at least 2 characters')
      .max(50, 'City cannot be longer than 50 characters')
      .matches(/^([^0-9]*)$/, 'City should not contain numbers')
      .required('City required'),
    phoneNumber: Yup.string()
      .min(4, 'Phone number should be at least 4 characters')
      .matches(/^[+]\d+/, 'It should be a phone number starting with +')
      .required('Phone number required'),
    website: Yup.string()
      .min(5, 'Website should be at least 5 characters')
      .matches(/^[^.]+[.][^.]+.*[^.]$/, 'Invalid website format')
      .required('Website required'),
    lastName: Yup.string()
      .min(2, 'Last name should be at least 2 characters')
      .max(30, 'Lasst name cannot be longer than 30 characters')
      .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
      .required('Last name required'),
    country: Yup.string()
      .min(2, 'Country should be at least 2 characters')
      .max(50, 'Country cannot be longer than 50 characters')
      .matches(/^([^0-9]*)$/, 'Country should not contain numbers')
      .required('Country required'),
    email: Yup.string().email('Wrong email format').required('Email required'),
    favorite: Yup.string().required('required'),
  });

  return (
    <Formik
      initialValues={contactInfo}
      validationSchema={validate}
      onSubmit={(values) => {
        alert('hello');
        saveContact(values);
        navigate('/');
      }}
    >
      {(formik) => {
        const { error, touched, dirty, isValid, values } = formik;
        return (
          <Form
            className='contact-info__contact-form'
            onSubmit={formik.handleSubmit}
          >
            <div className='contact-info__contact-form__contact-img-cont'>
              <div className='contact-info__contact-form__contact-img-cont__inner-cont'>
                <img src={values.image} alt='img' />
              </div>
              <div className='heart-cont'>
                <Field
                  id='heart'
                  name='favorite'
                  className='contact-info__contact-form__contact-img-cont__heart-btn'
                  type='checkbox'
                />
                <label htmlFor='heart'>❤</label>
              </div>
            </div>
            <div className='contact-info__contact-form__columns-cont'>
              <div className='contact-info__contact-form__columns-cont__column'>
                <div className='contact-info__contact-form__columns-cont__column__field-cont'>
                  <div className='contact-info__contact-form__columns-cont__column__field-cont__inner'>
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
                <div className='contact-info__contact-form__columns-cont__column__field-cont'>
                  <div className='contact-info__contact-form__columns-cont__column__field-cont__inner'>
                    <label htmlFor='city'>City</label>
                    <Field
                      name='city'
                      className='city input-field'
                      type='text'
                    />
                    <ErrorMessage
                      name='city'
                      component='div'
                      className='error-msg'
                    />
                  </div>
                </div>
                <div className='contact-info__contact-form__columns-cont__column__field-cont'>
                  <div className='contact-info__contact-form__columns-cont__column__field-cont__inner'>
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
                <div className='contact-info__contact-form__columns-cont__column__field-cont'>
                  <div className='contact-info__contact-form__columns-cont__column__field-cont__inner'>
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
              <div className='contact-info__contact-form__columns-cont__column'>
                <div className='contact-info__contact-form__columns-cont__column__field-cont'>
                  <div className='contact-info__contact-form__columns-cont__column__field-cont__inner'>
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
                <div className='contact-info__contact-form__columns-cont__column__field-cont'>
                  <div className='contact-info__contact-form__columns-cont__column__field-cont__inner'>
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
                <div className='contact-info__contact-form__columns-cont__column__field-cont'>
                  <div className='contact-info__contact-form__columns-cont__column__field-cont__inner'>
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
                  <button className='save-contact-btn-cont__btn' type='submit'>
                    Save Contact
                  </button>
                </div>
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
      <ContactForm />
    </div>
  );
};

export default ContactPage;
