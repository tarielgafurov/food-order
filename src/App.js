import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Basket from './components/basket/Basket';
import Header from './components/layout/Header';
import { BasketProvider } from './components/store/BasketContext';
import SummaryItems from './components/summary/SummaryItems';
import SummaryTitle from './components/summary/SummaryTitle';

function App() {


  const foods = useMemo(() => {
    return [
      {
        id: "1",
        name: "Куурдак",
        description: " кыргыз элинин эң сыйлуу тамактарынын бири.",
        price: "500",
      },
      {
        id: "2",
        name: "Бешбармак",
        description: "майда тууралган эттен жасалган кыргыздын эң сый тамагы.",
        price: "350",
      },
      {
        id: "3",
        name: "Чучук",
        description: "жылкынын эти, казы-карта, татымдар кошулуп жасалган азык.",
        price: "400",
      },
      {
        id: "4",
        name: "Быжы",
        description:
          "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
        price: "750",
      },
    ];
  }, [])

 

  const [isShowModal , setIsShowModal] = useState(false)

  const clickHandler = useCallback(() => {
    console.log("hellooooo");
  },[])


  const ShowModalHandler = () =>{
    setIsShowModal(prev => !prev)
  }


  return (
    <BasketProvider>
      <Header onShowModal={ShowModalHandler} />
      <SummaryTitle clickHandler={clickHandler} />
      <SummaryItems foods={foods} />
      {isShowModal && <Basket onShowModal={ShowModalHandler}/>}
    </BasketProvider>
  );
}

export default App;
