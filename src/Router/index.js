import { HomeOutlined, DashboardOutlined, SettingOutlined, DollarOutlined, InfoCircleOutlined, QuestionCircleOutlined  } from '@ant-design/icons';
import Home from '../Pages/Home';

const router = [
	{
		title: 'Home',
		icon: HomeOutlined,
		path: '/',
    exact: true,
		component: Home
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
				component: Home
			},
			{
				title: 'Analytics',
				path: '/search-analytics',
				exact: true,
				component: Home
			},
			{
				title: 'Conversions',
				path: '/conversions',
				exact: true,
				component: Home
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
				component: Home
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
				component: Home
			}
		]
	},
	{
		title: 'Pricing',
		icon: DollarOutlined,
		path: '/pricing',
    exact: true,
		component: Home
	},
	{
		title: 'Help',
		icon: InfoCircleOutlined,
		path: '/help',
    exact: true,
		component: Home
	},
	{
		title: 'Feature request',
		icon: QuestionCircleOutlined,
		path: '/feature-request',
    exact: true,
		component: Home
	}
];

export default router;