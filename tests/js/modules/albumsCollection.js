/*Test cases for them main inspector functions*/
(function( $, _ , Backbone ){

	// local scope variables
	var fbas = window.fbas || {};
	var testingCollection ;

	// setup the Qunit module
	module('Albums Collection', {  
		setup: function(){
			testCollection = new fbas.albumCollection();
		},
		teardown: function(){

		}
	});

	/*Test backbone qualities of the object */
	test('Object testing',function(){

	    ok( testCollection , 'Abums Collection Loaded into the fbas Global name space');
	
	});

	/*Test sync functionality*/
	asyncTest('Sync method testing', function(){
		expect(1);
		// setup async testing
		var testingUrl = 'http://local.wordpress.dev/?fbastestdata=albums.json';

		var xhr = testCollection.sync( testingUrl  );

		xhr.done( function(data){
			start();
			ok( testCollection.length > 0  , 'The collection was filled after the sync method');
		});

	    

	});
}(jQuery, _ , Backbone ));