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
  };
}

export default function dogs(state: UserState = INITIAL_STATE, action: Action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@dogs/ADD_DOG": {
        draft.dogList.push(action.payload.values);

        break;
      }

      default:
    }
  });
}
