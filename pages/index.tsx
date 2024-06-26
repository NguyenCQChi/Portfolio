import { ReactElement } from 'react';
import Home from '@containers/Home';
import HomeLayout from '@layouts/HomeLayout';

const Index = () => {
  return (
    <Home />
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}

export default Index;
