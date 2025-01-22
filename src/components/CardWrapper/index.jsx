export default function CardWrapper(prop) {

  return (
    <div className="w-[270px] h-[300px] bg-slate-400 rounded-2xl flex flex-col justify-center items-center">
      <div className="h-[150px] w-[200px] flex justify-center bg-gray-800 rounded-3xl">
        <img src={prop.data.image} width={150} height={200} alt="no pic" />
      </div>
      <p className="font-semibold text-lg">Name: {prop.data.name}</p>
      <p className="font-semibold text-[0.8rem]">Mail: {prop.data.email}</p>
      <p className="font-mono text-xl bg-lime-700 rounded-xl">
        ID: <span className="mr-5 text-yellow-600">{prop.data.id}</span>{" "}
      </p>
    </div>
  );
}
