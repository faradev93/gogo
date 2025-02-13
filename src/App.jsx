import "./App.css";
import "./settings-OF-tailwind.css";
import Flex from "./components/Flex";
import CardWrapper from "./components/CardWrapper";
import Form from "./components/Form";
import Table from "./components/Table";
import { Component, useEffect, useState } from "react";
import Shomarande from "./components/Shomartande";
import Shomaresh2 from "./components/Shomaresh2";
import Checkbox from "./components/Checkbox";
import Greeting from "./components/Greeting";
import Toggle from "./components/Toggle";
import Test from "./components/Test";
import Greeting2 from "./components/Greeting2";
import Newcounter from "./components/NewCounter";
import Checkbox2 from "./components/Checkbox2";
import Buttontest from "./components/Buttontest";
import Counter2222 from "./components/Counter2222";
import Showmatn from "./components/Showmatn";
import Updater from "./components/Updater";
import Fetch_Table from "./components/Fetch_table";
import Fetch from "./components/Fetch";
import Dataha from "./components/Dataha";
import Geek_for_geek from "./components/Geek_for_geek";
import Greet from "./components/Greet";
import Data_with_card from "./components/Data_with_card";
import "./public/styles.css";
import Tailwind_train from "./components/Tailwind_train";

// data's:
const cardData = [
  {
    id: 1,
    email: "Sincere@april.biz",
    name: "Leanne Graham",
    image: "https://robohash.org/1?set=set2&size=290x290",
  },
  {
    id: 2,
    email: "Shanna@melissa.tv",
    name: "Ervin Howell",
    image: "https://robohash.org/2?set=set2&size=290x290",
  },
  {
    id: 3,
    email: "Nathan@yesenia.net",
    name: "Clementine Bauch",
    image: "https://robohash.org/3?set=set2&size=290x290",
  },
  {
    id: 4,
    email: "Julianne.OConner@kory.org",
    name: "Patricia Lebsack",
    image: "https://robohash.org/4?set=set2&size=290x290",
  },
  {
    id: 5,
    email: "Lucio_Hettinger@annie.ca",
    name: "Chelsey Dietrich",
    image: "https://robohash.org/5?set=set2&size=290x290",
  },
  {
    id: 6,
    email: "Karley_Dach@jasper.info",
    name: "Mrs. Dennis Schulist",
    image: "https://robohash.org/6?set=set2&size=290x290",
  },
  {
    id: 7,
    email: "Telly.Hoeger@billy.biz",
    name: "Kurtis Weissnat",
    image: "https://robohash.org/7?set=set2&size=290x290",
  },
  {
    id: 8,
    email: "Sherwood@rosamond.me",
    name: "Nicholas Runolfsdottir V",
    image: "https://robohash.org/8?set=set2&size=290x290",
  },
  {
    id: 9,
    email: "Chaim_McDermott@dana.io",
    name: "Glenna Reichert",
    image: "https://robohash.org/9?set=set2&size=290x290",
  },
  {
    id: 10,
    email: "Rey.Padberg@karina.biz",
    name: "Clementina DuBuque",
    image: "https://robohash.org/10?set=set2&size=290x290",
  },
];

const formha = [
  { label: "متاهل هستم", id: 1, value: "Married" },
  { label: "خدمت رفته ام ", id: 2, value: "Military" },
  { label: "قوانین را می پذیرم", id: 3, value: "AgreeRules" },
];
const FakeDT = {
  name: "Jack DAniel",
  Age: "30",
  Lang: "EN",
  Skin: "white",
};

//

export default function App() {
  return (
    <div>
      <Flex>
        <Tailwind_train/>
        <Data_with_card />
        <Geek_for_geek />
        <Greet />
        <Newcounter />
        <Updater />
      </Flex>
    </div>
  );
}
