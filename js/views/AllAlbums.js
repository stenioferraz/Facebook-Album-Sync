/**
* View: AllAlbumsView
*/

( function( _, $, Backbone ){

	var allAlbumsView = Backbone.View.extend({
		el: '#fbalbumsync',

		initialize: function(){
			this.collection =  window.fbas.albumCollection;
			this.template = _.template( this.buildTemplate() );
			this.albumViews = [];

			this.render();
		}, // end initialize function

		/**
		* Build Template
		* building the raw template markup need to construct the undersore template
		* @returns template string
		*/
		buildTemplate: function( ){ 
			var template = '';
			template += '<div id="albums">';
			template += '<% _.each( albums , function( album ){ %>';  
			template += '<div class="album">';
			template += '<img src="" data="https://graph.facebook.com/<%=album.cover_photo %>" > ';
			template += '</div> ';
			template += '<% }); %>';
			template += '</div>';

			//return template;

		}, // end buildTemplate 
	}); 

	// hook into global name space
	var fbas = window.fbas || {};
	fbas.allAlbumsView = allAlbumsView ;
	window.fbas = fbas;

} ( _ , jQuery, Backbone ) ); // end model 