export function increment(id) {
   return {
      type: {Action: 'INCREMENT', id: id},
   }
}
export function decrement(id) {
   return {
      type: {Action: 'DECREMENT', id: id},

   }
}
export function reset(id) {
   return{
      type: {Action: 'RESET', id: id},
   }

}