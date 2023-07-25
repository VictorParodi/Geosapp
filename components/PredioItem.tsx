import { FC } from "react";
import Link from "next/link";

const PredioItem: FC = () => {
	return (
		<li className='border-2 border-solid border-blue-400 rounded-md py-5 px-5 flex justify-between items-center mb-10'>
			<p>Número predio</p>
			<p>Nombre predio</p>
			<p>Departamento</p>
			<div>
				<Link className='uppercase bg-orange-300 py-1 px-3 mr-5 rounded-md' href={`/predio/123`}>ver</Link>
				<button className='uppercase bg-red-500 py-1 px-3 rounded-md'>eliminar</button>
			</div>
		</li>
	);
}

export default PredioItem;