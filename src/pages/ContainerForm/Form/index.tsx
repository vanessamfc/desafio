import React, { useEffect, useCallback, useState, useMemo } from "react";
import {
  getBreeds,
  getImage,
  getSubBreedImage,
} from "../../../service/getBreeds";
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
  const [dogImage, setDogImage] = useState<string>();
  const [dogSubBreedImage, setDogSubBreedImage] = useState<string>();

  const dogBreedList = useMemo(
    () => (dogBreeds ? Object.keys((dogBreeds as unknown) as object) : []),
    [dogBreeds]
  );

  const dogBreedValue = useMemo(
    () => (values?.breed?.toLocaleLowerCase().charCodeAt(1) - 96) * 100,
    [values]
  );
  const dogSexValue = useMemo(
    () => (values?.sex?.toLocaleLowerCase().charCodeAt(1) - 96) * 10,
    [values]
  );
  const dogAgeValue = useMemo(() => 1000 - values?.age * 60, [values]);
  const dogColorValue = useMemo(
    () => (values?.color?.toLocaleLowerCase().charCodeAt(1) - 96) * 10,

    [values]
  );

  useEffect(() => console.log(dogColorValue), [dogColorValue]);

  const getBreedsCallback = useCallback(async () => {
    const breed = await getBreeds();
    setDogBreeds(breed);
    console.log(breed);
  }, []);

  const getImageCallback = useCallback(async () => {
    const image = await getImage(values.breed);
    setDogImage(image);
    console.log(image);
  }, [values.breed]);

  const getsubBreedImageCallback = useCallback(async () => {
    if (values.subBreed) {
      const image = await getSubBreedImage(values.breed, values.subBreed);
      setDogSubBreedImage(image);
      console.log(image);
    }
  }, [values.breed, values.subBreed]);

  useEffect(() => {
    getsubBreedImageCallback();
  }, [getsubBreedImageCallback, values.breed, values.subBreed]);

  useEffect(() => {
    getImageCallback();
  }, [getImageCallback, values.breed]);

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

              <div>{dogBreedValue}</div>
            </FieldContainer>
          )}
        </Field>
        <Field name="dogImage" type="hidden" component="input">
          {({ input }) => {
            input.onChange(dogImage);
            return <input {...input} />;
          }}
        </Field>

        <img style={{ width: "50px" }} src={dogImage} alt="" />
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
            <img style={{ width: "50px" }} src={dogSubBreedImage} alt="" />
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
                <MenuItem value="male">Macho</MenuItem>
                <MenuItem value="female">Fêmea</MenuItem>
              </Select>

              <div>{dogSexValue}</div>
            </FieldContainer>
          )}
        </Field>
        <FieldContainer>
          <label>Idade</label>
          <Field name="age" component="input">
            {({ input, meta }) => (
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
                <MenuItem value="white">Branco</MenuItem>
                <MenuItem value="black">Preto</MenuItem>
                <MenuItem value="yellow">Amarelo</MenuItem>
              </Select>
            </FieldContainer>
          )}
        </Field>

        <div>{dogColorValue}</div>

        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
        <div>
          total:{dogColorValue + dogSexValue + dogBreedValue + dogAgeValue}
        </div>
        {/* <span>{JSON.stringify(values)}</span> */}
      </div>
    </FormContainer>
  );
};

export default Form;
