/**
 * Created by Administrator on 2017/5/10 0010.
 */
//readStatus 1:已读，2：未读，3：已删除
const message = [
    {
        id: 1,
        headPortrait: 'http://i1.piimg.com/594571/e8a18304aa1c1fcbt.jpg',
        name: '达康书记',
        time: '2017/02/06',
        msg: [
            {
                type: 2,
                text: '达康书记，对不住了'
            },
            {
                type: 1,
                text: '没有'
            },
            {
                type: 2,
                text: '到底有没有'
            }
        ],
        readStatus:1
    },
    {
        id: 2,
        headPortrait: 'http://i1.piimg.com/594571/0b1f149c82ae0af0t.jpg',
        name: '沙书记',
        time: '2017/02/06',
        msg: [
            {
                type: 2,
                text: '沙书记好'
            },
            {
                type: 1,
                text: '你好'
            },
            {
                type: 2,
                text: '你好'
            }
        ],
        readStatus:2
    },
    {
        id: 3,
        headPortrait: 'http://i1.piimg.com/594571/058f4233cbaff76ft.jpg',
        name: '祁厅长',
        time: '2017/02/06',
        msg: [
            {
                type: 2,
                text: '你到底有没有贪污'
            },
            {
                type: 1,
                text: '没有'
            },
            {
                type: 2,
                text: '真的吗？'
            },
            {
                type:1,
                text:'你在逗我吗？'
            }
        ],
        readStatus:1
    },
    {
        id: 4,
        headPortrait: 'http://i1.piimg.com/594571/289fc7e9abea0268t.jpg',
        name: '老师',
        time: '2017/02/06',
        msg: [
            {
                type: 1,
                text: '晚上好'
            },
            {
                type: 2,
                text: '晚上好'
            },
            {
                type: 1,
                text: '再见，再也不见了'
            }
        ],
        readStatus:1
    }
]
export {message}
