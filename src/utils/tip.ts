import Taro from '@tarojs/taro'

type iconType = "success" | "loading" | "none"

export default class Tip {
    loading: boolean;

    constructor () {
        this.loading = false
    }
    static toast (title: string = '啊哦, 出了一点小问题', icon: iconType = 'none', duration: number = 2000) {
        Taro.showToast({
            title,
            icon,
            duration
        });
    }
    static modal (title: string = '提示', content:string = '做点什么' ) {
        return new Promise( resolve => {
            Taro.showModal({
                title,
                content,
                success: function (res) {
                    resolve(res)
                }
            });
        }).catch( e => e)
       
    }

    static loading (title: string = '加载中') {
        Taro.showLoading({
            title,
            mask: true
        });
    }

    static loaded () {
        Taro.hideLoading();
    }
}

