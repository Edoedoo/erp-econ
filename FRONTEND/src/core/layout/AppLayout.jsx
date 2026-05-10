import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../component/header/Header";

import { fetchUomFromDatabase } from "../../core/repository/uomRepository";
import { fetchUomCategoriesFromDatabase } from "../repository/categoryUomRepository";

import { UoMUnionEngine } from "../../config/uomUnionEngine";
import { UoMCategoryUnionEngine } from "../../config/categoryUomUnionEngine";

import { setGlobalUom } from "../../core/shared/uomStore";
import { setGlobalUomCategories } from "../../core/shared/uomCategoryStore";

import "./layout.css";
import Loading from "../../component/loading/loading";

function AppLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initSystem = async () => {
      const dbUom =
        await fetchUomFromDatabase();

      const dbCategories =
        await fetchUomCategoriesFromDatabase();

      const uomEngine =
        new UoMUnionEngine(dbUom);

      const mergedUom =
        uomEngine.getAllUom();

      setGlobalUom(mergedUom);

      const categoryEngine =
        new UoMCategoryUnionEngine(
          dbCategories
        );

      const mergedCategories =
        categoryEngine.getAllCategories();

      setGlobalUomCategories(
        mergedCategories
      );

      setReady(true);
    };

    initSystem();
  }, []);

  if (!ready) {
    return <div 
      style={{
        display: "flex", 
        height: "100%", 
        justifyContent: "center"
      }} >
        <Loading message={"please wait"}/>
    </div>;
  }

  return (
    <div id="appLayout">
      <header id="header">
        <Header />
      </header>

      <main id="main">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;