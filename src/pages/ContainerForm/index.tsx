import React, { useEffect, useState } from "react";
import { Form as FinalForm } from "react-final-form";
import * as Yup from "yup";
import Form from "./Form";
import { makeValidate, makeRequired } from "mui-rff";

import { Container } from "./styles";
import { addDog } from "../../store/modules/dogs/action";
import { useDispatch } from "react-redux";

const ContainerForm: React.FC = () => {
  const [initialValue, setInitialValue] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    breed: Yup.string().required(),
    subBreed: Yup.string(),
    name: Yup.string().min(3).max(5),
    age: Yup.number().min(1).max(15).required(),
    sex: Yup.string().required(),
    color: Yup.string().required(),
  });
  const validate = makeValidate(schema);
  const required = makeRequired(schema);
  useEffect(() => {
    const values = localStorage.getItem("values");
    setInitialValue(values ? JSON.parse(values) : {});
    setLoading(false);
  }, []);

  const onSubmit = async (values: any, form: any) => {
    dispatch(addDog(values));

    localStorage.setItem("values", JSON.stringify({}));
    setInitialValue({});
    setTimeout(form.restart);
  };

  return (
    <>
      {" "}
      {!loading && (
        <Container>
          <FinalForm
            initialValues={initialValue}
            onSubmit={onSubmit}
            validate={validate}
            render={(form) => Form({ ...form, required })}
          />
        </Container>
      )}
    </>
  );
};

export default ContainerForm;
