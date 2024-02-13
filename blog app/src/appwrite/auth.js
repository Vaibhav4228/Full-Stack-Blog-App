import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

export class AuthService {
  client = new Client();
  account;
}

const authService = new AuthService();

export default AuthService;

