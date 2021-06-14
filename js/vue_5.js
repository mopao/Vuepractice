var app = new Vue({
		el: '#app',
		
		data:{
			boxHeight:200,
			boxHidden : false,
			message  : 'Make me disappear!',
			action: "Hide",
			show: false
		},
		methods:{
			showhide : function(){
				
				if(this.boxHidden){
					this.boxHidden=false;
					this.action = "Hide";
				}else{
					this.boxHidden=true;
					this.action = "Show";	
				}
			},
			heightstretch : function(){
				//console.log("over");
				this.show = !this.show;
			},
			heightstretchback : function(){
				//console.log("out");
				this.show = !this.show;

			},

		}
		
	});

/*

        Step 1: Read the code above
		Step 2: What will happen when you click the button?
		Step 3: Run it and find out!
		
		v-on:event_handler="method_name(?arg1, ?arg2..)"
		
		You can use v-on to attach events directly to elements, similar to regular HTML and JS
		There must be a matching method name inside the "methods" property, which is a sibling to the "data" property.
		You can pass in extra information with optional parameters if you wish
		"this" will evaluate to the app object when used in the context of a method.
		
		As always, the virtual dom will dynamically update the content on the screen.
		
		ASYNCHRONOUS LEARNING EXERCISE
		1. Modify this Vue app to make the button text change to "Hide" and "Show" respectively to match the function
		2. Make a red box 100px * 100px that becomes 10px taller every time you hover over it
*/