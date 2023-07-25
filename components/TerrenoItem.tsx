import { FC } from "react";
import { TerrenoProps } from "@/utils/types";

const TerrenoItem: FC<TerrenoProps> = ({ terreno }) => {
	return (
		<ul className="mr-6">
			<li>Valor comercial: { terreno?.valorComercial }</li>
			<li>Área: { terreno?.area }</li>
			<li>Tipo: { terreno?.tipo }</li>
			<li>Cerca a fuentes de agua: { terreno.cercaFuenteAgua ? terreno?.cercaFuenteAgua : null }</li>
			<li>Tiene construcciones: { terreno.tieneConstrucciones ? terreno?.tieneConstrucciones : null }</li>
		</ul>
	);
}

export default TerrenoItem;
