import { createContext, ReactNode,useState } from 'react';

interface Props {
  children: ReactNode;
}

interface NavigationContextTypes {
  section: string,
  changeSection: (section: string) => void
}

const NavigationContext = createContext<NavigationContextTypes>({
  section: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeSection: (section: string) => {},
});

const { Provider } = NavigationContext;

const NavigationProvider = (props: Props) => {
  const { children } = props;
  const [section, setSection] = useState('');

  const changeSection = (section: string) => {
    console.log(section)
    setSection(section);
  }

  return (
    <Provider
      value={{
        section: section,
        changeSection: changeSection,
      }}
    >
      {children}
    </Provider>
  );
};

export { NavigationContext, NavigationProvider };
