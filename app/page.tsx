import Link from 'next/link';
import PredioItem from '@/components/PredioItem'
import { db } from '@/lib/db'

/* Due this a server component, so you can dealing with your database directly */
const getData = async() => {
	const predios = await db.predio.findMany({ orderBy: {
		createdAt: 'desc'
	} });
	return predios;
}

export default async function Home() {
	const predios = await getData();

  return (
		<section className="w-4/5">
			<h1 className='text-center text-2xl'>Lista de predios</h1>
			<Link href="/predio/nuevo" className='uppercase bg-blue-300 py-1 px-3 mr-5 rounded-md'>Crear nuevo predio</Link>
			<ul className='py-20'>
				{
					predios?.map(predio => <PredioItem key={predio.id} predio={predio} />)
				}
			</ul>
		</section>
  )
}
