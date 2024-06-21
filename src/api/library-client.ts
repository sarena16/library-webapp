import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { NavigateToLogin } from './NavigateToLogin';

export type ClientResponse<T> = {
  success: boolean;
  data: T;
  statusCode: number;
};

export class LibraryClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8080/api',
    });
  
    // Add token to request headers if available
    const token = localStorage.getItem('token');
    if (token) {
      this.client.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
  
    // Set up interceptors to handle authentication errors
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          console.error('Unauthorized or Forbidden. Redirecting to login...');
          
          NavigateToLogin(); 
        }
        return Promise.reject(error);
      }
    );
  }
  

  public async login(data: LoginDto): Promise<ClientResponse<LoginResponseDto | null>> {
    try {
      const response: AxiosResponse<LoginResponseDto> = await this.client.post('/auth/login', data);

      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        this.client.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }

      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;
      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 0,
      };
    }
  }

  public async getBooks(): Promise<ClientResponse<any | null>> {
    try {
      const response: AxiosResponse<any> = await this.client.get('/books');
      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;
      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 0,
      };
    }
  }
}
