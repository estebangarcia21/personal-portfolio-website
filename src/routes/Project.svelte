<script lang="ts">
	export let title: string;
	export let highlight = false;
	export let href: string;
	export let externalViewHref: string | null = null;
	export let skills: string[] = [];
	export let active: boolean = false;
</script>

<div class="transition-all duration-300 hover:scale-[1.02]">
	<a
		class="flex flex-col justify-between h-full rounded p-5 cursor-pointer shadow-xl {highlight
			? 'border-2 border-indigo-500 shadow-indigo-400/20'
			: 'border shadow-indigo-100/30'}"
		{href}
		rel="noreferrer"
		target="_blank"
	>
		<div class="flex-1 h-max">
			<div class="flex flex-row justify-between items-center">
				<h1 class="flex-1 text-lg font-semibold">{title}</h1>

				{#if active}
					<p
						class="px-3 py-[1.5px] text-[0.65rem] bg-indigo-500 text-white uppercase font-mono font-semibold text-center rounded-full h-max"
					>
						In progress
					</p>
				{/if}
			</div>
			<p class="text-sm mt-2"><slot /></p>
		</div>

		{#if externalViewHref}
			<div class="flex-1">
				<a
					class="mt-4 block text-center w-full font-semibold px-4 py-1.5 rounded-full transition bg-indigo-600 text-white cursor-pointer hover:bg-indigo-500 text-sm"
					rel="noreferrer"
					target="_blank"
					href={externalViewHref}
				>
					Visit
				</a>
			</div>
		{/if}

		{#if skills.length}
			<p class="mt-4 text-xs text-coolGray-600">{skills.join(', ')}</p>
		{/if}
	</a>
</div>
