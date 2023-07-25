import { FC } from "react";
import Link from "next/link";
import type { PredioItemProps } from "@/utils/types";

const PredioItem: FC<PredioItemProps> = ({ predio }) => {
	return (
		<li className='border-2 border-solid border-blue-400 rounded-md py-5 px-5 flex justify-between items-center mb-10'>
			<p>{ predio.numeroPredial }</p>
			<p>{ predio.nombre }</p>
			<p>{ predio.departamento }</p>
			<div>
				<Link className='uppercase bg-orange-300 py-1 px-3 mr-5 rounded-md' href={`/predio/${predio.id}`}>ver</Link>
				<button className='uppercase bg-red-500 py-1 px-3 rounded-md'>eliminar</button>
			</div>
		</li>
	);
}

export default PredioItem;