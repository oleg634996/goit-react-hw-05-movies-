import { Link } from 'react-router-dom';

function NotPage() {
  return (
    <>
      <h1>404 страница</h1>
      <Link to={'/'}> перейдите на главную страницу сайта</Link>
    </>
  );
}

export default NotPage;
