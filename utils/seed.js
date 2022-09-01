
const Comic = require('../models/comic');
const Comment = require('../models/comment');


const comic_seeds = [
	
	{
	title: "Black Widow",
	description: "Black Widow is a superhero appearing in American comic books published. Batman is a superhero published by DC Comics. Operating in Gotham City, he serves as its protector",
	author: "Stan Lee",
	publisher: "Marvel",
	date: "2020-01-01",
	series: "Iron Man",
	issue: 1,
	genre: "superhero",
	color: true,

	image_link: "https://i.annihil.us/u/prod/marvel/i/mg/c/40/5f3d36dc73d2a/clean.jpg"
	},
	{
	title: "Batman",
	description: "Batman is a superhero published by DC Comics. Operating in Gotham City, he serves as its protector, using the symbol of a bat to strike fear into the hearts of criminals. Unlike other superheroes, Batman is often depicted to lack any superpowers, instead using lifelong training and equipment to fight crime.",
	author: "Stan Lee",
	publisher: "Marvel",
	date: "2020-01-01",
	series: "Batman",
	issue: 1,
	genre: "superhero",
	color: true,

	image_link: "https://www.previewsworld.com/SiteImage/MainImage/STL153767.jpg"
	},
	{
	title: "Iron Man",
	description: "Tony Stark is Iron Man: Technological visionary, wealthy playboy, unparalleled engineer, and armored Avenger. But in one terrifying instant, his greatest invention becomes his greatest mistake. The lethal techno virus Extremis is out in the wild and out for grabs to the highest bidder!",
	author: "Stan Lee",
	publisher: "Marvel",
	date: "2020-01-01",
	series: "Ironman",
	issue: 1,
	genre: "superhero",
	color: true,

	image_link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1409501484i/16002166.jpg"
	}
]
	  
	  
const seed = async () => {
	// delete all
	await Comic.deleteMany();
	console.log("Deleted all the comics")
	
	await Comment.deleteMany();
	console.log("Deleted all the comments")
	
/*
	//create 3 new objects
	for (const comic_seed of comic_seeds){
		let comic = await Comic.create(comic_seed);
		console.log("Created a new comic:", comic.title)
		//create a new object
		await Comment.create({
			text: "I ruved this Romic rook!",
			user: "scooby_doo",
			comicId: comic._id
		})
		console.log("Created a new comment!")
	}
*/
	
}


module.exports = seed; 


