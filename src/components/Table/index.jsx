export default function Table() {
  return;
  <table
    id="table"
    className="w-full h-full border-[10px] border-red-400 rounded-3xl flex gap-5 items-center justify-center flex-wrap"
  >
    {cardData.map((any) => {
      return (
        <th className="flex flex-col justify-center">
          <tr>{any.name}</tr>
          <th className="flex justify-center">
            <tr>{any.id}</tr>
          </th>
          <th className="flex justify-center">
            <tr>
              <img src={any.image} alt="" />
            </tr>
          </th>
        </th>
      );
    })}
  </table>;
}
