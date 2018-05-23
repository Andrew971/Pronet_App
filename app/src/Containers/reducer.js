// Initial state of the feature
const initialState = {
  language:'fr',
  drawerDisplay:false,
  drawerLeftDisplay: false,
  drawerRightDisplay: false,
  modalDisplay: false,
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
      case 'MODAL_SHOW':
          return  {
              ...state,
              modalDisplay: true,
          };
      case 'MODAL_HIDE':
          return  {
              ...state,
              modalDisplay: false,
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
      case 'MODAL_SHOW':
          return  {
              type: data.type,
          };
      case 'MODAL_HIDE':
          return  {
              type: data.type,
          };
      default:
          return (console.log('no action with that name'));
  }
}
