/**
* Collection: stores all albums 
*/

( function(){

	var albumCollection = Backbone.Collection.extend({
		model:  fbas.albumModel,
		dataSource: '',
		initialize: function(){
			this.dataSource = var albumsGraphUrl = "https://graph.facebook.com/"+ fbas.facebookPageName +"/albums/" ;
			this.sync();
		}, 
		sync: function(){
			// custom sync method for getting all album data from facebook

			// reset this so that it contains no models

			// load the facebook graph url and add each models 
		}
	}); 

	// hook into global name space
	var fbas = fbas || {};
	fbas.albumCollection = albumCollection

} () ); // end model 