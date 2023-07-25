import ConstruccionItem from "@/components/ConstruccionItem";
import { FC } from "react";
import type { Params } from "@/utils/types";
import PropietarioItem from "@/components/PropietarioItem";
import TerrenoItem from "@/components/TerrenoItem";
import { db } from "@/lib/db";

const getData = async(id: string) => {
	const predio = await db.predio.findFirst({
		where: { id },
		include: {
			propietarios: true,
			construcciones: true,
			terreno: true,
		}
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


				<h2 className="mt-10 text-center text-2xl mb-5">Propietarios</h2>
				<div className="flex justify-between">
					{ predio?.propietarios.map(propietario => <PropietarioItem key={propietario.id} propietario={propietario} />) }
				</div>

				{
					predio?.construcciones.length
					? <>
							<h2 className="mt-10 text-center text-2xl mb-5">Construcciones</h2>
							<div className="flex justify-between">
								{ predio?.construcciones.map(construccion => <ConstruccionItem key={construccion.id} construccion={construccion} />) }
							</div>
						</>
					: null
				}

				{
					predio?.terreno
					? <>
							<h2 className="mt-10 text-center text-2xl mb-5">Terreno</h2>
							<div className="flex justify-between">
								<TerrenoItem  terreno={predio?.terreno} />
							</div>
						</>
					: null
				}
			</section>
		</main>
	);
}

export default Predio;
