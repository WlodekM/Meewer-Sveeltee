<script>
	import Modal from "../Modal.svelte";
	import Container from "../Container.svelte";

	import * as modals from "../modals.js";

	import {focus} from "@roxi/routify";

	let clUrl = localStorage.getItem("meewer_linkurl");
	let apiUrl = localStorage.getItem("meewer_apiurl");
	let loading, error;
</script>

<Modal on:close={modals.closeLastModal}>
	<h2 slot="header">Server Selector</h2>
	<div slot="default">
		<form
			on:submit|preventDefault={async () => {
				// set loading state
				loading = true;

				// fill in blank fields
				if (!clUrl) clUrl = "ws://127.0.0.1:3000";
				if (!apiUrl) apiUrl = "http://127.0.0.1:3001/";

				// add / to API URL if it doesn't end with one
				if (!apiUrl.endsWith("/")) apiUrl = `${apiUrl}/`;

				// set local storage items
				localStorage.setItem("meewer_linkurl", clUrl);
				localStorage.setItem("meewer_apiurl", apiUrl);

				// refresh
				window.location.reload();
			}}
		>
			<Container warning={true}>
				<b>WARNING!</b><br />
				Connecting to a custom server can be dangerous! They will get your
				IP address and some details about your device upon connecting. They
				may also be running custom code to log passwords or other sensitive
				information.
				<br /><br />
				<i>This feature is intended for developers.</i>
			</Container>
			<label for="cl-url" style={error ? "color: crimson;" : ""}>
				<b>Cloudlink URL</b>
				{#if error}<i>- {error}</i>{/if}
			</label>
			<input
				id="cl-url"
				type="text"
				class="modal-input white"
				placeholder="ws://127.0.0.1:3000"
				disabled={loading}
				bind:value={clUrl}
				use:focus
			/>
			<br /><br />
			<label for="api-url" style={error ? "color: crimson;" : ""}
				><b>REST API URL</b>
				{#if error}<i>- {error}</i>{/if}</label
			>
			<input
				id="api-url"
				type="text"
				class="modal-input white"
				placeholder="http://127.0.0.1:3001/"
				disabled={loading}
				bind:value={apiUrl}
			/>
			<br /><br />
			<div class="modal-buttons">
				<button
					type="button"
					disabled={loading}
					on:click={modals.closeLastModal}>Cancel</button
				>
				<button
					type="button"
					disabled={loading}
					on:click={() => {
						clUrl = "";
						apiUrl = "";
					}}>Reset</button
				>
				<button type="submit" disabled={loading}>Save & Reload</button>
			</div>
		</form>
	</div>
</Modal>
