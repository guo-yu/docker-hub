module.exports = {
  auth: {
    method: 'put',
    url: '/v1/repositories/{{namespace}}/{{repository}}/auth'
  },
  login: {
    method: 'get',
    url: '/v1/users'
  },
  registerUser: {
    method: 'post',
    url: '/v1/users'
  },
  updateUser: {
    method: 'put',
    url: '/v1/users/{{username}}/'
  },
  search: {
    method: 'get',
    url: '/v1/search'
  },
  createRepo: {
    method: 'put',
    url: '/v1/repositories/{{namespace}}/{{repository}}/'
  },
  deleteRepo: {
    method: 'delete',
    url: '/v1/repositories/{{namespace}}/{{repository}}/'
  },
  createLibraryRepo: {
    method: 'put',
    url: '/v1/repositories/{{repository}}/'
  },
  deleteLibraryRepo: {
    method: 'delete',
    url: '/v1/repositories/{{repository}}/'
  },
  updateImages: {
    method: 'put',
    url: '/v1/repositories/{{namespace}}/{{repository}}/images'
  },
  getImages: {
    method: 'get',
    url: '/v1/repositories/{{namespace}}/{{repository}}/images'
  }
};
