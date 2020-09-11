import React, { useEffect, useState } from 'react';
import { Form as FinalForm } from 'react-final-form';
import * as Yup from 'yup';
import { makeValidate, makeRequired } from 'mui-rff';
import { useDispatch } from 'react-redux';
import Form from './Form';

import { Container } from './styles';
import { addDog } from '../../store/modules/dogs/action';

const ContainerForm: React.FC = () => {
  const [initialValue, setInitialValue] = useState<any>();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //Schema Yup com validações
  const schema = Yup.object().shape({
    breed: Yup.string().required('Selecione uma raça'),
    subBreed: Yup.string(),
    name: Yup.string()
      .min(3, 'Um nome com 3 a 5 letras deve ser escolhido')
      .max(5, 'Um nome com 3 a 5 letras deve ser escolhido')
      .required('Um nome com 3 a 5 letras deve ser escolhido'),
    age: Yup.number()
      .typeError('A idade deve ser um número')
      .min(1, 'A idade escolhida deve estar entre 1 e 15')
      .max(15, 'A idade escolhida deve estar entre 1 e 15')
      .required('Selecione uma idade'),
    sex: Yup.string().required('Selecione um sexo'),
    color: Yup.string().required('Selecione uma cor'),
  });
  const validate = makeValidate(schema);
  const required = makeRequired(schema);

  useEffect(() => {
    const values = localStorage.getItem('values');
    setInitialValue(values ? JSON.parse(values) : {});
    setLoading(false);
  }, []);

  const onSubmit = async (values: any, form: any) => {
    dispatch(addDog(values));

    localStorage.setItem('values', JSON.stringify({}));
    setInitialValue({});
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    setTimeout(form.restart);
  };

  return (
    <>
      {' '}
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
