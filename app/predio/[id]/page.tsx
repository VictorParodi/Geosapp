import { FC } from "react";
import type { Params } from "@/utils/types";
import { db } from "@/lib/db";

const getData = async(id: string) => {
	const predio = await db.predio.findFirst({
		where: { id }
	});

	return predio;
}

const Predio: FC<Params> = async({ params }) => {
	const predio = await getData(params.id);

	return (
		<main>
			<section>
				<h1 className='text-center text-2xl mb-5'>Detalles del predio</h1>
				<ul>
					<li>Predial: { predio?.numeroPredial }</li>
					<li>Nombre: { predio?.nombre }</li>
					<li>Departamento: { predio?.departamento }</li>
					<li>Municipio: { predio?.municipio }</li>
					<li>Terreno: { predio?.tieneTerreno ? "SI" : "NO" }</li>
					<li>Avalúo: { predio?.avaluo }</li>
				</ul>
			</section>
		</main>
	);
}

export default Predio;
