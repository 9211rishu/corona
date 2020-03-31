const datas = {
	Kerala: {
		districtData: {
			"Thrissur": {
				confirmed: 7,
				lastupdatedtime: "",
				delta: {
					confirmed: 0
				}
			},
			"Alappuzha": {
				confirmed: 2,
				lastupdatedtime: "",
				delta: {
					confirmed: 0
				}
			},
			"Kasaragod": {
				confirmed: 107,
				lastupdatedtime: "",
				delta: {
					confirmed: 0
				}
			}
		}
	},
	Delhi: {
		districtData: {
			"East Delhi": {
				confirmed: 1,
				lastupdatedtime: "",
				delta: {
					confirmed: 0
				}
			},
			"South West Delhi": {
				confirmed: 3,
				lastupdatedtime: "",
				delta: {
					confirmed: 0
				}
			},
			"West Delhi": {
				confirmed: 2,
				lastupdatedtime: "",
				delta: {
					confirmed: 0
				}
			},
			"North Delhi": {
				confirmed: 3,
				lastupdatedtime: "",
				delta: {
					confirmed: 0
				}
			},
			"New Delhi": {
				confirmed: 3,
				lastupdatedtime: "",
				delta: {
					confirmed: 0
				}
			}
		}
	}
};


for(let state in datas) {
	console.log(state);
	const districtObj = datas[state].districtData;
	for (let district in districtObj) {
		console.log(" ====> " + district);
		for (let data in districtObj[district]) {
			console.log(" => " + data + " => " + districtObj[district][data])
		}
	}
}

let htmlTags = "<div class='parent'>";

htmlTags += "<div class='child'>";

htmlTags += "</div>";

htmlTags += "</div>";

console.log(htmlTags);