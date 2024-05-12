import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, actions) => {
    const contactId = nanoid();
    dispatch(
      addContact({
        id: contactId,
        name: values.username,
        number: values.usernumber,
      })
    );
    actions.resetForm();
  };

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    usernumber: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Must be xxx-xx-xx"
      )
      .required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{ username: "", usernumber: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.field}
              id={nameFieldId}
              type="text"
              name="username"
            />
            <ErrorMessage name="username" component="span" />
          </div>

          <div>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.field}
              id={numberFieldId}
              type="tel"
              name="usernumber"
            />
            <ErrorMessage name="usernumber" component="span" />
          </div>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
