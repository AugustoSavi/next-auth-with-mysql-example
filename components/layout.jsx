import Header from './Header';
// import Footer from './Footer';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}

// Layout.propTypes = {
//   children: PropTypes.element.isRequired,
// };
