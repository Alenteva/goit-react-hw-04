import { Field, Form, Formik } from "formik";
import css from "../searchbar/searchbar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const formattedSearch = values.query.trim().toLowerCase(); // змінено з 'values.search' на 'values.query'
    onSubmit(formattedSearch);
    actions.resetForm();
  };
  return (
    <header className={css["header"]}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={handleSubmit} // використання функції handleSubmit
      >
        <Form className={css["Form"]}>
          <Field
            className={css["Field"]}
            placeholder="Search images and photos"
            type="text"
            name="query"
          />
          <button className={css["searchBtn"]} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
