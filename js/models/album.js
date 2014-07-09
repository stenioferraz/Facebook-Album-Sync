/**
* Model: stores all the data about a facebook album
*/

( function(){

	var albumModel = Backbone.Model.extend({
		idAttribute: 'id',
		defaults:{
			name: '',
			link: '',
			cover_photo: '',
			count: '',
			created_time: "",
         	updated_time: "",
		}
	}); 

	// hook into global name space
	var fbas = fbas || {};
	
	fbas.albumModel = albumModel

} () ); // end model 