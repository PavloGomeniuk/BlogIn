import  axios  from './core.js';

export default {
 	get: id => axios.get(`/posts${id ? '/' + id : ''}`),
  	remove: id => axios.delete(`/posts/${id}`),
};
