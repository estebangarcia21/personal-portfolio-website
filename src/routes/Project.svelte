<script lang="ts">
	export let title: string;
	export let href: string;
	export let externalViewHref: string | null = null;
</script>

<a
	class="rounded-sm p-5 border border-[#131313] cursor-pointer shadow-slate-900/50 shadow-lg"
	{href}
	rel="noreferrer"
	target="_blank"
>
	<h1 class="text-lg uppercase font-semibold">{title}</h1>
	<p class="text-xs mt-2"><slot /></p>

	{#if externalViewHref}
		<a
			class="mt-4 block text-center w-full uppercase font-semibold px-4 py-1 rounded-sm transition bg-blue-600 hover:text-white cursor-pointer border hover:bg-black border-blue-600"
			rel="noreferrer"
			target="_blank"
			href={externalViewHref}>Visit</a
		>
	{/if}
</a>
