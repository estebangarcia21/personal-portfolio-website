<script lang="ts">
	export let value: string;
</script>

<div class="section">
	<p>{'/'} {value}</p>
	<hr />
</div>

<style>
	.section {
		@apply flex flex-row items-center flex-wrap mb-6;
	}

	.section p {
		@apply font-mono font-semibold text-2xl pr-4;
	}

	.section hr {
	@apply border-b-[1px] flex-1 border-[#111111];
	}
</style>
