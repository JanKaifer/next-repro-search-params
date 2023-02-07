import { IsAppDirContext } from "../utils/isAppDir";

export default function MyApp({ Component, pageProps }) {
  return (
    <IsAppDirContext.Provider value={false}>
      <Component {...pageProps} />
    </IsAppDirContext.Provider>
  );
}
