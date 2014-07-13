/**
* View: album
*/

( function( _, $, Backbone ){

	var AlbumView = Backbone.View.extend({
		tagName: 'div',

		initialize: function( model ){
			this.model =  model;
			this.getCoverPhotoUrl();
			
			/*		if( prettypermalinkon ){
						photoslink = document.URL+"?fbasid="+data.data[i].id;
					}else{
						photoslink = document.URL+"&fbasid="+data.data[i].id;
						
					}*/
			this.template = _.template('<a href=> <img src="<%=cover_photo_url%>"> ');
		}, // end initialize function

		/**
		* Get the album specific output and render the markup
		* @returns template string
		*/
		render: function( ){

			this.$el.html(  this.template( this.model.toJSON() ) ); 
			return this;
			//return template;

		}, // end render

		/**
		* Get the album specific output and render the markup
		* @returns template string
		*/
		getCoverPhotoUrl: function(){
			// the cover photo should be present
			if( '' !==this.model.toJSON().cover_photo ){

				// create the link to the cover photo's json data which 
				// includes all the dimensionas and comments on the photo
				coverPhotoJsonUrl = 'https://graph.facebook.com/'+ this.model.toJSON().cover_photo;
				
				$.ajax({ url: coverPhotoJsonUrl, type:'GET', dataType:'jsonp'})
		
				.done(function( coverPhotoData ){
				
					var imgsrc = '';

				   if( coverPhotoData.picture ){ // if this album has a cover photo
						imgsrc =  coverPhotoData.picture;

				   }else{ //use one of the other available images

				   		_.each( coverPhotoData.images , image function(image){
				   			// select the image if the height is 720
				   			if( '720' == image.height ){
				   				imgsrc = image.source;
				   			}	

				   		});
				   		
				   		if( ''===imgsrc  ){ // if the imagesrc has not been filled set it randomly:

				   				var half = Math.round( coverPhotoData.images.length / 2 );
				   				imgsrc = coverPhotoData.images[half].source;
				   		}
				   
				   }	
				});   

			}  // end if this.model.toJSON().cover_photo is not empty

			return this;

		}, // end getCoverPhotoUrl

	}); // end backbone view

	// hook into global name space
	var fbas = window.fbas || {};
	fbas.AlbumView =  AlbumView ;
	window.fbas = fbas;

} ( _ , jQuery, Backbone ) ); // end model 