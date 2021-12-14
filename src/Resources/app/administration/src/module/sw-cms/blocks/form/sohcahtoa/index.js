import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'sohcahtoa',
    label: 'sw-cms.blocks.form.sohcahtoa.label',
    category: 'form',
    component: 'sw-cms-block-sohcahtoa',
    previewComponent: 'sw-cms-preview-sohcahtoa',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        content: 'sohcahtoa'
    }
});