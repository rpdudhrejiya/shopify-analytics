import { HomeOutlined, DashboardOutlined, SettingOutlined, DollarOutlined, InfoCircleOutlined, QuestionCircleOutlined  } from '@ant-design/icons';
import Home from '../Pages/Home';

export default [
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
		children: [
			{
				title: 'Dashboard',
				path: '/statistics/dashboard',
				exact: true,	
				component: Home
			},
			{
				title: 'Analytics',
				path: '/statistics/search-analytics',
				exact: true,
				component: Home
			},
			{
				title: 'Conversions',
				path: '/statistics/conversions',
				exact: true,
				component: Home
			}
		]
	},
	{
		title: 'Settings',
		icon: SettingOutlined,
		children: [
			{
				title: 'Instant Search',
				path: '/statistics/instant-search',
				exact: true,
				component: Home
			},
			{
				title: 'Synonyms',
				path: '/statistics/synonyms',
				exact: true,
				component: Home
			},
			{
				title: 'Result Page',
				path: '/statistics/result-page',
				exact: true,
				component: Home
			},
			{
				title: 'Advanced',
				path: '/statistics/advanced',
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
]