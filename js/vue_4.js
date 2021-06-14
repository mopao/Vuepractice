var app = new Vue({
		el: '#app',
		
		data:{
			//Scene from http://shakespeare.mit.edu/macbeth/macbeth.1.7.html
			scene:[
				{
					character:'MACBETH', 
					dialogues:[{dialogue:"Hath he ask'd for me?"}]
			    },
				{
					character:'LADY MACBETH', 
					dialogues:[{dialogue:"Know you not he has?"}]
				},
				{
					character:'MACBETH',
					dialogues:[
								{dialogue:"We will proceed no further in this business:"},
								{dialogue:"He hath honour'd me of late; and I have bought"},
								{dialogue:"Golden opinions from all sorts of people,"},
								{dialogue:"Which would be worn now in their newest gloss,"},
								{dialogue:"Not cast aside so soon."}
							  ]
				},
				{
					character:'LADY MACBETH', 
					dialogues:[
								{dialogue:"Was the hope drunk"},
								{dialogue:"Wherein you dress'd yourself? hath it slept since?"},
								{dialogue:"And wakes it now, to look so green and pale"},
								{dialogue:"At what it did so freely? From this time"},
								{dialogue:"Such I account thy love. Art thou afeard"},
								{dialogue:"To be the same in thine own act and valour"},
								{dialogue:"As thou art in desire? Wouldst thou have that"},
								{dialogue:"Which thou esteem'st the ornament of life,"},
								{dialogue:"And live a coward in thine own esteem,"},
								{dialogue:"Letting 'I dare not' wait upon 'I would,'"},
								{dialogue:"Like the poor cat i' the adage?"}
							  ]
				}	
			],

			
			//Next line
			//MACBETH

		    //Prithee, peace:
		    //I dare do all that may become a man;
		    //Who dares do more is none.
		}
		
	});
/*
v-for="singular in plural"		
		
		You can also render loops using vue.js. The syntax used is a "foreach" style.
		plural must be defined somewhere. In our case it's as a data property
		singular is defined on the fly.
		
		
		ASYNCHRONOUS LEARNING EXERCISE
		1. Add the next line through the console using app.scene.push() in the console
		2. Use v-if to style the text. Red if Macbeth is speaking, blue if Lady Macbeth
		3. The lines are separated by \n. Can you re-structure the data and logic so that the dialogue has many lines, each line separate?
*/    