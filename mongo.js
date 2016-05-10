module.exports = {
	init: function(){
			return require('mongodb').MongoClient;		

	},
	seed: function(){
		var chapters = [{
			'title': 'john snow',
			'author': 'ramesh'
		},{
			'title': 'rose',
			'author': 'ramesh'
		}];
		return chapters;
	},
	insert: function(mongoClient,connectionUrl,data){
		mongoClient.connect('mongodb://'+connectionUrl, function (err , db) {
			console.log('connected to database');

			var collection = db.collection('chapters');
			collection.insert(data, function (err, result) {
				if(!err){
					console.log('No of records inserted:' + result.ops.length);
				}
				else{
					console.log('Some error encountered');
				}
				db.close();
			});
		})		
	}





}