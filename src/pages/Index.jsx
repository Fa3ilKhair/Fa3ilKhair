import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Index() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
