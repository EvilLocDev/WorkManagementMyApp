// src/api/request.js

import { API_URL } from './config';

/**
 * Gửi request đến API
 * @param {string} endpoint - Ví dụ: '/auth/user-info/'
 * @param {string} method - GET | POST | PUT | PATCH | DELETE
 * @param {string|null} token - JWT token nếu cần
 * @param {object|null} body - Dữ liệu gửi đi (JSON)
 * @returns {Promise<any>} - Kết quả trả về từ API
 */
export const apiRequest = async (endpoint, method = 'GET', token = null, body = null) => {
  let headers = {};
  let fetchBody = null;

  if (body instanceof FormData) {
    // Không set Content-Type, để fetch tự động set boundary cho multipart/form-data
    fetchBody = body;
  } else {
    headers['Content-Type'] = 'application/json';
    fetchBody = body ? JSON.stringify(body) : null;
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: fetchBody,
  });

  // Check for 204 No Content status
  if (res.status === 204) {
    return null; // No content to parse, return null or true
  }

  const data = await res.json();
  if (!res.ok) {
    const message = data.detail || data.message || 'Có lỗi xảy ra';
    throw new Error(message);
  }

  return data;
};
