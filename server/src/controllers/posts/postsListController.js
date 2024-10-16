import { totalPostCountModel, selectAllPostsModel } from "../../models/posts/index.js";

const postsListController = async (req, res, next) => {
	try {
		let { characterId, searchTerm, page = 1 } = req.query;
		console.log("postsListController -> characterId", characterId);

		page = Number(page);
		const limit = 4;
		const offset = (page - 1) * limit;
		const totalPosts = await totalPostCountModel();
		const totalPages = Math.ceil(totalPosts / limit);

		const posts = await selectAllPostsModel(searchTerm, characterId, limit, offset);

		res.send({
			status: "ok",
			data: {
				posts,
				totalPages,
				currentPage: page,
				totalPosts,
				prevPage: page > 1 ? page - 1 : null,
				nextPage: page < totalPages ? page + 1 : null,
			},
		});
	} catch (error) {
		next(error);
	}
};

export default postsListController;
