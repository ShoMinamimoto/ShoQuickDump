import template from './sw-cms-el-config-sohcahtoa.html.twig';
import './sw-cms-el-config-sohcahtoa.scss';

const {Component, Mixin} = Shopware;

Component.register('sw-cms-el-config-sohcahtoa', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('sohcahtoa');
        }
    },
});