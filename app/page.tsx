import PredioItem from '@/components/PredioItem'
import { db } from '@/lib/db'

/* Due this a server component, so you can dealing with your database directly */
const getData = async() => {
	const predios = await db.predio.findMany();
	return predios;
}

export default async function Home() {
	const predios = await getData();

  return (
		<section className="w-4/5">
			<h1 className='text-center text-2xl'>Lista de predios</h1>
			<ul className='py-20'>
				{
					predios?.map(predio => <PredioItem key={predio.id} predio={predio} />)
				}
			</ul>
		</section>
  )
}
