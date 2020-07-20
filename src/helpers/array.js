export const clone = array => [...array];
export const tail = array => clone(array).pop();
