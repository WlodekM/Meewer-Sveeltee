<script>
	import Modal from "../../Modal.svelte";

	import CustomThemeModal from "./CustomTheme.svelte";

	import {user} from "../../stores.js";
	import {
		stringToTheme,
		removeTheme,
		applyTheme
	} from "../../CustomTheme.js";
	import * as modals from "../../modals.js";
	import ThemePreview from "../../ThemePreview.svelte";
	import * as clm from "../../clmanager.js";

	import defaultPreview from "../../../assets/themePreviews/OrangeLight.png";

	const themePreviews = import.meta.glob(
		"../../../assets/themePreviews/*.png",
		{
			import: "default",
			eager: true,
		}
	);

	let selections = ["orange", "dark-orange", "blue", "dark-blue",
		`cb:Blurple;false;{"v":1,"orange":"#6430df","orangeLight":"#8955ff","orangeDark":"#3f0bba","background":"#f2ecf8","foreground":"#000000","foregroundOrange":"#ffffff","tinting":"#252525"}`,
		`cb:Blurple Dark;true;{"v":1,"orange":"#9466ff","orangeLight":"#b98bff","orangeDark":"#6f41da","background":"#2e2636","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#252525"}`,
		`cb:AMOLED Neon;true;{"v":1,"orange":"#00bfff","orangeLight":"#33e0ff","orangeDark":"#008cba","background":"#000000","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#00171f"}`,
		`cb:Purple Dark (by ij);true;{"v":1,"orange":"#9e009e","background":"#020617","foreground":"#cbd5e1","foregroundOrange":"#ffffff","roarer_link":"#c400c4","roarer_postStyle":"bordered","roarer_colorScheme":"dark","orangeLight":"#9e009e","orangeDark":"#9e009e","tinting":"#9e009e"}`,
		`cb:Blue (by Souple);true;{"v":1,"orange":"#373b77","background":"#212454","foreground":"#fefefe","foregroundOrange":"#ffffff","roarer_link":"#aabaf8","roarer_postStyle":"filled","roarer_colorScheme":"dark","orangeLight":"#373b77","orangeDark":"#373b77","tinting":"#373b77"}`,
		`cb:Choco Dark;true;{"v":1,"orange":"#a37a43","background":"#332b22","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#453827","orangeLight":"#e8b26a","orangeDark":"#5e421c"}`,
		`ch:More themes coming soon!;{"canSave":false,"dark":false,"html":"true"};{"v":-1}`
	];
	// FORMAT:
	// cb:{Theme name};{Dark? true/false};{THEME JSON HERE}

	selections.push("custom")

	let error = false;

	let darkMode = !$user.mode;
	let theme = $user.theme;

	if (!selections.includes(theme)) {
		if (!theme.startsWith("custom:")) {
			theme = "orange";
			error = true;
		} else {
			theme = "custom";
			darkMode = false;
		}
	}

	let selection = selections.indexOf((darkMode ? "dark-" : "") + theme);

	let darkModeStr = (!darkMode && "Light") || "Dark";
	let themeCaps = theme.slice(0, 1).toUpperCase() + theme.slice(1);
	let themeName = themeCaps + darkModeStr;

	/**
	 * @type {string}
	 */
	// @ts-ignore
	let currentPreviewImage =
		themePreviews["../../../assets/themePreviews/" + themeName + ".png"] ||
		defaultPreview;

	function changeTheme() {
		if (selection < 0) {
			selection = selections.length - 1;
		}

		selection = selection % selections.length;
		theme = selections[selection];

		if (theme != "custom") {
			darkMode = false;
			if (theme.startsWith("dark-")) {
				darkMode = true;
				theme = theme.substring(5);
			}

			darkModeStr = darkMode ? "Dark" : "Light";
			themeCaps = theme.slice(0, 1).toUpperCase() + theme.slice(1);
			themeName = themeCaps + darkModeStr; // Change vars

			// @ts-ignore
			currentPreviewImage =
				themePreviews[
					"../../assets/themePreviews/" + themeName + ".png"
				] || defaultPreview;
		}

		darkModeStr = darkMode ? "Dark" : "Light";
		themeCaps = theme.slice(0, 1).toUpperCase() + theme.slice(1);
		themeName = themeCaps + darkModeStr; // Change vars

		// @ts-ignore
		currentPreviewImage =
			themePreviews[
				"../../../assets/themePreviews/" + themeName + ".png"
			] || defaultPreview;
	}
</script>

<Modal on:close={modals.closeLastModal}>
	<h2 slot="header">Select a Theme</h2>
	<div slot="default">
		<div class="theme-select">
			<button
				on:click={() => {
					selection -= 1;
					changeTheme();
				}}>{"<"}</button
			>
			<div class="theme-middle">
				{#if theme === "custom"}
					<div class="theme-name">Custom Theme</div>
					<button on:click={() => modals.showModal(CustomThemeModal)}
						>Edit theme</button
					>
				{:else if theme.startsWith("cb:")}
					<div class="theme-name">{theme.replace("cb:","").split(";")[0]}</div>
					<ThemePreview theme={stringToTheme(theme.replace("cb:","").split(";")[2])} size={0.35}/>
				{:else if theme.startsWith("ch:")}
					{#if (JSON.parse(theme.replace("ch:","").split(";")[1]).html ?? false)}
						{@html theme.replace("ch:","").split(";")[0]}
					{:else}
						{@html theme.replace("ch:","").split(";")[1]}
					{/if}
				{:else}
					<div class="theme-name">
						{themeCaps + " (" + darkModeStr + ")"}
					</div>
					<img
						src={currentPreviewImage}
						class="theme-preview"
						alt={themeName}
					/>
				{/if}
			</div>
			<button
				on:click={() => {
					selection += 1;
					changeTheme();
				}}>{">"}</button
			>
		</div>
		{#if error}
			<p class="theme-invalid">
				Your previous theme was invalid, so it was reset to orange.
			</p>
		{/if}
		{#if !theme.startsWith("ch:")}
			<p class="layout-text">(Change the layout in the settings.)</p>
		{/if}
		<div class="modal-buttons">
			<button on:click={modals.closeLastModal}>Close</button>
			<button
				disabled={theme === "custom" || (theme.startsWith("ch:") || (JSON.parse(theme.replace("ch:","").split(";")[1])?.canSave ?? false))}
				on:click={() => {
					removeTheme();
					const _user = $user;
					if(theme.startsWith("cb:")) {
						try {
							let themeData   = theme.replace("cb:","").split(";")[2]
							let themeString = `custom:${themeData}`
							applyTheme(stringToTheme(themeData));
							$user.theme = themeString;
							clm.updateProfile({theme: themeString, mode: !JSON.parse(theme.replace("cb:","").split(";")[1])});
							modals.closeLastModal();
						} catch (e) {
							console.error(`Failed to apply custom theme: ${e}`);
						}
					} else {
						_user.theme = theme;
						_user.mode = !darkMode;
						user.set(_user);
						clm.updateProfile({theme: theme, mode: !darkMode});
					}
					modals.closeLastModal();
				}}>Save</button
			>
		</div>
	</div>
</Modal>

<style>
	.theme-select {
		margin-top: 1rem;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}

	.theme-preview {
		height: 20vw;
		max-height: 11em;
		width: auto;
	}

	.theme-name {
		padding-bottom: 0.25em;
		font-size: 3rem;
		font-weight: bold;
	}

	.theme-middle {
		text-align: center;
	}

	.theme-invalid {
		text-align: center;
		width: 100%;
	}

	.layout-text {
		text-align: center;
		margin: 0.75em 0;
		font-size: 80%;
	}
</style>
