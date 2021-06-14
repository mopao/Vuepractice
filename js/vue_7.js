var app = new Vue({
		el: '#app',
		data:{
			treat_diagnostics:false,
			dog_name:"Barley",
			treat_qty_small:0,
			treat_qty_medium:0,
			treat_qty_large:0,
			treat_value_small:1,
			treat_value_medium:2,
			treat_value_large:3
		},
		computed:{
			treat_total:function(){
				return (this.treat_qty_small * this.treat_value_small) + 
				(this.treat_qty_medium * this.treat_value_medium) + 
				(this.treat_qty_large * this.treat_value_large);	
			},
			is_happy:function(){
				
				return this.treat_total>=10;	
			}
		}
	});
	