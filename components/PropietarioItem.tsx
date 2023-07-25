import { FC } from "react";
import { PropietarioProps } from "@/utils/types";

const PropietarioItem: FC<PropietarioProps> = ({ propietario }) => {
	return (
		<ul className="mr-6">
			<li>Tipo: { propietario?.tipoPropietario }</li>
			<li>Tipo documento: { propietario?.tipoDocumento }</li>
			<li>Número documento: { propietario?.numeroDocumento }</li>
			<li>Nombre: { propietario?.nombre }</li>
			{ propietario.apellido ? <li>Apellido: { propietario?.apellido }</li> : null}
			<li>Dirección: { propietario?.direccion }</li>
			<li>Teléfono: { propietario?.telefono }</li>
			{ propietario.email && <li>Teléfono: { propietario?.email }</li> }
		</ul>
	);
}

export default PropietarioItem;
