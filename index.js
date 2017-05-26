
var application = require("application");
 
module.exports = {
    
	initJpushSDK: function(context){
		try{
			var push = new com.yzt.jpushsdk.Push();
			console.log(push);
			push.initPush(context);
		}catch(e){
			console.log(e);
		}
	},
	
	setAliasAndTags: function(context,alias,tags){
		try{
			var push = new com.yzt.jpushsdk.Push();
			console.log(push);
			push.setAliasAndTags(context,alias,tags);
		}catch(e){
			console.log(e);
		}
	}
	
};
