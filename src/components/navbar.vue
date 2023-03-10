<template>
	<nav class="nav">
		<img src="@/assets/images/logo-nav.png" alt="navbar-logo">

		<router-link to="/">Home</router-link>
	</nav>
</template>

<script>


</script>

<style lang="scss">
.nav {
	padding: 3rem 4.5rem;
	border: 1px solid transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		font-size: 2.2rem;
    text-decoration: none;
		font-weight: 700;
	}
}
</style>
