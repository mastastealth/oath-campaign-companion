<script>
	export let nextStep;
	export let selectAtk;
	export let selectDef;
	export let atk;
	export let def;

	$: chosePlayers = !Boolean(atk && def);
</script>

<div class="panel" data-panel="players">
	<h2>1. Choose attacker/defender:</h2>
	<aside class="atk">
		<label class="faction">
			<input
				type="radio"
				name="attacker"
				value="purple"
				disabled={def === "purple"}
				on:click={selectAtk}
			/>
		</label>
		<label class="red faction">
			<input
				type="radio"
				name="attacker"
				value="red"
				disabled={def === "red"}
				checked={atk === "red"}
				on:click={selectAtk}
			/>
		</label>
		<label class="blue faction">
			<input
				type="radio"
				name="attacker"
				value="blue"
				disabled={def === "blue"}
				checked={atk === "blue"}
				on:click={selectAtk}
			/>
		</label>
		<label class="yellow faction">
			<input
				type="radio"
				name="attacker"
				value="yellow"
				disabled={def === "yellow"}
				checked={atk === "yellow"}
				on:click={selectAtk}
			/>
		</label>
		<label class="black faction">
			<input
				type="radio"
				name="attacker"
				value="black"
				disabled={def === "black"}
				checked={atk === "black"}
				on:click={selectAtk}
			/>
		</label>
		<label class="white faction">
			<input
				type="radio"
				name="attacker"
				value="white"
				disabled={def === "white"}
				checked={atk === "white"}
				on:click={selectAtk}
			/>
		</label>
	</aside>

	<aside class="def">
		<label class="bandit faction">
			<input
				type="radio"
				name="defender"
				value="bandit"
				checked={def === "bandit"}
				on:click={selectDef}
			/>
		</label>
		<label class="red faction">
			<input
				type="radio"
				name="defender"
				value="red"
				disabled={atk === "red"}
				checked={def === "red"}
				on:click={selectDef}
			/>
		</label>
		<label class="blue faction">
			<input
				type="radio"
				name="defender"
				value="blue"
				disabled={atk === "blue"}
				checked={def === "blue"}
				on:click={selectDef}
			/>
		</label>
		<label class="yellow faction">
			<input
				type="radio"
				name="defender"
				value="yellow"
				disabled={atk === "yellow"}
				checked={def === "yellow"}
				on:click={selectDef}
			/>
		</label>
		<label class="black faction">
			<input
				type="radio"
				name="defender"
				value="black"
				disabled={atk === "black"}
				checked={def === "black"}
				on:click={selectDef}
			/>
		</label>
		<label class="white faction">
			<input
				type="radio"
				name="defender"
				value="white"
				disabled={atk === "white"}
				checked={def === "white"}
				on:click={selectDef}
			/>
		</label>
		<label class="faction">
			<input
				type="radio"
				name="defender"
				value="purple"
				disabled={atk === "purple"}
				checked={def === "purple"}
				on:click={selectDef}
			/>
		</label>
	</aside>

	<p>
		<strong>Remember:</strong> A site that isn't ruled by a player, is ruled by
		<em>Bandits</em>. Also, campaigning costs <strong>2 supply</strong>.
	</p>

	<button disabled={chosePlayers} on:click={nextStep}>Next</button>
</div>

<style>
	.faction {
		background: url(/tokens_pawn.webp) 0 -1px;
		background-color: rgba(255, 255, 255, 0.25);
		background-size: 270px 55px;
		border: 1px solid black;
		border-radius: 2px;
		display: block;
		height: 55px;
		margin: 2px;
		width: 45px;
	}

	.faction.red {
		background-position: -45px -10px;
	}

	.faction.yellow {
		background-position: -90px -10px;
	}

	.faction.blue {
		background-position: -135px -5px;
	}

	.faction.black {
		background-position: -180px -10px;
	}

	.faction.white {
		background-position: -225px -10px;
	}

	.faction.bandit {
		--width: calc(240px / 6);
		background: url(/tokens_warband.webp) no-repeat 0 -1px;
		background-size: 240px auto;
		background-position: calc((var(--width) * -5) + 2px) 7px;
		border-color: white;
		filter: invert();
		position: relative;
	}

	.faction.bandit:after {
		aspect-ratio: 1;
		background: #1c1c1c;
		content: "";
		display: block;
		position: absolute;
		left: 40%;
		top: 36%;
		width: 23%;
	}

	label.faction.bandit:has(input:checked) {
		border: 1px solid black;
		outline: 2px solid black;
	}

	label.faction input {
		display: none;
	}

	label.faction:has(input:checked) {
		border: 1px solid white;
		outline: 2px solid white;
	}

	label.faction:has(input[disabled]) {
		background-color: rgba(0, 0, 0, 0.25);
		filter: grayscale(100%) brightness(0.5);
	}

	.panel {
		align-items: center;
		display: grid;
		grid-template-areas:
			"h2 h2"
			"atk def"
			"atk def"
			"p p"
			"btn btn";
	}

	h2 {
		grid-area: h2;
	}

	.atk,
	.def {
		align-items: center;
		background: var(--atk);
		display: flex;
		flex-direction: column;
		height: 100%;
		grid-area: atk;
		justify-content: center;
		width: 100%;
	}

	.def {
		background: var(--def);
		grid-area: def;
	}

	p {
		grid-area: p;
		font-size: 0.9em;
		margin-top: 10px;
		width: 100%;
	}

	button:last-child {
		grid-area: btn;
		width: 100%;
	}
</style>
