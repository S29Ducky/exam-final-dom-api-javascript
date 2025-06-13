const favorisList = document.querySelector(".favoris-list");

const Title = document.querySelector("#title");
const titleV = title.value;
const url = document.querySelector("#url");
const urlV = url.value;
const dess = document.querySelector("#description");
const dessV = dess.value;

const Submit = document.querySelector("#BtnSubmit");

const token = "2db786ae57233606a3d72a3b29cea1a2";

async function fetchSite() {
	const res = await fetch("http://10.69.0.17:8100/bookmarks", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await res.json();
	console.log(data);
	return data;
}fetchSite();


async function PostFetch(title, url, description) {
	const res = await fetch("http://10.69.0.17:8100/bookmarks", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			title: `${titleV}`,
			url: `${urlV}`,
			description: `${dessV}`,
		}),
	});
    const dataP = await res.json()
    console.log(dataP)
}

Submit.addEventListener("submit", (e) =>    {
    e.preventDefault()
    PostFetch(titleV, urlV, dessV)

})



let = DataTitre = data.title;
let = DataUrl = data.url;
let = DataDescription = data.description;

function creatWebSiteList() {
	const newTitre = document.createElement("a");
	newTitre.replace(DataUrl);

	const newDes = document.createElement("p");
	newDes.classList.add("description");
	newDes.textContent(DataDescription);
}
