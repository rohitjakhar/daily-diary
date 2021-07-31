export interface DiaryType {
    _id: string;
    userid: string | null;
    title: string;
    name: string;
    createdAt: string;
    dairy: string;
  }
  
  export interface User {
    id: string;
    object: string;
    username: string;
    first_name: string;
    last_name: string;
    gender: string;
    birthday: string;
    private_metadata: any;
    created_at: number;
    updated_at: number;
    created_at_ms: number;
    updated_at_ms: number;
  }