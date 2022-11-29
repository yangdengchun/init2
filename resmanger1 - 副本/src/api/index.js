import {get,post,Put,Delete} from "@/api/http";

const isjson = true;
//=========登录===========
export const LoginIn = (params) => post('/user/login',params,false);
export const AdminLoginIn = (params) => post('/admin/login',params,false);
//=========注册===========
export const RegistIn = (params) => post('/user/regist',params,false);



//=========分类===========
export const indexx = () => get('/index',null);
export const FourCategory = () => get('/category/getcategoryforarticleallforfour',null);
export const getArticleForCategory = (id) => get(`/category/getArticleForCategory/${id}`,null);
export const addCategory = (params) => post('/category/savecategory',params,isjson);
export const delCategory = (id) => Delete (`/category/diletecategory/${id}`,null);
export const updateCategory = (id,name,description) => Put(`/category/updatecategory/${id}/${name}/${description}`,null);
