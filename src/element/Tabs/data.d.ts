interface TabItem  {
    /**
     * 标题
     */
    title: string
}

declare namespace Tabs {

    interface TabsProps {

        /**
         * tab高度 根据内容自动撑开
         * 
         */

        height?: number

        /**
         * tab 列表
         */
        tabList: TabItem[]
    }

    interface ItemProps {

    }
}

export default Tabs