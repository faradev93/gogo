{/* <table
          id="table"
          className="w-full h-full border-[10px] border-red-400 rounded-3xl flex gap-5 items-center justify-center flex-wrap"
        >
          {cardData.map((any) => {
            return (
              <thead>
                <tr className="flex flex-col justify-center">
                  <td>{any.name}</td>
                  <tr className="flex justify-center">
                    <td>{any.id}</td>
                  </tr>
                  <tr className="flex justify-center">
                    <td>
                      <img src={any.image} width={100} height={100} alt="" />
                    </td>
                  </tr>
                </tr>
              </thead>
            );
          })}
        </table>
        ; */}

        {/* Chat GPT MODELESHE */}
        {/* <table
  id="table"
  className="w-full h-full border-collapse border border-red-400 rounded-3xl"
>
  <thead>
    <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    {cardData.map((any) => (
      <tr key={any.id}>
        <td>{any.name}</td>
        <td>{any.id}</td>
        <td>
          <img src={any.image} width={100} height={100} alt="" />
        </td>
      </tr>
    ))}
  </tbody>
</table> */}
        {/* 
      {formha.map((changIz) => {
        return <Form data2={changIz} />;
      })}

       */}
        {/* {cardData.map((wow) => {
          return <CardWrapper data={wow} />;
        })} */}






          function stateUpdater(input) {
    function Updater(newInput2) {
      input = newInput2;
      return newInput2;
    }
    return [input, Updater];
  }
  const yarn = stateUpdater("golabi");
  console.log(yarn[1]("New Test Khobi bod"));
