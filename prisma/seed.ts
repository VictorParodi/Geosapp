import { db } from "@/lib/db";

async function main() {
	const newPredio = await db.predio.upsert({
		where: { numeroPredial: "0023" },
		update: {},
		create: {
			numeroPredial: "0023",
			avaluo: 150000000,
			nombre: "Predio tres",
			departamento: "Antioquia",
			municipio: "Rio Negro",
			propietarios: {
				create:
					{
						tipoPropietario: "PERSONA_NATURAL",
						tipoDocumento: "CC",
						numeroDocumento: 1000900800,
						nombre: "John",
						apellido: "Doe",
						direccion: "Calle Falsa 123",
						telefono: "401 300 22 11",
						email: "jdoe@mail.com",
					}
			},
			construcciones: {
				create: [
					{
						numeroPisos: 3,
						area: 200,
						tipo: "RESIDENCIAL",
						direccion: "Calle Falsa 012",
					}
				]
			},
			tieneTerreno: false,
		},
		include: {
			propietarios: true,
			construcciones: true
		}
	});

	console.log({ newPredio })
}

main()
	.then(async () => {
  	await db.$disconnect();
	})
	.catch(async (e) => {
  	console.error(e);
  	await db.$disconnect();
  	process.exit(1);
	});