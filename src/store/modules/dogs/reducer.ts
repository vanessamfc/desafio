import produce from "immer";

const INITIAL_STATE = {
  dogList: [],
};

interface UserState {
  dogList: any[];
}

interface Action {
  type: string;
  payload: {
    values: any;
    index: number;
  };
}

export default function dogs(state: UserState = INITIAL_STATE, action: Action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@dogs/ADD_DOG": {
        console.log(action.payload.values);
        draft.dogList.push(action.payload.values);

        break;
      }
      case "@dogs/DELETE_DOG": {
        console.log(action.payload.index);
        draft.dogList.splice(action.payload.index, 1);
        break;
      }

      default:
    }
  });
}
