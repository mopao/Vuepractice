/*
Step 1: Run the code above!
		
		Vue "Components" are tricky to get the hang of. Practice!
		The idea is to atomize each element of the app into tiny, reusable components
		Each compoment can be customized with the use of "props" (properties).
		The Markup scaffolding is included in the template. Use ` if you want multi-line!
		
		The components can have methods as well! The prompt function also can change the component properties
		
		Components may also have a data property, just like the app.
		However, the same problem will occur as with methods. The data defined in the component will apply to all circles.
		There are ways around this, but for now, it's easier to make your components require data from the app as props.
		
		the v-bind:key will force our hand 
		
		ASYNCHRONOUS LEARNING EXERCISE
		1. Make the circles position absolute
		2. Create two new properties "x" and "y" for each orb
		3. Pass through values of "x" and "y" in the app to have circles on different spots of the screen
*/

Vue.component('orb',{
		props:['radius','color','x','y'],	
		template:
		`<span 
			v-bind:class="'circle'" 
			v-bind:style="{'width':radius+'px', 'height':radius+'px', 'background':color, 'position':'absolute', 'left':x+'px', 'top':y+'px'}"
			v-on:click="$emit('onprompt');">
		</span>`	
	});
	
	var app = new Vue({
		el: '#app',
		
		data:{
			orbs:[
				{id:1, radius:10, color:'green', x:100 , y:100},
				{id:2, radius:15, color:'purple',x:150 , y:150},
				{id:3, radius:20, color:'black',x:200 , y:200},
				{id:4, radius:25, color:'blue',x:250 , y:250},
				{id:5, radius:30, color:'orange',x:300 , y:300},
				{id:6, radius:35, color:'yellow',x:350 , y:350},
				{id:7, radius:45, color:'red',x:400 , y:400}
			]
		},
		methods:{
			prompt:function(orb){
				alert('You clicked the '+orb.color+' circle!');	
				orb.color='none';
			}	
		}
		
	});