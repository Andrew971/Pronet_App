// Initial state of the feature
const initialState = {
  state: '0',
};

export function WebsiteReducer(state = initialState, action) {
  switch (action.type) {
      case 'CHANGE_LANG':
          return  {
              ...state,
              target: action.payload
          };
      default:
          return state;
  }
}

export function Action(data) {
  switch (data.type) {
      case 'NEW_CONTENT_REQUESTED':
          return  {
              type: data.type,
              payload: data.payload
          };
      case 'CONTENT_LIST_REQUESTED':
          return  {
              type: data.type,
          };
      default:
          return (console.log('no action with that name'));
  }
}
