const initialState = "GettingStarted";

const updateGuideContent = (state = initialState, action) => {
 switch (action.type) {
  case "GettingStarted":
   return action.payload;
  case "Installation":
   return action.payload;
  case "Interface":
     return action.payload;
  case "Block":
     return action.payload;
  case "Code":
     return action.payload;
  case "ML":
     return action.payload;
  default:
   return state;
 }
}

export default updateGuideContent;
