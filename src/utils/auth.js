export const DEFAULT_LOGIN_CREDENTIALS = {
  email: 'seif@gmail.com',
  password: '123',
};

export const AUTH_STORAGE_KEY = 'aqary-auth-user';

export const DEFAULT_PROFILE_USER = {
  name: 'سيف العلي',
  email: 'seif@gmail.com',
  phone: '+966 055 234 7890',
  nationalId: '1076543210',
  city: 'دبي',
  role: 'مستخدم موثق',
  avatar: '/image/32.jpg',
};

export function getStoredUser() {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawValue = window.localStorage.getItem(AUTH_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsedUser = JSON.parse(rawValue);

    if (parsedUser?.avatar === '/image/27.jpg' || !parsedUser?.avatar) {
      return {
        ...parsedUser,
        avatar: DEFAULT_PROFILE_USER.avatar,
      };
    }

    return parsedUser;
  } catch (error) {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function storeUser(user = DEFAULT_PROFILE_USER) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function isAuthenticated() {
  return Boolean(getStoredUser());
}
