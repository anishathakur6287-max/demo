const API_BASE_URL = '/api';

/**
 * Universal API request wrapper
 */
export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('university_token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong. Please try again.');
    }

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Auth API Endpoints
 */
export const authService = {
  register: (userData) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },

  login: (credentials) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },

  getMe: () => {
    return apiRequest('/auth/me', {
      method: 'GET'
    });
  },

  checkHealth: () => {
    return apiRequest('/health', {
      method: 'GET'
    });
  }
};
