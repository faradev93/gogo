export default function Greeting(props) {
  return (
    <div>
      <p>Hello {props.name ? props.name : "No Name"}</p>
    </div>
  );
}
