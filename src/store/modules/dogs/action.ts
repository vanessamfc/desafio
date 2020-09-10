function addDog(values: any) {
  return {
    type: '@dogs/ADD_DOG',
    payload: { values },
  };
}
function deleteDog(index: number) {
  return {
    type: '@dogs/DELETE_DOG',
    payload: { index },
  };
}
export { addDog, deleteDog };
