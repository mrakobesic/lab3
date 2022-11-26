window.onload = () => {
	let table = document.createElement("table");
	table.style.borderCollapse = 'collapse';
	let running = false;
	let counter = 0;
	let interval = 0;
	table.border = "1"; 
	let columns = ["Номер", "Число"];
	let row = document.createElement("tr");
	row.style.backgroundColor = '#ff0000';
	row.style.color = '#fff';
	for (column of columns) {
		td = document.createElement("th");
		td.innerHTML = column;
		td.style.padding = "10px";
		row.appendChild(td);
	}
	table.appendChild(row);



	document.body.appendChild(table);
	

	let get_random_data = () => {
		if (!running) {
			button.innerHTML = "Остановить";
			running = !running;
			time = get_delay();
			interval = setInterval(() => {
				random_data = parseInt(Math.random() * 500);
				let row = document.createElement("tr");
				let counter_td = document.createElement("td");
				let data_td = document.createElement("td");
				counter_td.innerHTML = counter;
				data_td.innerHTML = random_data;
				counter_td.style.padding = "10px";
				data_td.style.padding = "10px";
				row.appendChild(counter_td);
				row.appendChild(data_td);
				table.appendChild(row);
				if (counter % 2 == 0) {
					row.style.backgroundColor='#0000ff';
				} else {
					row.style.backgroundColor='#008000';
				}
				
				counter++;
			}, time*1000);
		} else {
			running = !running;
			button.innerHTML = "Начать генерацию";
			clearInterval(interval);
		}
	};	


	let get_delay = () => {
		item = document.getElementById("delay");
		delay = parseInt(item.value);
		return delay;
	};

	let button = document.getElementById("submit");
	button.addEventListener("click", get_random_data);
}