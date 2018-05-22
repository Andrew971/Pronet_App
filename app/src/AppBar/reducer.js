// Initial state of the feature
const initialState = {
  state: false
};

export function AppBarReducer(state = initialState, action) {
  switch (action.type) {
      case 'LEFT_DRAWER_DISPLAY':
          return  {
              ...state,

          };

      default:
          return state;
  }
}

export function AppBarAction(data) {
  switch (data.type) {
      case 'action':
          return  {
              type: data.type,
          };

      default:
          return (console.log('no action with that name'));
  }
}
