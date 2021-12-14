import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'sohcahtoa',
    label: 'sw-cms.elements.sohcahtoa.label',
    component: 'sw-cms-el-component-sohcahtoa',
    configComponent: 'sw-cms-el-config-sohcahtoa',
    previewComponent: 'sw-cms-el-preview-sohcahtoa',
    defaultConfig: {},
    defaultData: {}
});