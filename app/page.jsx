import Filters from "@/components/Filters";
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
	const desserts = []

	const dataFetch = await fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', options)
	.then(response => response.json())															
	.then(response => dataProducts.push(response))	
	.catch(err => console.error(err));

	const dataDesserts = await fetch('https://pizza-and-desserts.p.rapidapi.com/desserts', options)
	.then(response => response.json())
	.then(response => desserts.push(response))
	.catch(err =>  console.log(err))

	
	desserts[0].forEach((prod)=>{
		dataProducts[0].push(prod)
	})

	
		
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full px-4 sm:pr-5 md:pl-[10%] xl:pl-[5%]  2xl:p-0  bg-[#262737]">

			<div className="w-full flex justify-center">

			  <Filters />

			</div>
 
      {dataProducts && <HomeProducts products={dataProducts} />}
			
      
    </main>
  )
}

export default Home