const redirect = (path) => ({
  redirect: {
    permanent: false,
    destination: path,
  },
});

export default redirect;
