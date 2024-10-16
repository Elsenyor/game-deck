import sendMailUtil from "../../utils/sendEmailUtil.js";
import { selectJoinReqByIdModel, manageGuildRequest, addMemberToGuildModel } from "../../models/guilds/index.js";

const validateMembersController = async (req, res, next) => {
	try {
		const { status } = req.body;
		const joinReqId = req.params.joinReqId;

		const requestArray = await selectJoinReqByIdModel(joinReqId);
		const request = requestArray[0];

		const characterId = request.character_id;

		const guildId = req.params.guildId;

		const { characterName, guildName, userMail } = await manageGuildRequest(characterId, guildId, status, joinReqId);
		const emailSubject = "Solicitud de union a la hermandad";
		let emailBody = "";
		status === "approved"
			? (emailBody = `
    ¡Estimad@ ${characterName}!

    Su solicitud de union para la hermandad ${guildName} ha sido aceptada. 
    
    Si necesitas mas informacion puedes contactar con el admistrador de la hermandad.

   `)
			: (emailBody = `
    ¡Estimad@ ${characterName}!

    Su solicitud de union para la hermandad ${guildName} ha sido rechazada. 
    
    Si necesitas mas informacion puedes contactar con el admistrador de la hermandad.

   `);
		status === "approved" && (await addMemberToGuildModel(characterId, guildId));

		await sendMailUtil(userMail, emailSubject, emailBody);

		res.send({
			status: "ok",
			message: "Miembro validado y añadido a la hermandad",
			data: { characterName, guildName, userMail },
		});
	} catch (err) {
		console.log(err);
		next(err);
	}
};

export default validateMembersController;
