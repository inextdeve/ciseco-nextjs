import collectionImage1 from '@/images/collections/1.png'
import collectionImage6 from '@/images/collections/6.png'
import productImage1 from '@/images/products/p1.jpg'

import charcoalSoap1 from '@/images/products/charcoal_soap_1.webp'
import charcoalSoap2 from '@/images/products/charcoal_soap_2.webp'
import charcoalSoap3 from '@/images/products/charcoal_soap_3.webp'
import charcoalSoap_nobg from '@/images/products/charcoal_soap_nobg.png'

import nilaSoap from '@/images/products/nila_soap.png'
import roseSoap from '@/images/products/rose_soap.png'

import sidrSoap1 from '@/images/products/sidr_soap_1.webp'
import sidrSoap2 from '@/images/products/sidr_soap_2.webp'
import sidrSoap3 from '@/images/products/sidr_soap_3.webp'

import roseSoap1 from '@/images/products/rose_soap_1.webp'
import roseSoap2 from '@/images/products/rose_soap_2.webp'
import roseSoap3 from '@/images/products/rose_soap_3.webp'
import roseSoap4 from '@/images/products/rose_soap_4.webp'

import lavenderSoap from '@/images/products/lavender-soap.png'
import lavenderSoap1 from '@/images/products/lavender_soap_1.jpg'
import lavenderSoap2 from '@/images/products/lavender_soap_2.jpg'

import nigellaSoap1 from '@/images/products/nigella_soap_1.webp'
import nigellaSoap2 from '@/images/products/nigella_soap_2.webp'
import nigellaSoap3 from '@/images/products/nigella_soap_3.webp'
import nigellaSoap4 from '@/images/products/nigella_soap_4.webp'

import productImage2 from '@/images/products/p2.jpg'
import productImage3 from '@/images/products/p3.jpg'
import productImage4 from '@/images/products/p4.jpg'
import avatarImage1 from '@/images/users/avatar1.jpg'
import avatarImage2 from '@/images/users/avatar2.jpg'
import avatarImage3 from '@/images/users/avatar3.jpg'
import avatarImage4 from '@/images/users/avatar4.jpg'
import { shuffleArray } from '@/utils/shuffleArray'

export async function getOrder(number: string) {
  const allOrders = await getOrders()
  let order = allOrders.find((order) => order.number.toString() === number)

  if (!order) {
    // throw new Error( `Order with number ${number} not found.` )

    // for demo purposes, we can log a warning and return the first order
    // If no order found, return the first order as a fallback
    console.warn(`Order with number ${number} not found. Returning the first order as a fallback.`)
    order = allOrders[0]
  }

  return order
}
export async function getOrders() {
  return [
    {
      number: '4657',
      date: 'March 22, 2025',
      status: 'Delivered on January 11, 2025',
      invoiceHref: '#',
      totalQuantity: 4,
      cost: {
        subtotal: 199,
        shipping: 0,
        tax: 0,
        total: 199,
        discount: 0,
      },
      products: [
        {
          id: 'gid://2',
          title: 'Nomad Tumbler',
          handle: 'nomad-tumbler',
          description:
            'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          href: '#',
          price: 35,
          status: 'Preparing to ship',
          step: 1,
          date: 'March 24, 2021',
          datetime: '2021-03-24',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          featuredImage: {
            src: productImage2.src,
            width: productImage2.width,
            height: productImage2.height,
            alt: 'Insulated bottle with white base and black snap lid.',
          },
          quantity: 1,
          size: 'XS',
          color: 'Black Brown',
        },
        {
          id: 'gid://3',
          title: 'Minimalist Wristwatch',
          handle: 'minimalist-wristwatch',
          description: 'This contemporary wristwatch has a clean, minimalist look and high quality components.',
          href: '#',
          price: 149,
          status: 'Shipped',
          step: 0,
          date: 'March 23, 2021',
          datetime: '2021-03-23',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          featuredImage: {
            src: productImage4.src,
            width: productImage4.width,
            height: productImage4.height,
            alt: 'Insulated bottle with white base and black snap lid.',
          },
          quantity: 1,
          size: 'XL',
          color: 'White',
        },
      ],
    },
    {
      number: '4376',
      status: 'Delivered on January 08, 2028',
      invoiceHref: '#',
      date: 'March 22, 2025',
      totalQuantity: 4,
      cost: {
        subtotal: 199,
        shipping: 0,
        tax: 0,
        total: 199,
        discount: 0,
      },
      products: [
        {
          id: 'gid://1',
          title: 'Nomad Tumbler',
          handle: 'nomad-tumbler',
          description:
            'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          href: '#',
          price: 99,
          status: 'Preparing to ship',
          step: 1,
          date: 'March 24, 2021',
          datetime: '2021-03-24',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          featuredImage: {
            src: productImage1.src,
            width: productImage1.width,
            height: productImage1.height,
            alt: 'Insulated bottle with white base and black snap lid.',
          },
          quantity: 1,
          size: 'M',
          color: 'Black',
        },
      ],
    },
  ]
}

export async function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}

export async function getShopData() {
  return {
    description: 'An example shop with GraphQL.',
    name: 'graphql',
    termsOfService: {
      url: 'https://checkout.shopify.com/13120893/policies/30401347.html?locale=en',
      title: 'Terms of Service',
      id: 'gid://shopify/ShopPolicy/30401347',
      handle: 'terms-of-service',
      body: 'lorem ispsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nunc, vitae facilisis nunc nisi euismod nisi.',
    },
    subscriptionPolicy: {
      body: '<p>Subscription Policy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    shippingPolicy: {
      body: '<p>Shipping Policy</p>',
      handle: 'shipping-policy',
      id: 'gid://shopify/ShopPolicy/23745298488',
      title: 'Shipping Policy',
      url: 'https://checkout.shopify.com/13120893/policies/23745298488.html?locale=en',
    },
    refundPolicy: {
      body: '<p>refundPolicy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    privacyPolicy: {
      body: '<p>privacyPolicy</p>',
      handle: 'privacy-policy',
      id: 'gid://shopify/ShopPolicy/30401283',
      title: 'Privacy Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401283.html?locale=en',
    },
    primaryDomain: {
      url: 'https://graphql.myshopify.com',
    },
  }
}

export async function getProductReviews(handle: string) {
  return [
    {
      id: '1',
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. </p>
      `,
      author: 'S. Walkinshaw',
      authorAvatar: avatarImage1,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '2',
      title: 'Perfect for going out when you want to stay comfy',
      rating: 4,
      content: `
        <p>The product quality is amazing, it looks and feel even better than I had anticipated.</p>
        <p>I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
      `,
      author: 'Risako M',
      authorAvatar: avatarImage2,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '3',
      title: 'Very nice feeling sweater!',
      rating: 4,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Eden Birch',
      authorAvatar: avatarImage3,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '4',
      title: 'Very nice feeling sweater!',
      rating: 5,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Jonathan Edwards',
      authorAvatar: avatarImage4,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
  ]
}

export async function getBlogPosts() {
  return [
    {
      id: '1',
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1535745122259-f1e187953c4c?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '2 min read',
      author: {
        name: 'Scott Walkinshaw',
        avatar: {
          src: avatarImage1.src,
          alt: 'Scott Walkinshaw',
          width: avatarImage1.width,
          height: avatarImage1.height,
        },
        description:
          'Scott Walkinshaw is a fashion designer and stylist with over 10 years of experience in the industry. He specializes in creating unique and stylish outfits for special occasions.',
      },
    },
    {
      id: '2',
      title: 'How to Wear Your Eid Pieces All Year Long',
      handle: 'how-to-wear-your-eid-pieces-all-year-long',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1668585418249-f87c0f926583?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'How to Wear Your Eid Pieces All Year Long',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Erica Alexander',
        avatar: {
          src: avatarImage2.src,
          alt: 'Erica Alexander',
          width: avatarImage2.width,
          height: avatarImage2.height,
        },
        description:
          'Erica Alexander is a fashion influencer and stylist with a passion for creating unique and stylish outfits. She has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
    {
      id: '3',
      title: 'The Must-Have Hijabi Friendly Fabrics for 2024',
      handle: 'the-must-have-hijabi-friendly-fabrics-for-2024',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1665047189192-3a49516d496a?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'The Must-Have Hijabi Friendly Fabrics for 2024',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Wellie Edwards',
        avatar: {
          src: avatarImage3.src,
          alt: 'Wellie Edwards',
          width: avatarImage3.width,
          height: avatarImage3.height,
        },
        description:
          'Wellie Edwards is a fashion designer and stylist with a passion for creating unique and stylish outfits. She has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
    {
      id: '4',
      title: 'The Hijabi Friendly Fabrics for 2025',
      handle: 'the-must-have-hijabi-friendly-fabrics-for',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1636522302676-79eb484e0b11?q=80&w=3637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'The Must-Have Hijabi Friendly Fabrics for 2024',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Alex Klein',
        avatar: {
          src: avatarImage4.src,
          alt: 'Alex Klein',
          width: avatarImage4.width,
          height: avatarImage4.height,
        },
        description:
          'Alex Klein is a fashion designer and stylist with a passion for creating unique and stylish outfits. He has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
    {
      id: '5',
      title: 'Boost your conversion rate',
      handle: 'boost-your-conversion-rate',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1623876355139-cb77f029bd29?q=80&w=3296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Boost your conversion rate',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Eden Birch',
        avatar: {
          src: avatarImage1.src,
          alt: 'Eden Birch',
          width: avatarImage1.width,
          height: avatarImage1.height,
        },
        description:
          'Eden Birch is a fashion designer and stylist with a passion for creating unique and stylish outfits. She has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
    {
      id: '6',
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1746699484949-869986068267?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3773,
        height: 600,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Scott Edwards',
        avatar: {
          src: avatarImage2.src,
          alt: 'Scott Edwards',
          width: avatarImage2.width,
          height: avatarImage2.height,
        },
        description:
          'Scott Edwards is a fashion designer and stylist with a passion for creating unique and stylish outfits. He has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
  ]
}
export async function getBlogPostsByHandle(handle: string) {
  // lower case the handle
  handle = handle.toLowerCase()

  const posts = await getBlogPosts()
  let post = posts.find((post) => post.handle === handle)

  if (!post) {
    // throw new Error(`Post with handle ${handle} not found.`)

    // for demo purposes, we can log a warning and return the first post
    console.warn(`Post with handle ${handle} not found. Returning the first post as a fallback.`)
    post = posts[0]
  }

  return {
    ...post,
    content: 'Lorem ipsum dolor ...',
    tags: ['fashion', 'style', 'trends'],
  }
}

export function getCart(id: string) {
  return {
    id: 'gid://shopify/Cart/1',
    note: 'This is a note',
    createdAt: '2025-01-06',
    totalQuantity: 4,
    cost: {
      subtotal: 199,
      shipping: 0,
      tax: 0,
      total: 199,
      discount: 0,
    },
    lines: [
      {
        id: '1',
        name: 'Basic Tee',
        handle: 'basic-tee',
        price: 199,
        color: 'Sienna',
        inStock: true,
        size: 'L',
        quantity: 1,
        image: {
          src: productImage1.src,
          width: productImage1.width,
          height: productImage1.height,
          alt: 'Front of Basic Tee in black.',
        },
      },
      {
        id: '2',
        name: 'Basic Coahuila',
        handle: 'basic-coahuila',
        price: 99,
        color: 'Black',
        inStock: false,
        leadTime: '3–4 weeks',
        size: 'XL',
        quantity: 2,
        image: {
          src: productImage2.src,
          width: productImage2.width,
          height: productImage2.height,
          alt: 'Front of Basic Coahuila in black.',
        },
      },
      {
        id: '3',
        name: 'Nomad Tumbler',
        handle: 'nomad-tumbler',
        price: 119,
        color: 'White',
        inStock: true,
        size: 'M',
        quantity: 1,
        image: {
          src: productImage3.src,
          width: productImage3.width,
          height: productImage3.height,
          alt: 'Front of Nomad Tumbler in white.',
        },
      },
    ],
  }
}

// ------------------------  DATA ------------------------
export async function getCollections() {
  return [
    // default collections 1 - 7
    {
      id: 'gid://1',
      title: 'Handmade Soap',
      handle: 'handmade-soap',
      description:
        'Discover our handcrafted soaps, made by hand with high-quality natural ingredients. Gentle, moisturizing, and delicately scented, they provide care suitable for all skin types.',
      sortDescription: 'Newest arrivals',
      color: 'bg-[#5d886c]',
      count: 77,
      image: {
        src: charcoalSoap_nobg.src,
        width: charcoalSoap_nobg.width,
        height: charcoalSoap_nobg.height,
        alt: 'handmade soap',
      },
    },

    {
      id: 'gid://6',
      title: 'Accessories',
      handle: 'accessories',
      sortDescription: 'Top transparent',
      description: 'The perfect accessories to complement your handmade soaps.',
      image: {
        src: collectionImage6.src,
        width: collectionImage6.width,
        height: collectionImage6.height,
        alt: 'Explore new arrivals',
      },
      color: 'bg-indigo-50',
      count: 55,
    },

    //  Featured collections 8 - 11
    {
      id: 'gid://8',
      title: 'Charcoal Soap',
      handle: 'charcoal-soap',
      sortDescription: 'Activated Charcoal Handmade Soap',
      description:
        'Discover our handcrafted soaps, made by hand with high-quality natural ingredients. Gentle, moisturizing, and delicately scented, they provide care suitable for all skin types.',
      color: 'bg-orange-50',
      count: 77,
      image: {
        src: charcoalSoap_nobg.src,
        width: charcoalSoap_nobg.width,
        height: charcoalSoap_nobg.height,
        alt: 'handmade soap',
      },
    },
    {
      id: 'gid://9',
      title: 'Lavender soap',
      handle: 'lavender-soap',
      sortDescription: 'Lavender Patchouli Handmade Soap',
      description:
        'Discover our handcrafted soaps, made by hand with high-quality natural ingredients. Gentle, moisturizing, and delicately scented, they provide care suitable for all skin types.',
      color: 'bg-green-50',
      count: 85,
      image: {
        src: lavenderSoap.src,
        width: lavenderSoap.width,
        height: lavenderSoap.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://10',
      title: 'Nila soap',
      handle: 'nila-soap',
      sortDescription: 'Daily Brightening </br> Soap',
      description:
        'Discover our handcrafted soaps, made by hand with high-quality natural ingredients. Gentle, moisturizing, and delicately scented, they provide care suitable for all skin types.',
      color: 'bg-blue-50',
      count: 77,
      image: {
        src: nilaSoap.src,
        width: nilaSoap.width,
        height: nilaSoap.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://11',
      title: 'Rose soap',
      handle: 'rose-soap',
      sortDescription: 'Touch of Floral </br> Elegance',
      description:
        'Discover our handcrafted soaps, made by hand with high-quality natural ingredients. Gentle, moisturizing, and delicately scented, they provide care suitable for all skin types.',
      color: 'bg-red-50',
      count: 112,
      image: {
        src: roseSoap.src,
        width: roseSoap.width,
        height: roseSoap.height,
        alt: 'Explore new arrivals',
      },
    },
  ]
}

export async function getGroupCollections() {
  const allCollections = await getCollections()
  const collections = allCollections.slice(0, 6)
  return [
    {
      id: '1',
      title: 'Women',
      handle: 'women',
      description: 'lorem ipsum',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 16V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 19H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      collections,
    },
    {
      id: '2',
      title: 'Man',
      handle: 'man',
      description: 'lorem ipsum',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.5 2.5L16 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 2.5H21.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      collections: shuffleArray(collections),
    },
    {
      id: '3',
      title: 'Accessories',
      handle: 'accessories',
      description: 'lorem ipsum',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48003 18.15C3.51003 17.59 2.91003 16.55 2.91003 15.42V8.58003C2.91003 7.46003 3.51003 6.41999 4.48003 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 11.0001C13.2869 11.0001 14.33 9.95687 14.33 8.67004C14.33 7.38322 13.2869 6.34009 12 6.34009C10.7132 6.34009 9.67004 7.38322 9.67004 8.67004C9.67004 9.95687 10.7132 11.0001 12 11.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      collections: shuffleArray(collections),
    },
    {
      id: '4',
      title: 'Footwear',
      handle: 'footwear',
      description: 'lorem ipsum',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.1801 18C19.5801 18 20.1801 16.65 20.1801 15V9C20.1801 7.35 19.5801 6 17.1801 6C14.7801 6 14.1801 7.35 14.1801 9V15C14.1801 16.65 14.7801 18 17.1801 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.81995 18C4.41995 18 3.81995 16.65 3.81995 15V9C3.81995 7.35 4.41995 6 6.81995 6C9.21995 6 9.81995 7.35 9.81995 9V15C9.81995 16.65 9.21995 18 6.81995 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.81995 12H14.1799" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.5 14.5V9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.5 14.5V9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      collections: shuffleArray(collections),
    },
    {
      id: '5',
      title: 'Jewelry',
      handle: 'jewelry',
      description: 'lorem ipsum',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7 18.98H7.30002C6.88002 18.98 6.41002 18.65 6.27002 18.25L2.13002 6.66999C1.54002 5.00999 2.23002 4.49999 3.65002 5.51999L7.55002 8.30999C8.20002 8.75999 8.94002 8.52999 9.22002 7.79999L10.98 3.10999C11.54 1.60999 12.47 1.60999 13.03 3.10999L14.79 7.79999C15.07 8.52999 15.81 8.75999 16.45 8.30999L20.11 5.69999C21.67 4.57999 22.42 5.14999 21.78 6.95999L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 22H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.5 14H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      collections: shuffleArray(collections),
    },
    {
      id: '6',
      title: 'Beauty',
      handle: 'beauty',
      description: 'lorem ipsum',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7 18.98H7.30002C6.88002 18.98 6.41002 18.65 6.27002 18.25L2.13002 6.66999C1.54002 5.00999 2.23002 4.49999 3.65002 5.51999L7.55002 8.30999C8.20002 8.75999 8.94002 8.52999 9.22002 7.79999L10.98 3.10999C11.54 1.60999 12.47 1.60999 13.03 3.10999L14.79 7.79999C15.07 8.52999 15.81 8.75999 16.45 8.30999L20.11 5.69999C21.67 4.57999 22.42 5.14999 21.78 6.95999L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 22H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.5 14H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      collections: shuffleArray(collections),
    },
  ]
}

export async function getCollectionByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()
  // const all products slug: /collections/all
  if (handle === 'all') {
    return {
      id: 'gid://all',
      title: 'All products',
      handle: 'all',
      description: 'Explore our entire collection of handmade soaps.',
      sortDescription: 'All products',
      color: 'bg-indigo-50',
      count: 77,
      image: {
        src: collectionImage1.src,
        width: collectionImage1.width,
        height: collectionImage1.height,
        alt: 'Explore new arrivals',
      },
    }
  }

  const allCollections = await getCollections()
  let collection = allCollections?.find((collection) => collection?.handle === handle)

  if (!collection) {
    //  throw new Error(`Collection with handle "${handle}" not found`)

    // for demo purposes, return a default collection
    collection = allCollections[0] // fallback to the first collection
  }

  return collection
}

export async function getProducts() {
  return [
    {
      id: 'gid://10091',
      title: 'Activated Charcoal Petrichor Soap – Handmade Natural Soap',
      handle: 'petrichor-soap',
      createdAt: '2025-05-06T10:00:00-04:00',
      vendor: 'Blissdor',
      price: 30,
      featuredImage: {
        src: charcoalSoap1.src,
        width: charcoalSoap1.width,
        height: charcoalSoap1.height,
        alt: 'Activated Charcoal Petrichor Soap – Handmade Natural Soap',
      },
      images: [
        {
          src: charcoalSoap2.src,
          width: charcoalSoap2.width,
          height: charcoalSoap2.height,
          alt: 'Activated Charcoal Petrichor Soap – Handmade Natural Soap',
        },
        {
          src: charcoalSoap3.src,
          width: charcoalSoap3.width,
          height: charcoalSoap3.height,
          alt: 'Activated Charcoal Petrichor Soap – Handmade Natural Soap',
        },
      ],
      description: `Experience the refreshing feeling of nature with our Activated Charcoal Petrichor Soap, carefully handcrafted using nourishing plant oils and natural ingredients. This artisan soap is designed to gently cleanse the skin while helping remove impurities and excess oil.`,
      material: ['Activated charcoal', 'Shea butter', 'Olive oil', 'Castor oil', 'Coconut oil', 'Petrichor fragrance'],
      details: `# Activated Charcoal Petrichor Soap – Handmade Natural Soap

Experience the refreshing feeling of nature with our Activated Charcoal Petrichor Soap, carefully handcrafted using nourishing plant oils and natural ingredients. This artisan soap is designed to gently cleanse the skin while helping remove impurities and excess oil.

Activated charcoal is well known for its deep-cleansing properties, helping draw out dirt and impurities from the skin. Combined with moisturizing plant oils, this soap leaves your skin feeling clean, soft, and refreshed.

The petrichor scent brings a unique earthy aroma inspired by the smell of fresh rain on dry soil, creating a calming and natural bathing experience.

Perfect for everyday use on face and body, this soap is suitable for most skin types and is ideal for anyone looking for a simple and natural skincare routine.

## Benefits

- Deep cleansing for the skin
- Helps remove impurities and excess oil
- Leaves skin feeling fresh and smooth
- Suitable for face and body
- Handmade with nourishing plant oils

## Handmade Quality

Each soap bar is handmade in small batches, making every piece unique. Slight variations in color or shape are part of the natural artisanal process.

Please ask if you have any questions about my soap.

**Soap weight:** 1.8oz`,
      reviewNumber: 3,
      rating: 5,
      status: 'New in',
      collections: [
        {
          id: 'col-id-fix-1',
          name: 'Handmade soap',
          primary: true,
          slug: 'handmade-soap',
        },
        {
          id: 'col-id-fix-2',
          name: 'Artisanal soap',
        },
      ],
      options: [
        {
          name: 'Color',
          optionValues: [
            {
              name: 'Black',
              swatch: {
                color: '#000000',
                image: null,
              },
            },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            {
              swatch: null,
              name: '50 g',
            },
          ],
        },
      ],
      selectedOptions: [
        {
          name: 'Color',
          value: 'Black',
        },
        {
          name: 'Size',
          value: '50 g',
        },
      ],
    },
    {
      id: 'gid://1002',
      title: 'Handmade Sidr Soap – Natural Care for Sensitive Skin',
      handle: 'sidr-soap',
      createdAt: '2025-05-07T09:30:00-04:00',
      vendor: 'ChicElegance',
      price: 25,
      featuredImage: {
        src: sidrSoap1.src,
        width: sidrSoap1.width,
        height: sidrSoap1.height,
        alt: 'Handmade Sidr Soap – Natural Care for Sensitive Skin',
      },
      images: [
        {
          src: sidrSoap1.src,
          width: sidrSoap1.width,
          height: sidrSoap1.height,
          alt: 'Handmade Sidr Soap – Natural Care for Sensitive Skin',
        },
        {
          src: sidrSoap2.src,
          width: sidrSoap2.width,
          height: sidrSoap2.height,
          alt: 'Handmade Sidr Soap – Natural Care for Sensitive Skin',
        },
        {
          src: sidrSoap3.src,
          width: sidrSoap3.width,
          height: sidrSoap3.height,
          alt: 'Handmade Sidr Soap – Natural Care for Sensitive Skin',
        },
      ],
      description: `Give your skin a moment of softness with our handmade Sidr soap, crafted by hand using nourishing vegetable oils and natural ingredients. Inspired by traditional natural skincare practices, this soap gently cleanses the skin while respecting its natural balance.`,
      material: ['Olive oil', 'Shea butter', 'Castor oil', 'Coconut oil', 'Lavender oil', 'Sidr leaves'],
      details: `# Handmade Sidr Soap – Natural Care for Sensitive Skin

Give your skin a moment of softness with our handmade Sidr soap, crafted by hand using nourishing vegetable oils and natural ingredients. Inspired by traditional natural skincare practices, this soap gently cleanses the skin while respecting its natural balance.

Sidr leaves (jujube leaves) are known for their purifying and soothing properties. Combined with rich vegetable oils, they help leave the skin clean, soft, and comfortable after each use.

## Benefits

- Gently cleanses the skin
- Helps soothe sensitive skin
- Nourishes and softens the skin
- Suitable for face and body
- Ideal for a natural skincare routine

## Natural Ingredients

Our soap is made with a selection of simple and nourishing ingredients:

- Olive oil – nourishes and protects the skin
- Shea butter – hydrates and softens
- Castor oil – provides a creamy lather
- Coconut oil – cleanses and purifies
- Lavender oil – adds a naturally fragrant and soothing touch
- Sidr leaves (jujube) – known for their purifying properties

## Handmade Craftsmanship

Each soap is handmade in small batches, ensuring a unique and authentic product. The shape and color may vary slightly, which is a sign of a truly artisanal product.`,
      reviewNumber: 3,
      rating: 5,
      status: 'Best Seller',
      collections: [
        {
          id: 'col-id-fix-1',
          name: 'Handmade soap',
          primary: true,
          slug: 'handmade-soap',
        },
        {
          id: 'col-id-fix-2',
          name: 'Artisanal soap',
        },
      ],
      options: [
        {
          name: 'Color',
          optionValues: [
            {
              name: 'Emerald Green',
              swatch: {
                color: '#2E8B57',
                image: null,
              },
            },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            {
              swatch: null,
              name: '50 g',
            },
          ],
        },
      ],
      selectedOptions: [
        {
          name: 'Color',
          value: 'Emerald Green',
        },
        {
          name: 'Size',
          value: '50 g',
        },
      ],
    },
    {
      id: 'gid://1003',
      title: 'Handmade Rose Soap for Hydrating',
      handle: 'rose-soap',
      createdAt: '2025-05-08T11:15:00-04:00',
      vendor: 'Blissdor',
      price: 20,
      featuredImage: {
        src: roseSoap1.src,
        width: roseSoap1.width,
        height: roseSoap1.height,
        alt: 'Handmade Rose Soap for Hydrating',
      },
      images: [
        {
          src: roseSoap1.src,
          width: roseSoap1.width,
          height: roseSoap1.height,
          alt: 'Handmade Rose Soap for Hydrating',
        },
        {
          src: roseSoap2.src,
          width: roseSoap2.width,
          height: roseSoap2.height,
          alt: 'Handmade Rose Soap for Hydrating',
        },
        {
          src: roseSoap3.src,
          width: roseSoap3.width,
          height: roseSoap3.height,
          alt: 'Handmade Rose Soap for Hydrating',
        },
        {
          src: roseSoap4.src,
          width: roseSoap4.width,
          height: roseSoap4.height,
          alt: 'Handmade Rose Soap for Hydrating',
        },
      ],
      description: `Treat your skin to a moment of care with our handmade Rose Soap, enriched with rose oil and rose essential oil, known for their hydrating, soothing, and regenerating properties.`,
      material: ['Shea butter', 'Rose oil', 'Rose essential oil'],
      details: `# Rose Soap – Softness & Radiance for Your Skin

Treat your skin to a moment of care with our handmade Rose Soap, enriched with rose oil and rose essential oil, known for their hydrating, soothing, and regenerating properties.

This gentle soap helps maintain the skin’s natural moisture while leaving it soft, smooth, and delicately scented. Its light floral aroma provides a relaxing and refreshing skincare experience.

Perfect for daily use on both face and body, it is especially suitable for those looking for a natural and gentle skincare routine.

## Benefits

- Helps hydrate and soften the skin
- Soothes sensitive and delicate skin
- Supports a youthful-looking appearance
- Enhances skin radiance and freshness
- Leaves a soft, natural floral scent

## Key Ingredients

- Shea butter – moisturizes and nourishes the skin
- Rose oil – known for hydrating and softening properties
- Rose essential oil – provides a delicate scent and soothing effect

## Handmade Quality

Each soap bar is handmade in small batches, making every piece unique. Slight variations in color or shape are part of the natural artisanal process.

Please ask if you have any questions about my soap.

**Soap weight:** 1.8oz`,
      reviewNumber: 2,
      rating: 5,
      status: 'New in',
      options: [
        {
          name: 'Color',
          optionValues: [
            {
              name: 'Light Rose',
              swatch: {
                color: '#fac3d2',
                image: null,
              },
            },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            {
              swatch: null,
              name: '50 g',
            },
          ],
        },
      ],
      selectedOptions: [
        {
          name: 'Color',
          value: 'Light Rose',
        },
        {
          name: 'Size',
          value: '50 g',
        },
      ],
      collections: [
        {
          id: 'col-id-fix-1',
          name: 'Handmade soap',
          primary: true,
          slug: 'handmade-soap',
        },
        {
          id: 'col-id-fix-2',
          name: 'Artisanal soap',
        },
      ],
    },
    {
      id: 'gid://1009',
      title: 'Organic Lavender handmade Soap',
      handle: 'lavender-soap',
      createdAt: '2025-05-08T11:15:00-04:00',
      vendor: 'Blissdor',
      price: 25,
      featuredImage: {
        src: lavenderSoap1.src,
        width: lavenderSoap1.width,
        height: lavenderSoap1.height,
        alt: 'Organic Lavender handmade Soap',
      },
      images: [
        {
          src: lavenderSoap2.src,
          width: lavenderSoap2.width,
          height: lavenderSoap2.height,
          alt: 'Organic Lavender handmade Soap',
        },
      ],
      description: `Enjoy a moment of calm and relaxation with our handmade Lavender Soap, enriched with natural lavender and nourishing ingredients. Lavender is well known for its soothing and relaxing properties, making this soap perfect for a peaceful skincare routine.`,
      material: ['Lavender essential oil', 'Dried lavender flowers', 'Shea butter'],
      details: `# Lavender Soap – Gentle Care & Relaxation

Enjoy a moment of calm and relaxation with our handmade Lavender Soap, enriched with natural lavender and nourishing ingredients. Lavender is well known for its soothing and relaxing properties, making this soap perfect for a peaceful skincare routine.

The delicate natural fragrance of lavender creates a feeling of calm and well-being with every use, while the nourishing ingredients help leave the skin soft, fresh, and comfortable.

This gentle soap is suitable for daily use on the face and body, making it a wonderful addition to your natural skincare routine.

## Benefits

- Helps soothe the skin and minor irritations
- May help calm blemishes and small breakouts
- Relaxing and stress-relieving lavender aroma
- Leaves the skin soft and refreshed
- Suitable for face and body

## Handmade Quality

Each soap bar is handmade in small batches, making every piece unique. Slight variations in color or shape are part of the natural artisanal process.

Please ask if you have any questions about my soap.

**Soap weight:** 1.8oz.`,
      reviewNumber: 2,
      rating: 5,
      status: 'New in',
      options: [
        {
          name: 'Color',
          optionValues: [
            {
              name: 'Light Rose',
              swatch: {
                color: '#fac3d2',
                image: null,
              },
            },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            {
              swatch: null,
              name: '50 g',
            },
          ],
        },
      ],
      selectedOptions: [
        {
          name: 'Color',
          value: 'Light Rose',
        },
        {
          name: 'Size',
          value: '50 g',
        },
      ],
      collections: [
        {
          id: 'col-id-fix-1',
          name: 'Handmade soap',
          primary: true,
          slug: 'handmade-soap',
        },
        {
          id: 'col-id-fix-2',
          name: 'Artisanal soap',
        },
      ],
    },
    {
      id: 'gid://1005',
      title: 'Black Seed Soap – Handmade and Natural with Nigella oil',
      handle: 'linen-blazer',
      createdAt: '2025-05-10T08:45:00-04:00',
      vendor: 'TailoredFit',
      price: 25,
      featuredImage: {
        src: nigellaSoap1.src,
        width: nigellaSoap1.width,
        height: nigellaSoap1.height,
        alt: 'Black Seed Soap – Handmade and Natural with Nigella oil',
      },
      images: [
        {
          src: nigellaSoap2.src,
          width: nigellaSoap2.width,
          height: nigellaSoap2.height,
          alt: 'Black Seed Soap – Handmade and Natural with Nigella oil',
        },
        {
          src: nigellaSoap3.src,
          width: nigellaSoap3.width,
          height: nigellaSoap3.height,
          alt: 'Black Seed Soap – Handmade and Natural with Nigella oil',
        },
        {
          src: nigellaSoap4.src,
          width: nigellaSoap4.width,
          height: nigellaSoap4.height,
          alt: 'Black Seed Soap – Handmade and Natural with Nigella oil',
        },
      ],
      description: `Discover the benefits of nature with our handmade Nigella Soap, enriched with black seed oil (Nigella oil), a powerful natural ingredient known for its purifying, soothing, and nourishing properties.`,
      material: ['Negella oil', 'Negella seeds', 'Shea butter'],
      details: `# Nigella Soap – Purifying & Nourishing Skincare

Discover the benefits of nature with our handmade Nigella Soap, enriched with black seed oil (Nigella oil), a powerful natural ingredient known for its purifying, soothing, and nourishing properties.

This soap is ideal for those looking for a natural solution for acne-prone or sensitive skin. It helps cleanse the skin, regulate excess oil, and promote a clearer, healthier complexion.

Gentle yet effective, it can be used daily on both the face and body, leaving your skin feeling clean, soft, and balanced.

## Benefits

- Helps fight acne and skin imperfections
- Purifies the skin and controls excess oil
- Soothes irritation and redness
- Nourishes and helps repair the skin
- Supports a smoother, more youthful appearance

## Handmade Quality

Each soap bar is handmade in small batches, making every piece unique. Slight variations in color or shape are part of the natural artisanal process.

Please ask if you have any questions about my soap.

**Soap weight:** 1.8oz`,
      reviewNumber: 60,
      rating: 4.4,
      status: 'New in',
      collections: [
        {
          id: 'col-id-fix-1',
          name: 'Handmade soap',
          primary: true,
          slug: 'handmade-soap',
        },
        {
          id: 'col-id-fix-2',
          name: 'Artisanal soap',
        },
      ],
      options: [
        {
          name: 'Color',
          optionValues: [
            {
              name: 'Beige',
              swatch: {
                color: '#F5F5DC',
                image: null,
              },
            },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            {
              swatch: null,
              name: '70 g',
            },
          ],
        },
      ],
      selectedOptions: [
        {
          name: 'Color',
          value: 'Beige',
        },
        {
          name: 'Size',
          value: '70 g',
        },
      ],
    },
  ]
}

export async function getProductByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()

  const products = await getProducts()
  let product = products.find((product) => product.handle === handle)

  if (!product) {
    // throw new Error(`Product with handle "${handle}" not found.`)

    // for demo purposes, we are using a static product detail
    product = products[0] // fallback to the first product
  }

  return product
}

// get product by handle
export async function getProductDetailByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()

  // for demo purposes, we are using a static product detail
  const product = await getProductByHandle(handle)

  // if ( !product?.id ) {
  //   throw new Error(`Product with handle "${handle}" not found.`)
  // }

  return {
    ...product,
    status: 'In Stock',
    breadcrumbs: [
      { id: 1, name: 'Home', href: '/' },
      { id: 2, name: product.collections[0].name, href: `/collections/${product.collections[0].slug}` },
    ],
    publishedAt: '2026-05-27T17:43:25Z',
    selectedOptions: [
      {
        name: 'Color',
        value: product?.selectedOptions.find((option) => option.name === 'Color')?.value,
      },
      {
        name: 'Size',
        value: product?.selectedOptions.find((option) => option.name === 'Size')?.value,
      },
    ],
    features: [
      'Material: 43% Sorona Yarn + 57% Stretch Polyester',
      'Casual pants waist with elastic elastic inside',
      'The pants are a bit tight so you always feel comfortable',
      'Excool technology application 4-way stretch',
    ],
    careInstruction:
      'This gentle soap is suitable for daily use on the face and body, making it a wonderful addition to your natural skincare routine.',
    shippingAndReturn: 'We offer free shipping on all orders over 500 MAD.',
  }
}

// COMMON Types ------------------------------------------------------------------------
export type TCollection = Partial<Awaited<ReturnType<typeof getCollections>>[number]>
export type TProductItem = Partial<Awaited<ReturnType<typeof getProducts>>[number]>
export type TProductDetail = Partial<Awaited<ReturnType<typeof getProductDetailByHandle>>>
export type TCardProduct = Partial<Awaited<ReturnType<typeof getCart>['lines'][number]>>
export type TBlogPost = Partial<Awaited<ReturnType<typeof getBlogPosts>>[number]>
export type TReview = Partial<Awaited<ReturnType<typeof getProductReviews>>[number]>
export type TOrder = Partial<Awaited<ReturnType<typeof getOrders>>[number]>
