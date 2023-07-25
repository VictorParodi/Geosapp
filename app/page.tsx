import PredioItem from '@/components/PredioItem'
import styles from './page.module.css'

export default function Home() {
  return (
		<section className="w-4/5">
			<h1 className='text-center text-2xl'>Lista de predios</h1>
			<ul className='py-20'>
				<PredioItem />
				<PredioItem />
				<PredioItem />
			</ul>
		</section>
  )
}
