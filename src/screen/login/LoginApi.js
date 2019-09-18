import ApiBaseURL from '../../ApiBaseURL.js'

const LoginApi = {
  postLoginApiApi: (user) => ApiBaseURL.post("users/auth", user),
}

export default LoginApi
