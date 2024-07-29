import { LoginPayload } from "../pages/LoginPage";

class UserService {
  login(body: LoginPayload): Promise<{ token: string }> {
    return new Promise((resolve, reject) => {
      const { username, password } = body;
      if (username === "abc" && password === "123") {
        setTimeout(() => {
          resolve({
            token: "abc",
          });
        });
      } else {
        setTimeout(() => {
          reject({
            message: "incorrect",
          });
        });
      }
    });
  }
}

export default new UserService();
