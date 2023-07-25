type Predio = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	numeroPredial: string;
	avaluo: number;
	nombre: string;
	departamento: string;
	municipio: string;
	tieneTerreno: boolean;
}

type PredioItemProps = {
	predio: Predio
}

type Params = {
	params: { id: string }
}

export type { Params, Predio, PredioItemProps }