import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Minimum 3 characters').max(50, 'Maximum 50 characters').required('Required field'),
    number: Yup.string().min(3, 'Minimum 3 characters').max(50, 'Maximum 50 characters').required('Required field'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <Field type="text" name="number" placeholder="Number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;