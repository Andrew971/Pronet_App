// Initial state of the feature
const initialState = {
  drawerDisplay:false,
  menuDisplay: false,
  RightDrawerDisplay: false,
};

export function AppBarReducer(state = initialState, action) {
  switch (action.type) {
      case 'MENU_DISPLAY':
          return  {
              ...state,
              menuDisplay: !state.menuDisplay,
              drawerDisplay:!state.drawerDisplay,
              RightDrawerDisplay:false
          };
      case 'MENU_HIDE':
          return  {
              ...state,
              menuDisplay: action.payload,
              drawerDisplay: action.payload
          };
      case 'RIGHT_DRAWER_DISPLAY':
          return  {
              ...state,
              RightDrawerDisplay: !state.RightDrawerDisplay,
              drawerDisplay:!state.drawerDisplay,
              menuDisplay:false,
          };
      case 'RIGHT_DRAWER_HIDE':
          return  {
              ...state,
              RightDrawerDisplay: action.payload,
              drawerDisplay: action.payload
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
      case 'RIGHT_DRAWER_DISPLAY':
          return  {
              type: data.type,
          };
      case 'RIGHT_DRAWER_HIDE':
          return  {
              type: data.type,
              payload: data.payload
          };
      default:
          return (console.log('no action with that name'));
  }
}
