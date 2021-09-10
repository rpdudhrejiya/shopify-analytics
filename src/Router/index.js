import { HomeOutlined, DashboardOutlined, SettingOutlined, DollarOutlined, InfoCircleOutlined, QuestionCircleOutlined  } from '@ant-design/icons';
import {Home, Help} from '../Pages';

const router = [
	{
		title: 'Home',
		subtitle: 'Shop Search insights',
		icon: HomeOutlined,
		path: '/',
    exact: true,
		component: Home,
	},
	{
		title: 'Statistics',
		icon: DashboardOutlined,
		path: '/statistics',
		children: [
			{
				title: 'Dashboard',
				path: '/dashboard',
				exact: true,	
				component: Home,
				subtitle: 'Overview',
			},
			{
				title: 'Analytics',
				path: '/search-analytics',
				exact: true,
				component: Home,
				subtitle: 'Shop Search insights',
			},
			{
				title: 'Conversions',
				path: '/conversions',
				exact: true,
				component: Home,
			}
		]
	},
	{
		title: 'Settings',
		icon: SettingOutlined,
		path: '/settings',
		children: [
			{
				title: 'Instant Search',
				path: '/instant-search',
				exact: true,
				component: Home,
				subtitle: 'Search widget setting',
			},
			{
				title: 'Synonyms',
				path: '/synonyms',
				exact: true,
				component: Home
			},
			{
				title: 'Result Page',
				path: '/result-page',
				exact: true,
				component: Home
			},
			{
				title: 'Advanced',
				path: '/advanced',
				exact: true,
				component: Home,
				subtitle: 'Customizations',
			}
		]
	},
	{
		title: 'Pricing',
		icon: DollarOutlined,
		path: '/pricing',
    exact: true,
		component: Home,
		subtitle: 'Effordable pricing plans',
	},
	{
		title: 'Help',
		icon: InfoCircleOutlined,
		path: '/help',
    exact: true,
		component: Help,
		subtitle: 'Quick help',
	},
	{
		title: 'Feature request',
		icon: QuestionCircleOutlined,
		path: '/feature-request',
    exact: true,
		component: Home,
		subtitle: 'Request a feature',
	}
];

export default router;