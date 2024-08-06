<script>
	import PanelPlayers from "./lib/PanelPlayers.svelte";
	import PanelTargets from "./lib/PanelTargets.svelte";
	import PanelFinal from "./lib/PanelFinal.svelte";

	let step = 0;
	let atk,
		def = null;

	function selectAtk(e) {
		atk = e.target.value;
	}

	function selectDef(e) {
		def = e.target.value;
	}
</script>

<main>
	<h1>Oath Campaign Companion</h1>

	{#if step === 0}
		<PanelPlayers
			{atk}
			{def}
			{selectAtk}
			{selectDef}
			nextStep={() => {
				step++;
			}}
		/>
	{/if}

	{#if step === 1}
		<PanelTargets
			{atk}
			{def}
			nextStep={() => {
				step++;
			}}
			prevStep={() => {
				step--;
			}}
		/>
	{/if}

	{#if step === 2}
		<PanelFinal
			{atk}
			{def}
			nextStep={() => {
				atk = null;
				def = null;
				step = 0;
			}}
			prevStep={() => {
				step--;
			}}
		/>
	{/if}
</main>

<style>
	* {
		box-sizing: border-box;
	}

	:root {
		--atk: #d24e27;
		--def: #1b8dcd;
		--purple: #933b80;
		--red: #e8492a;
		--yellow: #ffd102;
		--blue: #00a5b5;
		--black: #212121;
	}

	h1 {
		background: Var(--purple);
		color: white;
		font-size: 20px;
		line-height: 40px;
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		width: 100%;
	}

	:global(h2) {
		margin: 10px 0;
	}

	:global(.panel) {
		border: 1px solid black;
		border-radius: 5px;
		padding: 10px;
	}
</style>
