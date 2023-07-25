"use client";
import { FC } from "react";
import { crearNuevoPredio } from "@/lib/api";
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "@/utils/types";
import { inputClassName } from "@/utils/css-classes";

const NuevoPredio: FC = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
	const router = useRouter()

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		crearNuevoPredio(data);
		router.push('/');
	}

  return (
		<section>
			{/* ------------------ Datos del predio ------------------ */}
			<h1 className='text-center text-2xl mb-5'>Ingresa los datos del predio</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className="mb-5">
					<input
						className={`${inputClassName}`}
						placeholder="Número de predial"
						{...register("numeroPredial", { required: true })}
					/>
					{errors.numeroPredial && <span>Campo obligatorio</span>}

					<input
						className={`${inputClassName}`}
						placeholder="Avalúo"
						{...register("avaluo", { required: true })}
					/>
					{errors.avaluo && <span>Campo obligatorio</span>}

					<input
						className={`${inputClassName}`}
						placeholder="Nombre"
						{...register("nombre", { required: true })}
					/>
					{errors.nombre && <span>Campo obligatorio</span>}

					<input
						className={`${inputClassName}`}
						placeholder="Departamento"
						{...register("departamento", { required: true })}
					/>
					{errors.departamento && <span>Campo obligatorio</span>}
				</fieldset>

				<fieldset className="mb-5">
					<input
						className={`${inputClassName}`}
						placeholder="Municipio"
						{...register("municipio", { required: true })}
					/>
					{errors.municipio && <span>Campo obligatorio</span>}

				<label>¿Tiene terreno?</label>
				<input
					className={`${inputClassName}`}
					type="checkbox"
					{...register("tieneTerreno")}
				/>

				<label>¿Tiene construccion?</label>
				<input
					className={`${inputClassName}`}
					type="checkbox"
					{...register("tieneConstruccion")}
				/>
				</fieldset>


				{/* ------------------ Datos del propietario ------------------ */}
				<h2 className='text-center text-2xl mb-5'>Ingresa los datos del propietario</h2>
				<fieldset className="mb-5">
					<select
						className={`${inputClassName}`}
						{...register("tipoPropietario", { required: true })}
					>
						<option value="">Seleccione el tipo de propietario</option>
						<option value="PERSONA_NATURAL">Persona natural</option>
						<option value="PERSONA_JURIDICA">Persona jurídica</option>
					</select>
					{errors.tipoPropietario && <span>Campo obligatorio</span>}

					<select
						className={`${inputClassName}`}
						{...register("tipoDocumentoPropietario", { required: true })}
					>
						<option value="">Seleccione el tipo de documento</option>
						<option value="CC">CC</option>
						<option value="NIT">NIT</option>
						<option value="CE">CE</option>
					</select>
					{errors.tipoDocumentoPropietario && <span>Campo obligatorio</span>}

					<input
						className={`${inputClassName}`}
						placeholder="Número de documento"
						{...register("numeroDocumento", { required: true })}
					/>
					{errors.numeroDocumento && <span>Campo obligatorio</span>}
				</fieldset>

				<fieldset className="mb-5">
					<input
						className={`${inputClassName}`}
						placeholder="Nombre del propietario"
						{...register("nombrePropietario", { required: true })}
					/>
					{errors.nombrePropietario && <span>Campo obligatorio</span>}

					<input
						className={`${inputClassName}`}
						placeholder="Apellido del propietario"
						{...register("apellidoPropietario")}
					/>

					<input
						className={`${inputClassName}`}
						placeholder="Dirección del propietario"
						{...register("direccionPropietario", { required: true })}
					/>
					{errors.direccionPropietario && <span>Campo obligatorio</span>}

					<input
						className={`${inputClassName}`}
						placeholder="Teléfono del propietario"
						{...register("telefonoPropietario", { required: true })}
					/>
					{errors.telefonoPropietario && <span>Campo obligatorio</span>}
				</fieldset>

				<fieldset>
					<input
						className={`${inputClassName}`}
						placeholder="Email del propietario"
						{...register("emailPropietario")}
					/>
				</fieldset>

				{/* ------------------ Datos de la construcción ------------------ */}
				{
					watch("tieneConstruccion")
					? <>
							<h2 className='text-center text-2xl mb-5'>Ingresa los datos de la construccion</h2>
							<fieldset className="mb-5">
								<select
									className={`${inputClassName}`}
									{...register("tipoConstruccion", { required: true })}
								>
									<option value="">Seleccione el tipo de construccion</option>
									<option value="INDUSTRIAL">Industrial</option>
									<option value="COMERCIAL">Comercial</option>
									<option value="RESIDENCIAL">Residencial</option>
								</select>
								{errors.tipoConstruccion && <span>Campo obligatorio</span>}

								<input
									className={`${inputClassName}`}
									placeholder="Número de pisos"
									{...register("numeroPisos", { required: true })}
								/>
								{errors.numeroPisos && <span>Campo obligatorio</span>}

								<input
									className={`${inputClassName}`}
									placeholder="Área"
									{...register("areaConstruccion", { required: true })}
								/>
								{errors.areaConstruccion && <span>Campo obligatorio</span>}

								<input
									className={`${inputClassName}`}
									placeholder="Dirección"
									{...register("direccionConstruccion", { required: true })}
								/>
								{errors.direccionConstruccion && <span>Campo obligatorio</span>}
							</fieldset>
						</>
					: null
				}


				{/* ------------------ Datos del terreno ------------------ */}
				{
					watch("tieneTerreno")
					? <>
							<h2 className='text-center text-2xl mb-5'>Ingresa los datos del terreno</h2>
							<fieldset className="mb-5">
								<select
									className={`${inputClassName}`}
									{...register("tipoTerreno", { required: true })}
								>
									<option value="">Seleccione el tipo de terreno</option>
									<option value="RURAL">Rural</option>
									<option value="URBANO">Urbano</option>
								</select>
								{errors.tipoTerreno && <span>Campo obligatorio</span>}

								<input
									className={`${inputClassName}`}
									placeholder="Valor comercial"
									{...register("valorComercial", { required: true })}
								/>
								{errors.valorComercial && <span>Campo obligatorio</span>}

								<input
									className={`${inputClassName}`}
									placeholder="Área"
									{...register("areaTerreno", { required: true })}
								/>
								{errors.areaTerreno && <span>Campo obligatorio</span>}

								<label>Cerca a fuentes de agua</label>
								<input
									className={`${inputClassName}`}
									type="checkbox"
									{...register("cercaFuentesAgua")}
								/>

								<label>Tiene construcciones</label>
								<input
									className={`${inputClassName}`}
									type="checkbox"
									{...register("terrenoConConstruccion")}
								/>
							</fieldset>
						</>
					: null
				}

				<input type="submit" className="bg-blue-300 py-1 px-3 mr-5 mt-5 rounded-md" />
			</form>
		</section>
	)
}

export default NuevoPredio;