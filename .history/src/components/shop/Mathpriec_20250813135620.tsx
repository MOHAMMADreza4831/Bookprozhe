



function Mathprice () {
    


  const handelMAth = ()=> {
  let summari = 0;

  basket?.data.forEach(item => {
  item.book_files.forEach(file => {
    if (file.status === 2) {
      summari += file.price;
      setsummary(summari)
    }
  });
});

total+=summari

}


    return (
        <>
        </>
    ) 
}