import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../../components/layouts/home-layout';
import SearchItem from './components/search-item';

const HomeSearch: React.FC = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<SearchItem />} />
        <Route path="/item/:itemName" element={<SearchItem />} />
      </Route>
    </Routes>
  );
};

export default HomeSearch;
