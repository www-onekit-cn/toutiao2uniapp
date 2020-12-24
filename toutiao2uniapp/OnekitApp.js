export default function (tt_object) {
	const uniapp_object = {
		onLaunch(uni_launchOpions) {
			let wx_launchOpions = {}
			/*
			uni_launchOpions => wx_launchOpions
			*/
			wx_launchOpions = uni_launchOpions
			wx_launchOpions.shareTicket = undefined
			wx_launchOpions.referrerInfo = {}
			//////////////////////
			this.onekit_launchOpions = wx_launchOpions
			if (tt_object.onLaunch) {
				tt_object.onLaunch.call(this, wx_launchOpions)
				// tt_object.onLaunch(wx_launchOpions)
			}
		},
		onShow(uni_showOpions) {
			let wx_showOpions = {}
			wx_showOpions = uni_showOpions
			this.onekit_showOptions = wx_showOpions
			if (tt_object.onShow) {
				tt_object.onShow.call(this, uni_showOpions)
			}
		},
		onUnhandledRejection(uni_rejectionFn) {
			/**     未生效       */
			let wx_rejectionFn = uni_rejectionFn()
			this.onekit_rejectionFn = wx_rejectionFn()
			if (tt_object.onUnhandledRejection) {
				tt_object.onUnhandledRejection(wx_rejectionFn())
			}
		},
		onThemeChange(uni_themeChangeFn) {
			/**     未测试    */
			let wx_themeChangeFn = uni_themeChangeFn()
			this.onekit_themeChangeFn = wx_themeChangeFn()
			if (tt_object.onThemeChange) {
				tt_object.onThemeChange(wx_themeChangeFn())
			}
		}
	}
	return uniapp_object
}