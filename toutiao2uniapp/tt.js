 export default class tt  {

	//////////////////////  基础  ///////////////////////////

	static canIUse(schema) {
		return uni.canIUse(schema);
	}

	static base64ToArrayBuffer(base64) {
		return uni.base64ToArrayBuffer(base64);
	}

	static arrayBufferToBase64(arrayBuffer) {
		return uni.arrayBufferToBase64(arrayBuffer);
	}

  //////// 生命周期 /////

	static getLaunchOptionsSync() {
		return console.warn("getLaunchOptionsSync is not support")
	}

	static exitMiniProgram() {
		return console.warn("exitMiniProgram is not support")
	}

	static canIPutStuffOverComponent() {
		return console.warn("canIPutStuffOverComponent is not support")
	}

	//////// 更新 /////

	static getUpdateManager() {
		return uni.getUpdateManager()
	}

	//////// 应用级事件 /////

	static onAppShow(callback) {
		return uni.onAppShow(callback)
	}

	static offAppShow(callback) {
		return uni.offError(callback)
	}

	static onAppHide(callback) {
		return uni.onAppHide(callback)
	}

	static offAppHide(callback) {
		return uni.offError(callback)
	}

	static onError(callback) {
		return uni.onError(callback)
	}

	static offError(callback) {
		return uni.offError(callback)
	}

	/////// 环境变量 /////
	static env() {
		return console.warn("env is not support")
	}

	//////////////////////  网络  /////////////////////

	/////// HTTP /////

	static downloadFile(object) {
		return uni.downloadFile(object)
	}

	static request(object) {
		return uni.request(object)
	}

	static uploadFile(object) {
		return uni.uploadFile(object)
	}

	/////// WebSocket /////

	static connectSocket(object) {
		return uni.connectSocket(object)
	}

	//////////////////////  媒体  /////////////////////

	/////// 图片 /////
	static chooseImage(object) {
		return uni.chooseImage(object)
	}

	static saveImageToPhotosAlbum(object) {
		return uni.saveImageToPhotosAlbum(object)
	}

	static previewImage(object) {
		return uni.previewImage(object)
	}

	static getImageInfo(object) {
		return uni.getImageInfo(object)
	}

	static compressImage(object) {
		return uni.compressImage(object)
	}

	/////// 录音 /////
	static getRecorderManager() {
		return uni.getRecorderManager()
	}

	/////// 音频 /////
	static createInnerAudioContext() {
		return uni.createInnerAudioContext()
	}

	static getBackgroundAudioManager() {
		return uni.getBackgroundAudioManager()
	}

	/////// 视频 /////
	static chooseVideo(object) {
		return uni.chooseVideo(object)
	}

	static saveVideoToPhotosAlbum(object) {
		return uni.saveVideoToPhotosAlbum(object)
	}

	static createVideoContext(string, object) {
		return uni.createVideoContext(string, object)
	}

	static createLivePlayerContext(string, object) {
		return uni.createLivePlayerContext(string, object)
	}

	/////// 相机 /////
	static createCameraContext() {
		return uni.createCameraContext()
	}

	//////////////////////  地图  /////////////////////

  static createMapContext(sting, obejct) {
	  return uni.createMapContext(sting, obejct)
	}
	
	/////////////////// 文件 //////////////////////////

	static saveFile(object) {
		return uni.saveFile(object)
	}

	static getFileInfo(object) {
		return uni.getFileInfo(object)
	}

	static saveFileToDisk(object) {
		return console.warn("saveFileToDisk is not support")
	}

	static getSavedFileList(object) {
		return uni.getSavedFileList(object)
	}

	static openDocument(object) {
		return uni.openDocument(object)
	}

	static removeSavedFile(object) {
		return uni.removeSavedFile(object)
	}

	static getFileSystemManager() {
		return uni.getFileSystemManager(object)
	}

	/////////////////// 开放接口 //////////////////////////

  /////// 登陆 /////
	static login(object) {
		return uni.login(object)
	}

	static checkSession(object) {
		return uni.checkSession(object)
	}

	/////// 用户信息 /////
	static getUserInfo(object) {
		return uni.getUserInfo(object)
	}

	/////// 支付 /////
	static pay (object) {
		return uni.requestPayment(object)
	}

	/////// 激励视频广告 ///// 
	static createRewardedVideoAd(object) {
		return uni.createRewardedVideoAd(object)
	}

  /////// 插屏广告 ///// 
	static createInterstitialAd(object) {
		return uni.createInterstitialAd(object)
	}

	/////// 小程序跳转 /////
	static navigateToMiniProgram(object) {
		return uni.navigateToMiniProgram(object)
	}

	static navigateBackMiniProgram(object) {
		return uni.navigateBackMiniProgram(object)
	}

  /////// 收货地址 /////
	static chooseAddress(object) {
		return uni.chooseAddress(object)
	}

	/////// 设置 /////
	static getSetting(object) {
		return uni.getSetting(object)
	}

	static openSetting(object) {
		return uni.openSetting(object)
	}

	/////// 授权 /////
	static authorize(object) {
		return uni.authorize(object)
	}

	static showDouyinOpenAuth(object) {
		return console.warn("showDouyinOpenAuth is not support")
	}

	/////// 数据分析 /////
	static reportAnalytics(string,object) {
		return console.warn("reportAnalytics is not support")
	}

	/////// 跳转视频播放页 /////
	static navigateToVideoView(object) {
		return console.warn("navigateToVideoView is not support")
	}

	/////// 引导关注 /////
	static followOfficialAccount(object) {
		return console.warn("followOfficialAccount is not support")
	}

	static checkFollowState(object) {
		return console.warn("checkFollowState is not support")
	}

	/////// 订阅消息 /////
	static requestSubscribeMessage(object) {
		return uni.requestSubscribeMessage(object)
	}

	/////// 电商融合方案 /////
	static openDouyinOrderList(object) {
		return console.warn("openDouyinOrderList is not support")
	}

	/////////////////// 数据缓存 //////////////////////////

	static getStorage(object) {
		return uni.getStorage(object)
	}

	static getStorageSync(string) {
		return uni.getStorageSync(string)
	}

	static setStorage(object) {
		return uni.setStorage(object)
	}

	static setStorageSync(string, any) {
		return uni.setStorageSync(string, any)
	}

	static removeStorage(object) {
		return uni.removeStorage(object)
	}

	static removeStorageSync(string) {
		return uni.setStorage(string)
	}

	static clearStorage(object) {
		return uni.clearStorage(object)
	}

	static clearStorageSync() {
		return uni.clearStorageSync()
	}

	static getStorageInfo(object) {
		return uni.getStorageInfo(object)
	}
	
	static getStorageInfoSync() {
		return uni.getStorageInfoSync()
	}

	/////////////////// 位置 //////////////////////////

	static getLocation(object) {
		return uni.getLocation(object)
	}

	static chooseLocation(object) {
		return uni.chooseLocation(object)
	}
	
	static openLocation(object) {
		return uni.openLocation(object)
	}
	
	/////////////////// 设备 //////////////////////////

	/////// 网络状态 ///////
	static getNetworkType(object) {
		return uni.getNetworkType(object)
	}

	static onNetworkStatusChange(callback) {
		return uni.onNetworkStatusChange(callback)
	}

	static getWifiList(object) {
		return console.warn("getWifiList is not support")
	}

	static onGetWifiList(callback) {
		return console.warn("onGetWifiList is not support")
	}

	static offGetWifiList(callback) {
		return console.warn("offGetWifiList is not support")
	}

	//////// 系统信息 ///////
	static getSystemInfo(object) {
		return uni.getSystemInfo()
	}   

	static getSystemInfoSync() {
		return uni.getSystemInfoSync()
	}

	//////// Wi-Fi ///////
	static getConnectedWifi(object) {
		return console.warn("getConnectedWifi is not support")
	}

	//////// 加速度计 ///////
	static startAccelerometer(object) {
		return uni.startAccelerometer(object)
	}

	static stopAccelerometer(object) {
		return uni.stopAccelerometer(object)
	}

	static onAccelerometerChange(callback) {
		return uni.onAccelerometerChange(callback)
	}

	/////// 罗盘 ///////
	static startCompass(object) {
		return uni.startCompass(object)
	}

	static stopCompass(object) {
		return uni.stopAccelerometer(object)
	}

	static onCompassChange(callback) {
		return uni.onCompassChange(callback)
	}

	/////// 拨打电话 ///////
	static makePhoneCall(object) {
		return uni.makePhoneCall(object)
	}

	/////// 扫码 ///////
	static scanCode(object) {
		return uni.scanCode(object)
	}

	/////// 剪切板 ///////
	static getClipboardData(object) {
		return uni.getClipboardData(object)
	}

	static setClipboardData(object) {
		return uni.setClipboardData(object)
	}

	/////// 屏幕 ///////
	static setKeepScreenOn(object) {
		return uni.setKeepScreenOn(object)
	}

	static onUserCaptureScreen(callback) {
		return uni.onUserCaptureScreen(callback)
	}

	static offUserCaptureScreen(callback) {
		return console.warn("offUserCaptureScreen is not support")
	}

	static getScreenBrightness(object) {
		return uni.getScreenBrightness(object)
	}

	static setScreenBrightness(object) {
		return uni.setScreenBrightness(object)
	}

	/////// 振动 ///////
	static vibrateShort(object) {
		return uni.vibrateShort(object)
	}

	static vibrateLong(object) {
		return uni.vibrateLong(object)
	}

	/////// 性能 ///////
	static onMemoryWarning(callback) {
		return uni.onMemoryWarning(callback)
	}

	///////////////// 界面 ////////////////////

  /////// 交互反馈 ///////
	static showToast(object) {
		return uni.showToast(object)
	}

	static hideToast(object) {
		return uni.hideToast(object)
	}

	static showLoading(object) {
		return uni.showLoading(object)
	}

	static hideLoading(object) {
		return uni.hideLoading(object)
	}

	static showModal(object) {
		return uni.showModal(object)
	}

	static showActionSheet(object) {
		return uni.showActionSheet(object)
	}

	static showFavoriteGuide(object) {
		return console.warn("showFavoriteGuide is not support")
	}

	static showInteractionBar(object) {
		return console.warn("showInteractionBar is not support")
	}

	static hideInteractionBar(object) {
		return console.warn("hideInteractionBar is not support")
	}

	/////// 导航栏 ///////
	static showNavigationBarLoading(object) {
		return uni.showNavigationBarLoading(object)
	}

	static hideNavigationBarLoading(object) {
		return uni.hideNavigationBarLoading(object)
	}

	static hideHomeButton(object) {
		return uni.hideHomeButton(object)
	}

	static setNavigationBarTitle(object) {
		return uni.setNavigationBarTitle(object)
	}

	static setNavigationBarColor(object) {
		return uni.setNavigationBarColor(object)
	}

	/////// 菜单 ///////
	static getMenuButtonBoundingClientRect() {
		return uni.getMenuButtonBoundingClientRect()
	}

  /////// 动画 ///////
	static createAnimation(object) {
		return uni.createAnimation(object)
	}

	/////// 页面位置 ///////
	static pageScrollTo(object) {
		return uni.pageScrollTo(object)
	}

	/////// Canvas绘图 ///////
	static createCanvasContext(string,object) {
		return console.warn("createCanvasContext is not support")
	}

	static createOffscreenCanvas() {
		return console.warn("createOffscreenCanvas is not support")
	}

	static canvasToTempFilePath(object1,object2) {
		return console.warn("canvasToTempFilePath is not support")
	}

	/////// 下拉刷新 ///////
	static startPullDownRefresh(object) {
		return uni.startPullDownRefresh (object)
	}

	static stopPullDownRefresh(object) {
		return uni.stopPullDownRefresh(object)
	}

	/////// TabBar ///////

	static showTabBarRedDot(object) {
		return uni.showTabBarRedDot(object)
	}

	static showTabBar(object) {
		return uni.showTabBar(object)
	}

	static setTabBarStyle(object) {
		return uni.setTabBarStyle(object)
	}

	static setTabBarItem(object) {
		return uni.setTabBarItem(object)
	}

	static setTabBarBadge(object) {
		return uni.setTabBarBadge(object)
	}

	static removeTabBarBadge(object) {
		return uni.removeTabBarBadge(object)
	}

	static hideTabBarRedDot(object) {
		return uni.hideTabBarRedDot(object)
	}

	static hideTabBar(object) {
		return uni.hideTabBar(object)
	}

	///////////////// 导航 ////////////////////

	static navigateTo(object) {
		return uni.navigateTo(object)
	}

	static redirectTo(object) {
		return uni.redirectTo(object)
	}

	static switchTab(object) {
		return uni.switchTab(object)
	}

	static navigateBack(object) {
		return uni.navigateBack(object)
	}

	static reLaunch(object) {
		return uni.reLaunch(object)
	}

	///////////////// 转发 ////////////////////

	static showShareMenu(object) {
		return uni.showShareMenu(object)
	}

	static hideShareMenu(object) {
		return uni.hideShareMenu(object)
	}

	static navigateToVideoView(object) {
		return console.warn("navigateToVideoView is not support")
	}

	///////////////// TTML ////////////////////

	static createSelectorQuery() {
		return uni.createSelectorQuery()
	}

	static createIntersectionObserver(object1,object2) {
		return uni.createSelectorQuery(object1,object2)
	}		

}