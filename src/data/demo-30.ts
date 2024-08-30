import SeoTwo from 'icons/solid/SeoTwo';
import Server from 'icons/solid/Server';
import PenTool from 'icons/solid-duo/PenTool';
import ShoppingBusket from 'icons/solid/ShoppingBusket';
import color from 'utils/color';

export const services = [
  { id: 1, Icon: PenTool, title: 'Web Design' },
  { id: 2, Icon: SeoTwo, title: 'SEO Services' },
  { id: 3, Icon: ShoppingBusket, title: 'E-commerce' },
  { id: 4, Icon: Server, title: 'Web Hosting' }
];

export const processList = [
  {
    id: '01',
    color: color.grape,
    title: 'Collect Ideas',
    description: 'Nulla vitae elit libero pharetra augue dapibus.',
    className: 'card rounded-xl me-lg-6 bg-pale-grape'
  },
  {
    id: '02',
    color: color.fuchsia,
    title: 'Data Analysis',
    description: 'Cras mattis consectetur purus sit amet.',
    className: 'card rounded-xl ms-lg-13 mt-6 bg-pale-fuchsia'
  },
  {
    id: '03',
    color: color.fuchsia,
    title: 'Finalize Product',
    description: 'Cras mattis consectetur purus sit amet.',
    className: 'card rounded-xl mx-lg-6 mt-6 bg-pale-green'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Cum sociis natoque penatibus et magnis dis parturient montes.`,
    className: 'col-md-6 col-xl-5 align-self-end'
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta
    felis euismod.`,
    className: 'col-md-6 align-self-end'
  },
  {
    id: 3,
    name: 'Barclay Widerski',
    designation: 'Sales Specialist',
    review: `Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.`,
    className: 'col-md-6 col-xl-5 offset-xl-1'
  },
  {
    id: 4,
    name: 'Jackie Sanders',
    designation: 'Investment Planner',
    review: `Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo pellentesque.`,
    className: 'col-md-6 align-self-start'
  }
];
