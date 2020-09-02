import React, { useEffect, useCallback, useState, useMemo } from "react";
import getBreeds from "../../../service/getBreeds";
import { Field } from "react-final-form";
import { Slider, MenuItem, Button } from "@material-ui/core/";
import { FieldContainer, FormContainer } from "./styles";
import { Select, TextField } from "mui-rff";

const Form: React.FC<{
  handleSubmit: () => void;
  values: any;
  required: any;
}> = ({ handleSubmit, values, required }) => {
  const [dogBreeds, setDogBreeds] = useState<string>();
  const [breedValue, setBreedValue] = useState<number | undefined>();

  useEffect(() => {
    console.log(breedValue);
  }, [breedValue]);

  const dogBreedList = useMemo(
    () => (dogBreeds ? Object.keys((dogBreeds as unknown) as object) : []),
    [dogBreeds]
  );

  const dogBreedValue = useMemo(
    () => (values?.breed?.toLocaleLowerCase().charCodeAt(1) - 96) * 100,
    [values]
  );
  const dogSexValue = useMemo(() => values?.sex, [values]);
  const dogAgeValue = useMemo(() => 1000 - values?.age * 60, [values]);
  const dogColorValue = useMemo(() => values?.color, [values]);

  useEffect(() => console.log(dogAgeValue), [dogAgeValue]);

  const getBreedsCallback = useCallback(async () => {
    const breed = await getBreeds();
    setDogBreeds(breed);
    console.log(breed);
  }, []);

  useEffect(() => {
    getBreedsCallback();
  }, [getBreedsCallback]);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  return (
    <FormContainer onSubmit={handleSubmit}>
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
            </FieldContainer>
          )}
        </Field>

        {values.breed &&
        dogBreeds?.[values.breed] &&
        dogBreeds?.[values.breed].length > 0 ? (
          <>
            <Field name="subBreed">
              {({ input }) => (
                <FieldContainer>
                  <Select
                    {...input}
                    name="subBreed"
                    label="Sub-raça"
                    required={required.subBreed}
                  >
                    {(((dogBreeds?.[
                      values.breed
                    ] as unknown) as unknown) as string[]).map(
                      (subBreed: any) => (
                        <MenuItem value={subBreed} key={subBreed}>
                          {subBreed}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FieldContainer>
              )}
            </Field>
          </>
        ) : (
          <></>
        )}
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
                <MenuItem value={100}>Macho</MenuItem>
                <MenuItem value={200}>Fêmea</MenuItem>
              </Select>
            </FieldContainer>
          )}
        </Field>
        <FieldContainer>
          <label>Idade</label>
          <Field name="age" component="input">
            {({ input }) => (
              <Slider
                valueLabelDisplay="auto"
                name="age"
                onChange={(e, v) => input.onChange(v)}
                defaultValue={7}
                min={1}
                max={15}
              />
            )}
          </Field>
        </FieldContainer>
        <Field name="color">
          {({ input }) => (
            <FieldContainer>
              <Select
                {...input}
                required={required.color}
                name="color"
                label="Escolha uma cor"
              >
                <MenuItem value={30}>Branco</MenuItem>
                <MenuItem value={40}>Preto</MenuItem>
                <MenuItem value={20}>Amarelo</MenuItem>
              </Select>
            </FieldContainer>
          )}
        </Field>

        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
        {/* <span>{JSON.stringify(values)}</span> */}
      </div>
    </FormContainer>
  );
};

export default Form;
