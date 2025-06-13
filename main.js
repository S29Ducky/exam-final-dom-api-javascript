async function fetchSite() {
	const res = await fetch("http://10.69.0.17:8100/bookmarks", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
		},
	});
	const data = await res.json();
    console.log(data)
    return data
}

fetchSite()