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
		return console.error("getLaunchOptionsSync暂不支持")
	}

	static exitMiniProgram() {
		return console.error("exitMiniProgram暂不支持")
	}

	static canIPutStuffOverComponent() {
		return console.error("canIPutStuffOverComponent暂不支持")
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
		return console.error("env暂不支持")
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

}