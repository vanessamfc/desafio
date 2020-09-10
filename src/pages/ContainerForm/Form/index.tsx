import React, { useEffect, useCallback, useState, useMemo } from "react";
import { getBreeds } from "../../../service/getBreeds";
import { Field } from "react-final-form";
import { MenuItem, Button } from "@material-ui/core/";
import { FieldContainer, FormContainer } from "./styles";
import { Select, TextField } from "mui-rff";
import ImageContainer from "./ImageContainer";
import SubBreedField from "./SubBreedField";

const Form: React.FC<{
  handleSubmit: () => void;
  values: any;
  required: any;
}> = ({ handleSubmit, values, required }) => {
  const [dogBreeds, setDogBreeds] = useState<string>();

  const dogBreedList = useMemo(
    () => (dogBreeds ? Object.keys((dogBreeds as unknown) as object) : []),
    [dogBreeds]
  );

  const price = useMemo(() => {
    const parcialPrice = {
      color: (values?.color?.toLocaleLowerCase().charCodeAt(1) - 96) * 10 || 0,
      age: 1000 - values?.age * 60 || 0,
      sex: (values?.sex?.toLocaleLowerCase().charCodeAt(1) - 96) * 10 || 0,
      breed: (values?.breed?.toLocaleLowerCase().charCodeAt(1) - 96) * 100 || 0,
    };
    return {
      ...parcialPrice,
      total:
        parcialPrice.color +
        parcialPrice.age +
        parcialPrice.sex +
        parcialPrice.breed,
    };
  }, [values]);

  const getBreedsCallback = useCallback(async () => {
    const breed = await getBreeds();
    setDogBreeds(breed);
    console.log(breed);
  }, []);

  useEffect(() => {
    getBreedsCallback();
  }, [getBreedsCallback]);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify({ ...values, price }));
  }, [price, values]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <div>
          <Field name="dogImage" type="hidden" component="input">
            {({ input }) => (
              <ImageContainer
                input={input}
                breed={values.breed}
                subBreed={values.subBreed}
              />
            )}
          </Field>
        </div>
        <div>
          <Field name="breed">
            {({ input }) => (
              <FieldContainer>
                <Select
                  {...input}
                  name="breed"
                  label="Raça"
                  required={required.breed}
                >
                  {dogBreedList?.map((breed: string, index: number) => (
                    <MenuItem value={breed} key={breed} className="input-label">
                      {breed}
                    </MenuItem>
                  ))}
                </Select>

                <div>{`Valor: R$${price.breed}`}</div>
              </FieldContainer>
            )}
          </Field>
          <Field name="subBreed">
            {({ input }) => (
              <SubBreedField
                input={input}
                required={required}
                breed={values.breed}
                subBreedList={
                  ((dogBreeds?.[
                    values.breed
                  ] as unknown) as unknown) as string[]
                }
              />
            )}
          </Field>
          <Field name="name">
            {({ input }) => (
              <FieldContainer>
                <TextField
                  {...input}
                  name="name"
                  label="Nome"
                  type="text"
                ></TextField>
              </FieldContainer>
            )}
          </Field>
          <Field name="sex">
            {({ input }) => (
              <FieldContainer>
                <Select
                  {...input}
                  required={required.sex}
                  name="sex"
                  label="Sexo"
                >
                  <MenuItem value="male">Macho</MenuItem>
                  <MenuItem value="female">Fêmea</MenuItem>
                </Select>

                <div>{`Valor: R$${price.sex}`}</div>
              </FieldContainer>
            )}
          </Field>
          <Field name="age">
            {({ input }) => (
              <FieldContainer>
                <TextField
                  {...input}
                  name="age"
                  label="idade"
                  type="text"
                ></TextField>

                <div>{`Valor: R$${price.age}`}</div>
              </FieldContainer>
            )}
          </Field>
          <Field name="color">
            {({ input }) => (
              <FieldContainer>
                <Select
                  {...input}
                  required={required.color}
                  name="color"
                  label="Cor"
                >
                  <MenuItem value="white">Branco</MenuItem>
                  <MenuItem value="black">Preto</MenuItem>
                  <MenuItem value="yellow">Amarelo</MenuItem>
                </Select>

                <div>{`Valor: R$${price.color}`}</div>
              </FieldContainer>
            )}
          </Field>

          <div>{`Valor Total: R$${price.total}`}</div>
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
        </div>
      </div>
    </FormContainer>
  );
};

export default Form;
