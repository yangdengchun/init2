import axios from 'axios';
import store from '../store'
import QS from "qs";

axios.defaults.timeout = 5000;  //超市时间是5秒
axios.defaults.withCredentials = true;  //允许跨域
//Content-Type 响应头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

//基础url
axios.defaults.baseURL = "http://localhost:9999";
// 定义token
// axios.defaults.headers.common['Authorization-Token'] = store.state.config.token;

// //请求拦截器
// axios.interceptors.request.use(
//     config => {
//         if (store.state.config.token) {
//             config.headers.common['Authorization-Token'] = store.state.config.token
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )

//响应拦截器
axios.interceptors.response.use(
    response => {
        //如果reponse里面的status是200，说明访问到接口了，否则错误
        // if(response.status == 200){
        //     return Promise.resolve(response);
        // }else{
        //     return Promise.reject(response);
        // }
        return response;
    },
    error => {
        // if(error.response.code) {
        //     switch (error.response.code) {
        //         case 401:       //未登录
        //             this.$store.commit('del_token');
        //             router.replace({
        //                 path: '/login',
        //                 query: {
        //                     redirect: router.currentRoute.fullPath//登录成功后跳入浏览的当前页面
        //                 }
        //             });
        //             break;
        //         case 404:   //没找到
        //             break;
        //     }
        // }
        return Promise.reject(error)
    }
);

/**
 * 封装get方法
 */
export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{params:params})
            .then(response =>{
                resolve(response.data);
            })
            .catch(err =>{
                reject(err);
            })
    });
}

// /**
//  * 封装post方法
//  */
// export function post(url,params){
//     return new Promise((resolve,reject) => {
//         axios.post(url,Qs.stringify(params))
//             .then(response =>{
//                 resolve(response.data);
//             })
//             .catch(err =>{
//                 reject(err);
//             })
//     });
// }
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Boolean} json [true：json格式请求头；false：FormData格式请求头]
 */
export function post(url, params = {}, json = false) {
    // json格式请求头
    const headerJSON = {
        "Content-Type": "application/json"
    };
    // FormData格式请求头
    const headerFormData = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    };
    return new Promise((resolve, reject) => {
        axios
            .post(url, json ? JSON.stringify(params) : QS.stringify(params), {
                headers: json ? headerJSON : headerFormData
            })
            .then(res => {
                console.log(res.data)
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            });
    });
}


/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function Put(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, {params:params})
            .then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err.data)
            })
    })
}
/**
 * delete方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function Delete(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {params:params})
            .then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err.data)
            })
    })
}
