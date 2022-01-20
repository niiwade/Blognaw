<script>
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Pagination from '$lib/Pagination.svelte';

	import '../app.css';
</script>

<Navbar />
<slot />
<Pagination />
<Footer />
