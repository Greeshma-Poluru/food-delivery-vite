console.log('hook.ts loaded')
export interface Item {
  id: number;
  name: string;
  price: string;
  image?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
