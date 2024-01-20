<!-- Child.svelte -->
<script lang="ts">
	export let child: { name: string; tally: number };

	function getColor(tally: number) {
		if (tally === 0) return 'bg-white';
		const colorClasses = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
		if (tally > 0) {
			const index = Math.min(Math.floor((tally / 100) * 9), 8);
			return `bg-green-${colorClasses[index]}`;
		} else {
			const index = Math.min(Math.floor((Math.abs(tally) / 100) * 9), 8);
			return `bg-red-${colorClasses[index]}`;
		}
	}

	const colorClass = getColor(child.tally);
</script>

<div class="noBreak m-2 p-4 rounded shadow-lg text-center {colorClass}" >
	<h2 class="text-xl font-bold">{child.name}</h2>
	<p class="text-sm">Tally: {child.tally}</p>
</div>

<style>
	.noBreak {
		break-inside: avoid;
		page-break-inside: avoid;
	}
</style>
