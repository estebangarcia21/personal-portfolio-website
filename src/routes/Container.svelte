<script lang="ts">
	export let classname: string = '';
	export let page: boolean = false;
	export let as: string = 'div';

	$: pageStyles = page ? 'py-4 sm:py-8 ' : '';
</script>

<svelte:element this={as} class="px-4 sm:px-8">
	<div class="sm:max-w-4xl sm:mx-auto {pageStyles} {classname}">
		<slot />
	</div>
</svelte:element>
