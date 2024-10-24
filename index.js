function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className='header'>I'm learning React</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>

  )
}


ReactDOM.render(<Navbar />,document.getElementById("root"));


// const element  = (<h1 className='header'>I'm learning React<p>test</p></h1>);
// ReactDOM.render(element,document.getElementById("root"));

// const h1 = document.createElement("h1");
// h1.textContent = "I'm learning";
// h1.className = "header";
// document.getElementById("root").append(h1);

// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );

//   fetchPromise.then((response)=>{
//     const result = response.json();
//     result.then((data)=>{
//         console.log(data[0])
//     })
//   })

const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise.then((response)=>{
    if(!response.ok) {
        throw new Error(`HTTP Error:${response.status}`)
    }
    return response.json();
  })
  .then((data)=>{
    console.log(data[0])
  }) //browers logging error is seperate from promising handle error, status 404 is still resovled promise
  .catch((error)=> {
    console.error(`Could not get results: ${error}`)
  });

  const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );


  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );


  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );


  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]).then((responses)=>{
    for(const response of responses) {
        console.log(`${response.url}:${response.status}`);}
  })
  .catch((error)=>{
    console.error(error);
  })

  //use of async await
async function fetchUrl() {
    const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      );
    if(!response.ok) {
        throw new Error(`rejected: ${response.status}`)
    }
    const data = await response.json();
    return data
}

const promise = fetchUrl();
promise
.then((data)=>{
    return data;
})
.catch((error) =>{
    console.log(error);
})
