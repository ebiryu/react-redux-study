const initialState = {
  items: [
    {
      name: "ひとつめ",
      isDone: false,
    },
    {
      name: "ふたつめ",
      isDone: true,
    }
  ]
};

const reducer = (state = initialState) => {
  return state;
}

export default reducer;