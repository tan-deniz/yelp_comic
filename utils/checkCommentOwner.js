const Comment = require('../models/comment');

const checkCommentOwner = async (req, res, next) => {
	if (req.isAuthenticated()) {//check if the user is logged in
		//if logged check if they own page 
		const comment = await Comment.findById(req.params.commentId).exec();
		//console.log(Comment.owner.id);
		//console.log(req.user._id);
		// if owner render the form to edit
		if (comment.user.id.equals (req.user._id )){ //mangoo objesi ile string karşılaştırma kendi yöntemi
			next();
		}
		else { //if not redirect to show page
			res.redirect("back");
		}
	} else {// if not redirect login
		res.redirect("/login");
	}
}

module.exports = checkCommentOwner;