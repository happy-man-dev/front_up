/**
 * 获取当前环境
 */
export function getEnv(): string {
  return import.meta.env.VITE_APP_ENV || 'development'
}

/**
 * 获取 API 基础地址
 */
export function getApiBaseUrl(): string {
  return import.meta.env.VITE_API_BASE_URL || ''
}

/**
 * 判断是否为开发环境
 */
export function isDev(): boolean {
  return getEnv() === 'development'
}

/**
 * 判断是否为测试环境
 */
export function isSit(): boolean {
  return getEnv() === 'sit'
}

/**
 * 判断是否为生产环境
 */
export function isProd(): boolean {
  return getEnv() === 'production'
}
