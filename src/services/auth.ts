interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'fsfsafnifsnaifuibaeububakshfueb',
        user: {
          name: 'João',
          email: 'joao@gmail.com',
        },
      });
    }, 1000);
  });
}