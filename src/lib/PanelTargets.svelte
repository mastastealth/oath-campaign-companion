<script>
	export let nextStep;
	export let prevStep;
	export let atk;
	export let def;

	let sites = [];
	let finalizeTarget = false;
	let atkPawn = false;
	let atkRelic = false;
	let atkBannerFavor = false;
	let atkBannerSecret = false;
	let pawnAtSite = false;

	$: hasTarget = Boolean(
		atkPawn || atkRelic || atkBannerFavor || atkBannerSecret || sites.length
	);

	function modifySites({ target }) {
		sites = sites.includes(target.value)
			? sites.filter((s) => s !== target.value)
			: (sites = [...sites, target.value]);
	}
</script>

{#if !finalizeTarget}
	<div class="panel" data-panel="targets">
		<button class="span-grid" on:click={prevStep}>Back</button>
		<h2 class="span-grid">2a. Choose targets:</h2>

		<fieldset>
			<label class="site">
				<input type="checkbox" value="cradle1" on:change={modifySites} />
			</label>
			<label class="site">
				<input type="checkbox" value="prov1" on:change={modifySites} />
			</label>
			<label class="site">
				<input type="checkbox" value="hinter1" on:change={modifySites} />
			</label>
			<label class="site">
				<input type="checkbox" value="cradle2" on:change={modifySites} />
			</label>
			<label class="site">
				<input type="checkbox" value="prov2" on:change={modifySites} />
			</label>
			<label class="site">
				<input type="checkbox" value="hinter2" on:change={modifySites} />
			</label>
			<label class="hidden site">
				<input type="checkbox" value="" on:change={modifySites} />
			</label>
			<label class="site">
				<input type="checkbox" value="prov3" on:change={modifySites} />
			</label>
			<label class="site">
				<input type="checkbox" value="hinter3" on:change={modifySites} />
			</label>
		</fieldset>

		<p class="span-grid">
			<strong>Remember</strong>: You can target <strong>any</strong> site ruled
			by defender and <strong>must</strong> target <em>your site</em> if they
			rule it.

			{#if !pawnAtSite && def !== "bandit"}
				<button
					class="pawnAtSite"
					on:click={() => {
						pawnAtSite = true;
					}}
				>
					Is the defender pawn (<span class="faction {def}"></span>) at
					<em>your site</em>? <br /> <strong>Tap here</strong>
				</button>
			{/if}
		</p>

		{#if def !== "bandit"}
			<label class="faction-btn span-grid" data-def={def}>
				<input
					type="checkbox"
					on:change={(e) => {
						atkPawn = e.target.checked;
					}}
				/>
				Attack <span class="faction {def}"></span> Pawn (and Favor)
			</label>

			<label class="faction-btn span-grid">
				<input
					type="checkbox"
					on:change={(e) => {
						atkRelic = e.target.checked;
					}}
				/>
				Attack Relics 💍
			</label>

			<label class="faction-btn span-grid">
				<input
					type="checkbox"
					on:change={(e) => {
						atkBannerFavor = e.target.checked;
					}}
				/> Attack Banner of Favor 🧡
			</label>

			<label class="faction-btn span-grid">
				<input
					type="checkbox"
					on:change={(e) => {
						atkBannerSecret = e.target.checked;
					}}
				/> Attack Banner of Darkest Secret 📘
			</label>
		{/if}

		<button
			class="span-grid"
			disabled={!hasTarget}
			on:click={() => {
				finalizeTarget = true;
			}}>Next</button
		>
	</div>
{:else}
	<div class="panel" data-panel="targets2">
		<button
			class="span-grid"
			on:click={() => {
				finalizeTarget = false;
				pawnAtSite = false;
				sites = [];
				atkPawn = false;
				atkRelic = false;
				atkBannerFavor = false;
				atkBannerSecret = false;
			}}>Back</button
		>
		<h2 class="span-grid">2b. Calculate Pools:</h2>

		<div class="faction-block span-grid" data-def="atk">
			<h3><span class="faction {atk}"></span> Attacker:</h3>
			Collect
			<span class="oath">+</span> <em>up to</em> warbands on board
		</div>

		<div class="faction-block span-grid" data-def="def">
			<h3><span class="faction {def}"></span> Defender:</h3>

			<ul>
				{#if sites.length}
					<li>
						Collects <strong>{sites.length}</strong> <span class="oath">-</span>
						for
						<strong>sites</strong>
					</li>
				{/if}
				{#if atkPawn}
					<li>
						Collects <strong>2</strong> <span class="oath">-</span> for
						<strong>pawn</strong>
					</li>
				{/if}
				{#if atkRelic}
					<li>
						Collects <span class="oath">-</span> as shown on
						<strong>relics</strong>
					</li>
				{/if}
				{#if atkBannerFavor}
					<li>
						Collects <span class="oath">-</span> equal to
						<span class="oath">1</span>
						on
						<strong>banner</strong>
					</li>
				{/if}
				{#if atkBannerSecret}
					<li>
						Collects <span class="oath">-</span> equal to
						<span class="oath">2</span>
						on
						<strong>banner</strong>
					</li>
				{/if}
			</ul>
		</div>

		<p class="span-grid">
			<strong>Reminder:</strong> Add or remove dice based off special
			<strong>sites</strong>
			and <strong>battle plans</strong> before you roll!
		</p>

		<button class="span-grid" on:click={nextStep}>I Rolled!</button>
	</div>
{/if}

<style>
	[data-panel] {
		display: grid;
		gap: 5px;
		grid-template-columns: repeat(6, 1fr);
	}

	[data-panel="targets"] {
		background: var(--def);
	}

	.span-grid {
		grid-column: 1 / 7;
	}

	fieldset {
		display: contents;
	}

	h3 {
		margin: 5px 0;
	}

	ul {
		text-align: left;
	}

	fieldset + p {
		font-size: 0.9em;
		margin: 10px 0;
		position: relative;
	}

	.pawnAtSite {
		background-color: color-mix(in srgb, var(--def), black 5%);
		border: 1px solid black;
		border-radius: 0;
		font-size: 1.1em;
		height: calc((47px * 3) + 42px);
		position: absolute;
		top: calc(100% + 15px);
		left: 0;
		width: 100%;
		z-index: 1;
	}

	.hidden {
		opacity: 0;
	}

	.site {
		aspect-ratio: 4.5 / 3;
		background: url(/site.avif) no-repeat center;
		background-size: contain;
		border: 1px solid transparent;
		border-radius: 2px;
		width: 26vw;
	}

	.site:has(:checked) {
		background-color: var(--atk);
		background-blend-mode: multiply;
		border-color: var(--atk);
	}

	.site input {
		display: none;
	}

	.site:nth-child(3n + 1) {
		grid-column: 1 / 3;
	}

	.site:nth-child(3n + 2) {
		grid-column: 3 / 5;
	}

	.site:nth-child(3n) {
		grid-column: 5 / 7;
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

	[data-def="purple"] {
		background: var(--purple);
	}

	[data-def="yellow"] {
		background: var(--yellow);
		color: black;
	}

	[data-def="red"] {
		background: var(--red);
	}

	[data-def="blue"] {
		background: var(--blue);
	}

	[data-def="black"] {
		background: var(--black);
	}

	[data-def="white"] {
		background: white;
		color: black;
	}

	[data-def="bandit"] {
		background: #ccc;
		color: black;
	}

	.faction-btn:has(:checked) {
		background: var(--atk);
		color: white;
		font-weight: bold;
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
