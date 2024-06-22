/**
 * @file Server-related URL constants.
 */

export const beta = false;

export const linkUrl =
	localStorage.getItem("meewer_linkurl") ||
	(beta
		? "wss://beta.meower.org/api/v0/cloudlink"
		: "ws://159.224.173.169:3001");
export const apiUrl =
	localStorage.getItem("meewer_apiurl") ||
	(beta ? "https://beta.meower.org/api/" : "http://159.224.173.169:3002/");
export const uploadsUrl = localStorage.getItem("meower_uploadsurl") || "https://uploads.meower.org/";
export const encodeApiURLParams =
	localStorage.getItem("meewer_encodeapi") || false;
