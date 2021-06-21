import { LoginForm } from 'components';

export const Login = () => {
  const hanldeSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <LoginForm onSubmit={hanldeSubmit} />
    </>
  );
};
