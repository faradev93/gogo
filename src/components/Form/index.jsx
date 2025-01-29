export default function Form(prop) {
  console.log(prop);
  const handleChange = (e) => {
    console.log(e.target.checked), console.log(e.target.id);
  };

  return (
    <div className="flex gap-5 items-center select-none font-serif text-2xl">
      <input
        type="checkbox"
        id={prop.data2.id}
        name={prop.data2.id}
        value="Bike"
        onChange={handleChange}
        className="size-5"
      />
      <label htmlFor={prop.data2.id}>{prop.data2.label}</label>
    </div>
  );
}
