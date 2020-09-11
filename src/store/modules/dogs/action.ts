//Action responsável por salvar a lista
function addDog(values: any) {
  return {
    type: '@dogs/ADD_DOG',
    payload: { values },
  };
}
//Action responsável por deletar o item desejado na lista
function deleteDog(index: number) {
  return {
    type: '@dogs/DELETE_DOG',
    payload: { index },
  };
}
export { addDog, deleteDog };
