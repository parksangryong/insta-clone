const initState = {
  imgs: 20,
};

//reducer

export default function PlusReducers(state = initState, action: any) {
  switch (action.type) {
    case 'changeImg':
      return {...state, imgs: state.imgs};
    default:
      return state;
  }
}
