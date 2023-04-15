import HomeProducts from "@/components/HomeProducts";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '82226da186mshf53c92b3803a30fp11a5c4jsnb984c601f71f',
		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
	
	}
};

const Home = async () => {
  
	const dataProducts= [];

	const dataFetch = await fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', options)
	.then(response => response.json())
	.then(response => dataProducts.push(response))
	.catch(err => console.error(err));



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1F1D2B]">

      <HomeProducts products={dataProducts} />
      
    </main>
  )
}

export default Home