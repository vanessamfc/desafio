import React, { useEffect, useCallback, useState, useMemo } from "react";
import getBreeds from "../../../service/getBreeds";
import { Field } from "react-final-form";

const Form: React.FC<{
  handleSubmit: () => void;
  values: any;
}> = ({ handleSubmit, values }) => {
  const [dogBreeds, setDogBreeds] = useState<string>();
  const [price, setPrice] = useState<number>();
  const dogBreedList = useMemo(
    () => (dogBreeds ? Object.keys((dogBreeds as unknown) as object) : []),
    [dogBreeds]
  );

  const getBreedsCallback = useCallback(async () => {
    const breed = await getBreeds();
    setDogBreeds(breed);
    console.log(breed);
  }, []);
  useEffect(() => {
    getBreedsCallback();
  }, [getBreedsCallback]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Raça</label>
        <Field name="breed" component="select">
          <option />
          {dogBreedList?.map((breed: string, index: number) => (
            <option key={breed} className="input-label">
              {" "}
              {breed}
            </option>
          ))}
          <h1>{price}</h1>
        </Field>
        {values.breed &&
        dogBreeds?.[values.breed] &&
        dogBreeds?.[values.breed].length > 0 ? (
          <>
            <label>Sub-raça</label>

            <Field name="text.0" component="select">
              <option>Selecione a sub-raça</option>
              {(((dogBreeds?.[
                values.breed
              ] as unknown) as unknown) as string[]).map((item: any) => (
                <option key={item} className="input-label">
                  {item}
                </option>
              ))}
            </Field>
          </>
        ) : (
          <></>
        )}
        <label>Nome</label>
        <Field name="name" component="input">
          {({ input, meta }) => (
            <div>
              <label> Name</label>
              <input {...input} type="text" placeholder="First Name" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <label>Sexo</label>
        <Field name="sex" component="select">
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </Field>

        <label>Idade</label>
        <Field name="age" component="input"></Field>
        <label>Escolha a cor desejada</label>
        <Field name="color" component="select">
          <option value="Branco">Branco</option>
          <option value="Preto">Preto</option>
          <option value="amarelo">Amarelo</option>
        </Field>
        <button type="submit">salvar</button>
        <span>{JSON.stringify(values.text)}</span>
      </div>
    </form>
  );
};

export default Form;
