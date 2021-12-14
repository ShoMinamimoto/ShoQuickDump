import template from './sw-cms-el-component-sohcahtoa.html.twig';
import './sw-cms-el-component-sohcahtoa.scss';

const {Component, Mixin} = Shopware;

Component.register('sw-cms-el-sohcahtoa', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('sohcahtoa');
            this.initElementData('sohcahtoa');
        },
    },
});