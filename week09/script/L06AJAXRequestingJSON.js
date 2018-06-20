/*let x=0;
	
			function loadAppData(x) {
				let file = "appData.json";
	
				let request = new XMLHttpRequest();

				request.open("GET",file,true);

				request.send();

				request.onreadystatechange = function()
				{
					if (request.readyState == 4)
					{
						let jsonObject = JSON.parse(request.responseText);	

						DisplayAppData(jsonObject);
					}
				}
			}

			function DisplayAppData(jsonObject) {
				let thNumber = document.createElement("th");
				let thId = document.createElement("th");
				let thAppName = document.createElement("th");
				let thAppVersion = document.createElement("th");
		
				let tdNumber = document.createElement("td");
				let tdId = document.createElement("td");
				let tdAppName = document.createElement("td");
				let tdAppVersion = document.createElement("td");

				let caption = document.createElement("caption");
				let tr = document.createElement("tr");
				let tbody = document.createElement("tbody");
				let table = document.createElement("table");
	
	    		caption.innerHTML = "App Data Received From the Server Through Ajax";
	
				thNumber.innerHTML = "App No.";
				thId.innerHTML = "App ID";
				thAppName.innerHTML = "App Name";
				thAppVersion.innerHTML = "App Version";
		
				table.appendChild(caption);
		
				tr.appendChild(thNumber);
				tr.appendChild(thId);
				tr.appendChild(thAppName);
				tr.appendChild(thAppVersion);
		
				tbody.appendChild(tr);
		
				table.appendChild(tbody);
		
				for (x=0; x<jsonObject.length; x++) {
					tdNumber = tdNumber.cloneNode();
					tdId = tdId.cloneNode();
					tdAppName = tdAppName.cloneNode();
					tdAppVersion = tdAppVersion.cloneNode();
	
					tr = tr.cloneNode();
	
					tdNumber.innerHTML = x+1;
					tdId.innerHTML = jsonObject[x].id;
					tdAppName.innerHTML=jsonObject[x].app_name;
					tdAppVersion.innerHTML=jsonObject[x].app_version;
		
					tr.appendChild(tdNumber);
					tr.appendChild(tdId);
					tr.appendChild(tdAppName);
					tr.appendChild(tdAppVersion);

					tbody.appendChild(tr);
					table.appendChild(tbody);
				}

				let result = document.getElementById("appData");
				result.appendChild(table);	
			}*/

