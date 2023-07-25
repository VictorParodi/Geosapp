type Predio = {
	id: string,
	createdAt: Date,
	updatedAt: Date,
	numeroPredial: string,
	avaluo: number,
	nombre: string,
	departamento: string,
	municipio: string,
	tieneTerreno: boolean,
}

type PredioItemProps = {
	predio: Predio
}

type Params = {
	params: { id: string }
}

type Propietario = {
	id: string,
	createdAt: Date,
	updatedAt: Date,
	tipoPropietario: string,
	tipoDocumento: string,
	numeroDocumento: string,
	nombre: string,
	apellido: string,
	direccion: string,
	telefono: string,
	email: string | null,
	predioId: string | null
}

type PropietarioProps = {
	propietario: Propietario;
}

type Construccion = {
	id: string | null,
	createdAt: Date | null,
	updatedAt: Date | null,
	numeroPisos: string | null,
	area: number | null,
	tipo: string | null,
	direccion: string | null,
	predioId: string | null
}

type ConstruccionProps = {
	construccion: Construccion,
}

type Terreno = {
	id: string | null,
	createdAt: Date | null,
	updatedAt: Date | null,
	area: number | null,
	tipo: string | null,
	valorComercial: number | null,
	cercaFuenteAgua: boolean | null,
	tieneConstrucciones: boolean | null,
	predioId: string | null
}

type TerrenoProps = {
	terreno: Terreno,
}

type Inputs = {
  numeroPredial: string,
  avaluo: string,
	nombre: string,
	departamento: string,
	municipio: string,
	tieneTerreno: boolean,
	tieneConstruccion: boolean,

	numeroDocumento: string,
	nombrePropietario: string,
	apellidoPropietario: string,
	direccionPropietario: string,
	telefonoPropietario: string,
	emailPropietario: string,
	tipoPropietario: string,
	tipoDocumentoPropietario: string,

	tipoConstruccion: string,
	numeroPisos: string,
	areaConstruccion: string,
	direccionConstruccion: string

	tipoTerreno: string,
	areaTerreno: string,
	valorComercial: string,
	cercaFuentesAgua: boolean,
	terrenoConConstruccion: boolean,
};

export type { Params, Predio, PredioItemProps, PropietarioProps, ConstruccionProps, TerrenoProps, Inputs }
