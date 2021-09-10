import { VISIBLE } from './app.types';

export const setSidebarVisible = (visible) => {
	return {
		type: VISIBLE,
		visible
	};
};