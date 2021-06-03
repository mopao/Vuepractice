var app = new Vue({
		el: '#app',
		
		data:{

			profileClass: 'profile-class',			
			profile: {
				fname: 'franck',
				lname: 'cheuzem',
				desc: 'full stack developer',
				bio: 'passionate about web development',
				pic: 'profile-image.png'
			}
			
		}
		
	});

/*
		//step 1: Read Code Above
		//step 2: Does the profile show up?
		
		v-if="boolean_expression"
		v-else-if="boolean_expression"
		v-else
		
		
		You can code an if, else if, else statement into your render using the v-if, v-else-if, v-else.
		Just like in regular programming, v-else has no condition
		
		Notice how the "profile" object is null. Reminder that null is Falsey in the boolean context.
		
		ASYNCHRONOUS LEARNING EXERCISE
		1. Use the profile object to store information about yourself {fname, lname, desc, bio, pic}
		2. Create a figure, figcaption, and image markup which acts as a description for yourself
			(Something like this https://www.w3schools.com/howto/howto_css_cards.asp)
		3. Write conditionals if information is missing (i.e. 'no bio available' if bio is blank, generic image if no pic is found)
		*/