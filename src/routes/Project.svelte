<script lang="ts">
	export let title: string;
	export let href: string;
	export let externalViewHref: string | null = null;
	export let skills: string[] = [];
	export let active: boolean = false;
</script>

<div>
	<a
		class="flex flex-col justify-between h-full rounded-sm p-5 border border-[#131313] cursor-pointer shadow-slate-900/50 shadow-lg"
		{href}
		rel="noreferrer"
		target="_blank"
	>
		<div class="flex-1 h-max">
			<div class="flex flex-row justify-between items-center">
				<h1 class="flex-1 text-lg font-semibold">{title}</h1>

				{#if active}
					<p
						class="px-2 text-xs bg-emerald-500 text-black uppercase font-mono font-semibold text-center rounded-sm h-max"
					>
						In progress
					</p>
				{/if}
			</div>
			<p class="text-sm mt-2"><slot /></p>
		</div>

		{#if externalViewHref}
			<a
				class="flex-1 mt-4 block text-center w-full font-semibold px-4 py-1 rounded-sm transition border border-blue-600 hover:text-white cursor-pointer hover:bg-blue-600"
				rel="noreferrer"
				target="_blank"
				href={externalViewHref}>Visit</a
			>
		{/if}

		{#if skills.length}
			<p class="mt-4 text-xs text-coolGray-600">{skills.join(', ')}</p>
		{/if}
	</a>
</div>
