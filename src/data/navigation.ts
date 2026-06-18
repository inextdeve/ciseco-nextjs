export async function getNavigation(): Promise<TNavigationItem[]> {
  return [
    {
      id: '1',
      href: '/',
      name: 'Home',
    },
    {
      id: '2',
      href: '/collections/page-style-2/all',
      name: 'Shop',
    },
    {
      id: '3',
      href: '/collections/all',
      name: 'Beauty',
    },
    {
      id: '4',
      href: '/collections/page-style-2/all',
      name: 'Sport',
    },
    {
      id: '5',
      href: '/collections/all',
      name: 'Templates',
      type: 'mega-menu',
      children: [
        {
          id: '1',
          href: '/',
          name: 'Home Page',
          type: 'dropdown',
          children: [
            {
              id: '1-1',
              href: '/',
              name: 'Home 1',
            },
            {
              id: '1-2',
              href: '/home-2',
              name: 'Home 2',
            },
            { id: '1-3', href: '/', name: 'Header 1' },
            { id: '1-4', href: '/home-2', name: 'Header 2' },
            { id: '1-5', href: '/coming-soon', name: 'Coming Soon' },
          ],
        },
        {
          id: '2',
          href: '/#',
          name: 'Shop Pages',
          type: 'dropdown',
          children: [
            { id: '2-1', href: '/collections/sale-collection', name: 'Collection 1' },
            { id: '2-2', href: '/collections/page-style-2/sale-collection', name: 'Collection 2' },
            { id: '2-3', href: '/products/leather-tote-bag', name: 'Product 1' },
            { id: '2-4', href: '/products/page-style-2/leather-tote-bag', name: 'Product 2' },
            { id: '2-5', href: '/cart', name: 'Cart' },
            { id: '2-6', href: '/checkout', name: 'Checkout', children: [] },
            { id: '2-7', href: '/orders', name: 'Orders history' },
          ],
        },
        {
          id: '3',
          href: '/#',
          name: 'Other Pages',
          type: 'dropdown',
          children: [
            { id: '3-2', href: '/search', name: 'Search' },
            { id: '3-4', href: '/account', name: 'Account' },
            { id: '3-3', href: '/order-successful', name: 'Order Successful' },
            { id: '3-1', href: '/checkout', name: 'Checkout' },
            { id: '3-5', href: '/orders', name: 'Orders history' },
            { id: '3-6', href: '/orders/4657', name: 'Order detail' },
            { id: '3-7', href: '/subscription', name: 'Subscription' },
          ],
        },
        {
          id: '4',
          href: '/#',
          name: 'Other Pages',
          type: 'dropdown',
          children: [
            { id: '4-1', href: '/blog', name: 'Blog' },
            { id: '4-2', href: '/blog/graduation-dresses-style-guide', name: 'Blog Single' },
            { id: '4-3', href: '/about', name: 'About' },
            { id: '4-4', href: '/contact', name: 'Contact' },
            { id: '4-5', href: '/login', name: 'Login' },
            { id: '4-6', href: '/signup', name: 'Signup' },
            { id: '4-7', href: '/forgot-password', name: 'Forgot Password' },
          ],
        },
      ],
    },
    {
      id: '6',
      href: '/collections/page-style-2/all',
      name: 'Explore',
      type: 'dropdown',
      children: [
        {
          id: '3',
          href: '/collections/all',
          name: 'Collection pages',
          type: 'dropdown',
          children: [
            {
              id: '3-1',
              href: '/collections/all',
              name: 'Collection 1',
            },
            {
              id: '3-2',
              href: '/collections/page-style-2/all',
              name: 'Collection 2',
            },
          ],
        },
        {
          id: '4',
          href: '/products/leather-tote-bag',
          name: 'Product Pages',
          type: 'dropdown',
          children: [
            {
              id: '4-1',
              href: '/products/leather-tote-bag',
              name: 'Product 1',
            },
            {
              id: '4-2',
              href: '/products/page-style-2/leather-tote-bag',
              name: 'Product 2',
            },
          ],
        },
        {
          id: '5',
          href: '/cart',
          name: 'Cart Page',
        },
        {
          id: '6',
          href: '/checkout',
          name: 'Checkout',
        },
        {
          id: 'gid://6',
          href: '/orders',
          name: 'Orders',
        },
        {
          id: '7',
          href: '/search',
          name: 'Search Page',
        },
        {
          id: '8',
          href: '/account',
          name: 'Account Page',
        },
        {
          id: '9',
          href: '/about',
          name: 'Other Pages',
          type: 'dropdown',
          children: [
            {
              id: '9-1',
              href: '/about',
              name: 'About',
            },
            {
              id: '9-2',
              href: '/contact',
              name: 'Contact us',
            },
            {
              id: '9-3',
              href: '/login',
              name: 'Login',
            },
            {
              id: '9-4',
              href: '/signup',
              name: 'Signup',
            },
            {
              id: '9-5',
              href: '/subscription',
              name: 'Subscription',
            },
            { id: '9-6', href: '/forgot-pass', name: 'Forgot Password' },
          ],
        },
        {
          id: '10',
          href: '/blog',
          name: 'Blog Page',
          type: 'dropdown',
          children: [
            {
              id: '10-1',
              href: '/blog',
              name: 'Blog Page',
            },
            {
              id: '10-2',
              href: '/blog/graduation-dresses-style-guide',
              name: 'Blog Single',
            },
          ],
        },
      ],
    },
  ]
}

export async function getNavMegaMenu(): Promise<TNavigationItem> {
  const navigation = await getNavigation()

  // Find the mega menu item in the navigation array
  return navigation[4]
}

// ============ TYPE =============
export type TNavigationItem = Partial<{
  id: string
  href: string
  name: string
  type?: 'dropdown' | 'mega-menu'
  isNew?: boolean
  children?: TNavigationItem[]
}>

export const getLanguages = async () => {
  return [
    {
      id: 'English',
      name: 'English',
      description: 'United State',
      href: '#',
      active: true,
    },
    {
      id: 'Francais',
      name: 'Francais',
      description: 'French',
      href: '#',
    },
    {
      id: 'Arabic',
      name: 'Arabic',
      description: 'Morocco',
      href: '#',
    },
  ]
}
export const getCurrencies = async () => {
  return [
    {
      id: 'MAD',
      name: 'MAD',
      href: '#',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1"/>
  <text x="12" y="14.2"
        text-anchor="middle"
        font-size="7"
        font-family="Arial, sans-serif"
        font-weight="400"
        fill="currentColor">DH</text>
</svg>`,
      active: true,
    },
    {
      id: 'EUR',
      name: 'EUR',
      href: '#',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M15 14.4923C14.5216 15.3957 13.6512 16 12.6568 16C11.147 16 9.92308 14.6071 9.92308 12.8889V11.1111C9.92308 9.39289 11.147 8 12.6568 8C13.6512 8 14.5216 8.60426 15 9.50774M9 12H12.9231" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
</svg>`,
    },
    {
      id: 'USD',
      name: 'USD',
      href: '#',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
</svg>`,
    },

    {
      id: 'SAR',
      name: 'SAR',
      href: '#',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
</svg>`,
    },
  ]
}

export const getHeaderDropdownCategories = async () => {
  return [
    {
      name: 'Handmade Soap',
      handle: 'handmade-soap',
      description: 'New products',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-icon lucide-hand"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
    },
    {
      name: 'Bath Bombs',
      handle: 'bath-bombs',
      description: 'Sparkling relaxation',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bath-icon lucide-bath"><path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/></svg>`,
    },
    {
      name: 'Decorated Soap',
      handle: 'decorated-soap',
      description: 'Touch of art',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bubbles-icon lucide-bubbles"><path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/></svg>`,
    },
    {
      name: 'Petrichor Soap',
      handle: 'petrichor-soap',
      description: 'Luxury and nobility',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cuboid-icon lucide-cuboid"><path d="M10 22v-8"/><path d="M2.336 8.89 10 14l11.715-7.029"/><path d="M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z"/></svg>
     `,
    },
    {
      name: 'Accessories',
      handle: 'accessories',
      description: 'Beauty & Accessories',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rose-icon lucide-rose"><path d="M17 10h-1a4 4 0 1 1 4-4v.534"/><path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31"/><path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2"/><path d="M9.77 12C4 15 2 22 2 22"/><circle cx="17" cy="8" r="2"/></svg>
     `,
    },
  ]
}
