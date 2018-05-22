// Initial state of the feature
const initialState = {
  drawerDisplay:false,
  drawerLeftDisplay: false,
  drawerRightDisplay: false,
};

export function UIReducer(state = initialState, action) {
  switch (action.type) {
      case 'LEFT_DRAWER_DISPLAY':
          return  {
              ...state,
              drawerLeftDisplay: !state.drawerLeftDisplay,
              drawerDisplay:true,
              drawerRightDisplay:false
          };
      case 'LEFT_DRAWER_HIDE':
          return  {
              ...state,
              drawerLeftDisplay: action.payload,
              drawerDisplay: action.payload
          };
      case 'RIGHT_DRAWER_DISPLAY':
          return  {
              ...state,
              drawerRightDisplay: !state.drawerRightDisplay,
              drawerDisplay:true,
              drawerLeftDisplay:false,
          };
      case 'RIGHT_DRAWER_HIDE':
          return  {
              ...state,
              drawerRightDisplay: action.payload,
              drawerDisplay: action.payload
          };
      default:
          return state;
  }
}

export function UIAction(data) {
  switch (data.type) {
      case 'LEFT_DRAWER_DISPLAY':
          return  {
              type: data.type,
          };
      case 'LEFT_DRAWER_HIDE':
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
