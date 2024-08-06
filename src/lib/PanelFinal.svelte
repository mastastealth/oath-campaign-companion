<script>
	export let nextStep;
	export let prevStep;
	export let atk;
	export let def;
</script>

<div class="panel" data-panel="resolve">
	<button class="span-grid" on:click={prevStep}>Back</button>
	<h2 class="span-grid">3. Resolve Campaign</h2>

	<div class="faction-block span-grid" data-def="def">
		<h3><span class="faction {def}"></span> Total Defense:</h3>
		<ul>
			<li>Shields rolled</li>
			{#if def === "bandit"}
				<li>
					+ 1 per targeted site <em
						>(Bandits have a warband on sites they rule)</em
					>
				</li>
			{:else}
				<li>+ warbands at targeted sites</li>
			{/if}
			{#if def !== "bandit"}
				<li>
					+ warbands on their board (if <span class="faction {def}"></span> is
					on targeted site / at
					<span class="faction {atk}"></span>'s site)
				</li>
			{/if}
		</ul>
	</div>

	<div class="faction-block span-grid" data-def="atk">
		<h3><span class="faction {atk}"></span> Total Attack:</h3>
		<ul>
			<li>Swords rolled</li>
			<li>+ warbands sacrificed from force</li>
		</ul>
	</div>

	<p class="span-grid">
		<strong>Take Losses:</strong> Kill half of the warbands in the
		<strong>defeated player's force </strong>, <em>rounded down</em>, and move
		the other half to their board.
	</p>

	<p class="span-grid">
		<small>
			<strong>Resolve Victory:</strong> May place warbands on targeted sites, take
			targeted relics/banners, move targeted pawn & burn half their favor (rounded
			down).
		</small>
	</p>

	<button class="span-grid" on:click={nextStep}>Restart</button>
</div>

<style>
	[data-panel] {
		display: grid;
		gap: 5px;
		grid-template-columns: repeat(6, 1fr);
	}

	.span-grid {
		grid-column: 1 / 7;
	}

	h3,
	ul {
		margin: 5px 0;
	}

	ul {
		text-align: left;
	}

	.oath {
		filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.75));
		font-size: 1.2em;
	}

	.faction-btn,
	.faction-block {
		border: 1px solid black;
		line-height: 40px;
		padding: 0 5px;
	}

	.faction-block {
		line-height: 160%;
		padding: 5px;
	}

	[data-def="atk"] {
		background: var(--atk);
	}

	[data-def="def"] {
		background: var(--def);
	}

	.faction {
		--width: calc(108px / 6);
		background: url(/tokens_pawn.webp) 0 -1px;
		background-size: 108px 22px;
		display: inline-block;
		height: 22px;
		width: var(--width);
		vertical-align: middle;
	}

	.faction.red {
		background-position: calc(var(--width) * -1) -4px;
	}

	.faction.yellow {
		background-position: calc(var(--width) * -2) -4px;
	}

	.faction.blue {
		background-position: calc(var(--width) * -3) -3px;
	}

	.faction.black {
		background-position: calc(var(--width) * -4) -4px;
	}

	.faction.white {
		background-position: calc(var(--width) * -5) -4px;
	}

	.faction.bandit {
		--width: calc(192px / 6);
		background: url(/tokens_warband.webp) 0 -1px;
		background-size: 192px 32px;
		background-position: calc(var(--width) * -5) 0;
		filter: invert();
		height: var(--width);
		position: relative;
	}

	.faction.bandit:after {
		aspect-ratio: 1;
		background: #1c1c1c;
		content: "";
		display: block;
		position: absolute;
		left: 40%;
		top: 30%;
		width: 26%;
	}
</style>
