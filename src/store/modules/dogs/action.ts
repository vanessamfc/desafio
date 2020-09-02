function addDog(values: any) {
  return {
    type: "@dogs/ADD_DOG",
    payload: { values },
  };
}

export { addDog };
