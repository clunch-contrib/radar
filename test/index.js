import Clunch from 'clunch';
import radar from '../index';
import image from './test.clunch';

window.clunch = new (Clunch.series('ui-radar', radar))({
    el: document.getElementById('root'),
    data: function () {
        return {
            indicator: [
                { name: '销售（Sales）', max: 6500 },
                { name: '管理（Administration）', max: 16000 },
                { name: '信息技术（Information Technology）', max: 30000 },
                { name: '客服（Customer Support）', max: 38000 },
                { name: '研发（Development）', max: 52000 },
                { name: '市场（Marketing）', max: 25000 }
            ],
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: '预算分配（Allocated Budget）'
                },
                {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: '实际开销（Actual Spending）'
                }
            ]
        };
    },
    render: image,
    methods: {
        doit(target) {
            console.log(target);
        }
    }
});
