export function updater(input) {
  function newUpdater(newInput) {
    return newInput;
  }

  return [input, newUpdater];
}
const check = updater(0);
console.log(check);
export default function Updater() {
  return <div></div>;
}
