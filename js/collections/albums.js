/**
* Collection: stores all albums 
*/

( function( _, $, Backbone ){

	var albumCollection = Backbone.Collection.extend({
		//model:  fbas.albumModel,
		dataSource: '',
		/**
		* Initialize function
		*/
		initialize: function(){
			this.dataSource = "https://graph.facebook.com/"+ fbas.facebookPageName +"/albums/" ;
			
		}, // end initialize function

		/**
		* sync function
		* custom sync method for getting all album data from facebook
		* @param fbDataUrl must contain http or https
		* @returns xhr object
		*/
		sync: function( fbDataUrl ){ 

			// reset this so that it contains no models
			var sync = this.sync;
			var thisCollection = this;
			// load the facebook graph url and add each models 
			console.log(fbDataUrl);

			return $.ajax({ url:fbDataUrl , 
					 contentType: 'jsonp' 
				})
				.done( function( graph ) {
 	
					//add each albums into the collection
						_.each( graph.data , function( albumJson ){

							// this referes to the current colletcion 
							thisCollection.add( albumJson );

						}, thisCollection );

					// check for the next page url 

					if( graph.paging.next ){

						// get the next pages data and 
						thisCollection.sync( graph.paging.next );
					}
						
  				})
				.fail( function( data ) {
				
					console.log("Error: the Facebook Graph API might be down:");
					console.log(data);
				
				});// end $.ajax();

		}, // end sync function
	}); 

	// hook into global name space
	var fbas = window.fbas || {};
	fbas.albumCollection = albumCollection
	window.fbas = fbas;

} ( _ , jQuery, Backbone ) ); // end model 