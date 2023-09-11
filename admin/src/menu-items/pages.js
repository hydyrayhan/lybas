// assets
import { IconList,IconCategory,IconColorFilter,IconRuler3 } from '@tabler/icons';


// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'orders',
      title: 'Zakazlar',
      type: 'item',
      url:'/orders',
      icon: IconList,
      target: false
    },
    {
      id: 'categories',
      title: 'Kategorylar',
      type: 'item',
      url:'/category',
      icon: IconCategory,
      target: false
    },
    {
      id: 'color',
      title: 'Reňkler',
      type: 'item',
      url:'/color',
      icon: IconColorFilter,
      target: false
    },
    {
      id: 'size',
      title: 'Razmerler',
      type: 'item',
      url:'/size',
      icon: IconRuler3,
      target: false
    },
    // {
    //   id: 'authentication',
    //   title: 'Authentication',
    //   type: 'collapse',
    //   icon: icons.IconKey,

    //   children: [
    //     {
    //       id: 'login3',
    //       title: 'Login',
    //       type: 'item',
    //       url: '/pages/login/login3',
    //       target: true
    //     },
    //     {
    //       id: 'register3',
    //       title: 'Register',
    //       type: 'item',
    //       url: '/pages/register/register3',
    //       target: true
    //     }
    //   ]
    // }
  ]
};

export default pages;
