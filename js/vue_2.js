var app = new Vue({
		el: '#app',
		data:{
			isImportant:Math.round(Math.random()),
			isSpecial: Math.round(Math.random())
		}
	});
	
	
		
		//step 1: Read Code Above
		//step 2: Will the span have values for special and important?
		//step 3: execute the code and interpret!
		
		/*v-bind:html_attribute_key="{value:boolean_expression}"
		
		
		v-bind can be applied conditionally, similar to an IF statement.
		The value is only applied when the boolean evaluates to true
		The boolean expression can come either in-line or as a object property.
		
		A boolean expression evaluates to true or false.
		Examples
		True => True
		False => False
		True && True => True
		True && False => False
		True || False => True
		False || False => False
		etc.
		
		If the expression is not explicitly a Boolean and used in a Boolean context, JS will try to interpret it as Boolean.
		This principle is known as "Truthy" or "Falsey" values, and is useful to know for "loosely typed" programming languages.
		C# is an example of a "strongly typed" programming language. You cannot use this technique there.
		PHP is another example of a "loosely" typed programming language, similar to JS.
		Read More : https://developer.mozilla.org/en-US/docs/Glossary/Falsy
		
		Examples
		'Hello' => True
		'' => False
		211 => True
		0 => False
		-192 => True
		null => False
		
		
		ASYNCHRONOUS LEARNING EXERCISE
		1. Bind the special attribute to "isSpecial" in the data object
		2. Use the console  to change "isSpecial" and "isImportant" from true to false
		3. Change "isSpecial" and "isImportant" so they are randomly assigned a Truthy or Falsey value
		*/