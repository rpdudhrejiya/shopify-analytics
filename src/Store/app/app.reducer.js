import { VISIBLE } from './app.types';

const INITIAL_STATE = {
	visible: false,
};

const reducer = (state = INITIAL_STATE, action) => {

	switch (action.type) {
		case VISIBLE:
			return {
				...state,
				visible: action.visible
			};
		default:
			return INITIAL_STATE
	}
};

export default reducer;