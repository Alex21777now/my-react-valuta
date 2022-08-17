import React from "react";

/*const data11 = props.data1.map((dat1) => ({dat1}));*/
const Form = props => (
  <div>

    <form onSubmit={props.kursMethod2}>

           <label>Введите название валюты:
             <select name="valuta">
               <option value="AUD">Австралійський долар</option>
               <option value="CAD">Канадський долар</option>
               <option value="CNY">Юань Женьміньбі</option>
               <option value="HRK">Куна</option>
               <option value="CZK">Чеська крона</option>
               <option value="DKK">Данська крона</option>
               <option value="HKD">Гонконгівський долар</option>
               <option value="HUF">Форинт</option>
               <option value="INR">Індійська рупія</option>
               <option value="IDR">Рупія</option>
               <option value="ILS">Новий ізраїльський шекель</option>
               <option value="JPY">Єна</option>
               <option value="KZT">Теньге</option>
               <option value="KRW">Вона</option>
               <option value="MXN">Мексиканське песо</option>
               <option value="MDL">Молдовський лей</option>
               <option value="NZD">Новозеландський долар</option>
               <option value="NOK">Норвезька крона</option>
               <option value="RUB">Російський рубль</option>
               <option value="SAR">Саудівський ріял</option>
               <option value="SGD">Сінгапурський долар</option>
               <option value="ZAR">Ренд</option>
               <option value="SEK">Шведська крона</option>
               <option value="CHF">Швейцарський франк</option>
               <option value="EGP">Єгипетський фунт</option>
               <option value="GBP">Фунт стерлінгів</option>
               <option value="USD">Долар США</option>
               <option value="BYN">Білоруський рубль</option>
               <option value="RON">Румунський лей</option>
               <option value="TRY">Турецька ліра</option>
               <option value="XDR">СПЗ (спеціальні права запозичення)</option>
               <option value="BGN">Болгарський лев</option>
               <option value="EUR">Євро</option>
               <option value="PLN">Злотий</option>
               <option value="DZD">Алжирський динар</option>
               <option value="BDT">Така</option>
               <option value="AMD">Вірменський драм</option>
               <option value="IRR">Іранський ріал</option>
               <option value="IQD">Іракський динар</option>
               <option value="KGS">Сом</option>
               <option value="LBP">Ліванський фунт</option>
               <option value="LYD">Лівійський динар</option>
               <option value="MYR">Малайзійський ринггіт</option>
               <option value="MAD">Марокканський дирхам</option>
               <option value="PKR">Пакистанська рупія</option>
               <option value="VND">Донг</option>
               <option value="THB">Бат</option>
               <option value="AED">Дирхам ОАЕ</option>
               <option value="TND">Туніський динар</option>
               <option value="UZS">Узбецький сум</option>
               <option value="TMT">Туркменський новий манат</option>
               <option value="RSD">Сербський динар</option>
               <option value="AZN">Азербайджанський манат</option>
               <option value="TJS">Сомоні</option>
               <option value="GEL">Ларі</option>
               <option value="BRL">Бразильський реал</option>
               <option value="XAU">Золото</option>
               <option value="XAG">Срібло</option>
               <option value="XPT">Платина</option>
               <option value="XPD">Паладій</option>
             </select>
           </label>
           {/*<input type="text" name="valuta" placeholder="Валюта напр. EUR"/>*/}
           <label>Введите дату слитно (YYYYMMDD):</label>
           <input type="number" name="date" placeholder="Дата напр. 20161215"/>
           <button>Получить курс</button>
    </form>
    <button onClick={props.kursMethod1}>Вывести текущий курс всех валют</button>
    </div>
);
export default Form;
