import ApiBaseURL from '../../services/ApiBaseURL'

const LoginApi = {
  postLoginApi: (user) => ApiBaseURL.post("users/auth", user),
}

export default LoginApi
