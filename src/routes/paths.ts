
function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
 const ROOTS_BOOK = '/dashboard'

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  forgetPassword: path(ROOTS_AUTH, '/forget-password')
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  navigator: {
    search: path(ROOTS_DASHBOARD, '/search'),
    profile: path(ROOTS_DASHBOARD, '/profile'),
    home: path(ROOTS_DASHBOARD, '/home')
  },
};
export const PATH_BOOKS = {
  root: ROOTS_BOOK,
  navigator: {
    search: path(ROOTS_BOOK, '/search'),
    profile: path(ROOTS_BOOK, '/profile'),
    home: path(ROOTS_BOOK, '/home'),
    details: (id?: number) =>
      path(ROOTS_BOOK, `/book/${id ?? ':id'}`),
  },
};

