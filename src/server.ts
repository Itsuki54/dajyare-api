import { getAllItems, getRandomItem } from "./api";

const urlParams = new URLSearchParams(window.location.search);
const endpoint = urlParams.get("endpoint");

let response;

if (endpoint === "random") {
  response = { data: getRandomItem() };
} else if (endpoint === "all") {
  response = { data: getAllItems() };
} else {
  response = { error: "Invalid endpoint" };
}

document.body.textContent = JSON.stringify(response);
