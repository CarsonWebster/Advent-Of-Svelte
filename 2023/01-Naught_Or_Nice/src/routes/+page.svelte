<script lang="ts">
	import Child from './Child.svelte';
	export let data;

</script>

<body class="bg-gray-700 font-serif m-8">
	<h1 class="text-4xl text-center text-white">Santa's Naughty Nice List</h1>
	<p class="text-center text-white">There are {data.children.length} children</p>

	<div class="columns-md my-16">
		{#each data.children as child}
			<Child {child} />
		{/each}
	</div>
</body>

