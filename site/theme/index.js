const contentTmpl = './template/Content/index';

module.exports = {
  categoryOrder: {
    十大原则: 0,
    Principles: 0,
    设计基础: 1,
    'Design Fundamental': 1,
  },
  typeOrder: {
    Basic: 0,
    'Form Controls': 1,
    Views: 2,
    Navigation: 3,
    Other: 4,
  },
  docVersions: {
    '1.x': 'http://10.230.135.97:8888/',
  },
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: './template/Home/index' },
    childRoutes: [{
      path: 'docs/practice/:children',
      component: contentTmpl,
    }, {
      path: 'docs/pattern/:children',
      component: contentTmpl,
    }, {
      path: 'docs/react/:children',
      component: contentTmpl,
    }, {
      path: 'changelog',
      component: contentTmpl,
    }, {
      path: 'components/:children/',
      component: contentTmpl,
    }, {
      path: 'docs/spec/:children',
      component: contentTmpl,
    }, {
      path: 'docs/resource/:children',
      component: contentTmpl,
    }],
  },
};
