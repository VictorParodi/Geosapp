import { FC } from "react";
import { ConstruccionProps } from "@/utils/types";

const ConstruccionItem: FC<ConstruccionProps> = ({ construccion }) => {
	return (
		<ul className="mr-6">
			<li>Pisos: { construccion?.numeroPisos }</li>
			<li>Área: { construccion?.area }</li>
			<li>Tipo: { construccion?.tipo }</li>
			<li>Dirección: { construccion?.direccion }</li>
		</ul>
	);
}

export default ConstruccionItem;
