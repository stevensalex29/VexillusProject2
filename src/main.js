const app = new Vue({
	el: '#app',
	data: {
		title: ""
	},
	methods:{
	// search(){
	// 	//if (! this.term.trim()) return;
	// 	let api_key = "aa49a391-7c19-44c4-8c1c-d5d3e3ead120";
	// 	let url = "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", qString = "?CMC_PRO_API_KEY=" + api_key + `&start=1&limit=${this.limit}&convert=USD`;
	// 	fetch(url + qString)
	// 	.then(response => {
	// 		if(!response.ok){
	// 			throw Error(`ERROR: ${response.statusText}`);
	// 		}
	// 		return response.json();
	// 	})
	// 	.then(json => {	
	// 		this.result = json;
	// 		this.result = this.result.data;
	// 	})
	//    }
	} // end methods
});