// Initial state of the feature
const initialState = {
  menuDisplay: false,
};

export function AppBarReducer(state = initialState, action) {
  switch (action.type) {
      case 'MENU_DISPLAY':
          return  {
              ...state,
              menuDisplay: !state.menuDisplay
          };
      case 'MENU_HIDE':
          return  {
              ...state,
              menuDisplay: action.payload
          };
      default:
          return state;
  }
}

export function AppBarAction(data) {
  switch (data.type) {
      case 'MENU_DISPLAY':
          return  {
              type: data.type,
          };
      case 'MENU_HIDE':
          return  {
              type: data.type,
              payload: data.payload
          };
      default:
          return (console.log('no action with that name'));
  }
}
