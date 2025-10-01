//
const fn = () => null;

const isArrowFunction = (fn) => (
  typeof(fn) === "function" &&
    typeof(fn.prototype) === "undefined"
)
