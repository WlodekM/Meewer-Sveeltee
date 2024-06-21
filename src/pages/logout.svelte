<script>
	import {screen, setupPage, user, authHeader} from "../lib/stores.js";
	import unloadedProfile from "../lib/unloadedprofile.js";
	import * as modals from "../lib/modals.js";

	import {redirect} from "@roxi/routify";
	import {onMount, tick} from "svelte";

	onMount(async () => {
		localStorage.removeItem("meewer_savedusername");
		localStorage.removeItem("meewer_savedpassword");
		user.set(unloadedProfile());
		authHeader.set({
			username: null,
			token: null,
		});
		modals.closeAllModals();
		$redirect("/");
		screen.set("setup");
		await tick();
		setupPage.set("reconnect");
	});
</script>
