const Comic = require('../models/comic');

const checkComicOwner = async (req, res, next) => {
	if (req.isAuthenticated()) {//check if the user is logged in
		//if logged check if they own page 
		const comic = await Comic.findById(req.params.id).exec();
		//console.log(comic.owner.id);
		//console.log(req.user._id);
		// if owner render the form to edit
		if (comic.owner.id.equals (req.user._id )){ //mangoo objesi ile string karşılaştırma kendi yöntemi
			next();
		}
		else { //if not redirect to show page
			res.redirect("back");
		}
	} else {// if not redirect login
		res.redirect("/login");
	}
}

module.exports = checkComicOwner;