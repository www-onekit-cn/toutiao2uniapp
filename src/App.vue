<script>
	import OnekitApp from '../toutiao2uniapp/OnekitApp'
	import tt from '../toutiao2uniapp/tt'
	export default OnekitApp({
		onLaunch: function () {
			console.log('App Launch')

		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	})
</script>

<style>
	@import '../toutiao2uniapp/public/onekit.css'
</style>