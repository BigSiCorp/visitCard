import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { BlogPage } from 'pages/BlogPage/BlogPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { FAQPage } from 'pages/FAQPage/FAQPage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/questions" element={<FAQPage />} />
        </Route>
      </Routes>
    </>
  );
};
