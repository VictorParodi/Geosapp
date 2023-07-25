import { db } from "@/lib/db";

export default async function handler(req, res) {
	await db.predio.create({
		data: {
			numeroPredial: req.body.numeroPredial,
			avaluo: req.body.avaluo,
			nombre: req.body.nombre,
			departamento: req.body.departamento,
			municipio: req.body.municipio,
			tieneTerreno: req.body.tieneTerreno,
			propietarios: {
				create: [
					{
						tipoPropietario: req.body.tipoPropietario,
						tipoDocumento: req.body.tipoDocumentoPropietario,
						numeroDocumento: req.body.numeroDocumento,
						nombre: req.body.nombrePropietario,
						apellido: req.body.apellidoPropietario || "N/A",
						direccion: req.body.direccionPropietario,
						telefono: req.body.telefonoPropietario,
						email: req.body.emailPropietario,
					},
				]
			},
			construcciones: {
				create: [
					{
						numeroPisos: req.body.numeroPisos,
						area: req.body.areaConstruccion,
						tipo: req.body.tipoConstruccion,
						direccion: req.body.direccionConstruccion,
					}
				]
			},
			terreno: {
				create: {
					tipo: req.body.tipoTerreno,
					area: req.body.areaTerreno,
					valorComercial: req.body.valorComercial,
					cercaFuenteAgua: req.body.cercaFuentesAgua,
					tieneConstrucciones: req.body.terrenoConConstruccion,
				}
			}
		}
	})
};
