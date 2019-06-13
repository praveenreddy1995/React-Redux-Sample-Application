export function updateState(e) {
   return {
      type: "UPDATEUSR",
      payload:e.target.value
   };
}
export function updateState1(e) {
   return {
      type: "UPDATEPASSWORD",
      pw:e.target.value
   };
}
export function submit() {
   return {
      type: "SUBMIT"
   };
}
export function onIncrementClick(e) {
   return {
     type:"INCREMENT"
   };
}
export function toggle() {
  return {
    type:"TOGGLE"
  };
}