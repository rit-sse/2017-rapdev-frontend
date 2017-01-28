export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';

export function openDropdown() {
  return {
    type: OPEN_DROPDOWN,
  };
}

export function closeDropdown() {
  return {
    type: CLOSE_DROPDOWN,
  };
}

export function toggleDropdown() {
  return (dispatch, getState) => {
    const opened = getState().nav.userDropdown;
    if (opened) return dispatch(closeDropdown());
    return dispatch(openDropdown());
  };
}
