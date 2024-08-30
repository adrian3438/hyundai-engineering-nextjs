import BarChart from 'icons/solid/BarChart';
import CloudNetwork2 from 'icons/solid/CloudNetwork2';
import Controls from 'icons/solid/Controls';
import Lock from 'icons/solid/Lock';
import Rocket from 'icons/solid/Rocket';
import Safe from 'icons/solid/Safe';
import TouchScreen from 'icons/solid/TouchScreen';
import Checked from 'icons/solid/Checked';
import Calendar from 'icons/solid/Calendar';
import Compare from 'icons/solid/Compare';
import Currency from 'icons/solid/Currency';
import Devices from 'icons/solid/Devices';
import Search from 'icons/solid/Search';
import Server from 'icons/solid/Server';

import color from 'utils/color';

export const features = [
  { id: 1, color: color.yellow, Icon: CloudNetwork2, title: 'Always up to Date' },
  { id: 2, color: color.green, Icon: TouchScreen, title: 'Easy Usage' },
  { id: 3, color: color.purple, Icon: Lock, title: 'Secure Payments' },
  { id: 4, color: color.pink, Icon: Rocket, title: 'Fast Transactions' },
  { id: 5, color: color.violet, Icon: BarChart, title: 'Reports & Forecasting' },
  { id: 6, color: color.orange, Icon: Safe, title: 'Online Banking' },
  { id: 7, color: color.blue, Icon: Controls, title: 'Configurable Fields' },
  { id: 8, color: color.leaf, Icon: Checked, title: 'List of Transactions' }
];

export const abouts = [
  {
    id: 1,
    Icon: Calendar,
    color: color.grape,
    title: 'Scheduled Transactions',
    description: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna.`
  },
  {
    id: 2,
    Icon: Currency,
    color: color.green,
    title: 'Multiple Currencies',
    description: `Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.`
  },
  {
    id: 3,
    Icon: Server,
    color: color.pink,
    title: 'Database Management',
    description: `Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes.`
  },
  {
    id: 4,
    Icon: Devices,
    color: color.yellow,
    title: 'Sync Between Devices',
    description: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna.`
  },
  {
    id: 5,
    Icon: Search,
    color: color.blue,
    title: 'Smart Search',
    description: `Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.`
  },
  {
    id: 6,
    Icon: Compare,
    color: color.leaf,
    title: 'Detailed Reports',
    description: `Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes.`
  }
];

export const testimonials = [
  {
    id: 1,
    color: color.grape,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`
  },
  {
    id: 2,
    color: color.green,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.`
  },
  {
    id: 3,
    color: color.orange,
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.`
  },
  {
    id: 4,
    color: color.pink,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum ac laoreet vitae.`
  },
  {
    id: 5,
    color: color.yellow,
    name: 'Laura Widerski',
    designation: 'Sales Specialist',
    review: `Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
  },
  {
    id: 6,
    color: color.blue,
    name: 'Jackie Sanders',
    designation: 'Investment Planner',
    review: `Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero a pharetra.`
  }
];
