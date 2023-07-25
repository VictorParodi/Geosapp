import { db } from "@/lib/db";

export default async function handler(req, res) {
	await db.predio.delete({
		where: { id: req.body.id }
	})
};
