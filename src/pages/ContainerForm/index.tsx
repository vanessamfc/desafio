import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { setIn } from "final-form";
import * as Yup from "yup";
import Form from "./Form";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// import { Container } from './styles';
const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};

const ContainerForm: React.FC = () => {
  // To be passed to React Final Form
  const validateFormValues = async (values: any) => {
    const schema = Yup.object().shape({
      name: Yup.string().min(3).max(5),
      age: Yup.number().max(15).required(),
      sex: Yup.string().required(),
      color: Yup.string().required(),
    });
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err) {
      const errors = err.inner.reduce(
        (formError: object, innerError: { path: string; message: any }) => {
          return setIn(formError, innerError.path, innerError.message);
        },
        {}
      );

      return errors;
    }
  };

  return (
    <div>
      <FinalForm
        onSubmit={onSubmit}
        validate={validateFormValues}
        render={Form}
      />
    </div>
  );
};

export default ContainerForm;
