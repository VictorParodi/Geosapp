const fetcher = async({ url, method, body, json = true }) => {
	const res = await fetch(url, {
		method,
		body: body && JSON.stringify(body),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		}
	});

	if (!res.ok) {
		console.log(res);
		throw new Error("API error");
	}

	const data = await res.json();
	return data.data;
}

export const borrarPredio = async(id: string) => {
	return fetcher({
		url: "/api/borrar",
		method: "DELETE",
		body: {
			id,
		},
		json: true
	});
}

export const crearNuevoPredio = async(form) => {
	return fetcher({
		url: "/api/predio",
		method: "POST",
		body: {
			numeroPredial: form.numeroPredial,
			avaluo: Number(form.avaluo),
			nombre: form.nombre,
			departamento: form.departamento,
			municipio: form.municipio,
			tieneTerreno: form.tieneTerreno,

			numeroDocumento: form.numeroDocumento,
			nombrePropietario: form.nombrePropietario,
			apellidoPropietario: form.apellidoPropietario,
			direccionPropietario: form.direccionPropietario,
			telefonoPropietario: form.telefonoPropietario,
			emailPropietario: form.emailPropietario,
			tipoPropietario: form.tipoPropietario,
			tipoDocumentoPropietario: form.tipoDocumentoPropietario,

			tipoConstruccion: form.tipoConstruccion,
			numeroPisos: form.numeroPisos,
			areaConstruccion: Number(form.areaConstruccion),
			direccionConstruccion: form.direccionConstruccion,

			tipoTerreno: form.tipoTerreno,
			areaTerreno: Number(form.areaTerreno),
			valorComercial: Number(form.valorComercial),
			cercaFuentesAgua: form.cercaFuentesAgua,
			terrenoConConstruccion: form.terrenoConConstruccion,
		},
		json: true
	});
}