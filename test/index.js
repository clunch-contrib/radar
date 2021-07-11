import Clunch from 'clunch';
import radar from '../index';
import image from './test.clunch';

window.clunch = new (Clunch.series('ui-radar', radar))({
    el: document.getElementById('root'),
    data: function () {
        return {

        };
    },
    render: image,
    methods: {
        doit(target) {
            console.log(target);
        }
    }
});
