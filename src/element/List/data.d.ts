// interface Children {
//     children
// }


declare namespace DataD {
    
    interface ListProps {
        children: React.ReactNode[],
        /**
         * 滚动区域高度, 必传
         */
        height: string,

        /**
         * @description  每一个Item的高度, 便于计算是否在首屏数据不够的时候再次发送请求
         * @default 0
         */

        itemheight: number

        /**
         * @description  是否开启下拉刷新
         * @default false
         */
        openRefresher?: boolean

        /**
         * @description 自定义刷新阈值
         * @default 45
         */
        refresherThreshold?: number

        /**
         * @description 下拉刷新是否结束
         * @default false
         */
        refresherState?: boolean

        /**
         * @description 下拉触发函数
         * 
         */
        onRefresher?: () => void

        /**
         * @description 上拉加载更多
         */
        onLoad?: () => void


        /**
         * @description 滚动条与底部距离小于 offset 时触发load事件
         * @default 50
         */
        offset?: number

        /**
         * @description 当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。若数据已全部加载完毕，则直接将 finished 设置成 true 即可。
         * @default false
         */
        loading?: boolean

        /**
         * @description 
         * @default false
         */
         finished?: boolean
    }

    interface LoadingComProps {
        content: string,
        color: '#6190E8' | 'transparent'
    }

}

export default DataD