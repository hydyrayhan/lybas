import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  en:{
    translation:{
      home:"Home",
      dresses:'Dresses',
      dressmakers:'Dressmakers',
      blog:'Blog',
      deliveryAndPaymentOptions:'Delivery and Payment Options',
      termsOfUse:'Terms of Use (separate for dressmakers)',
      aboutUs:'About Us',
      termAndConditions:'Terms & Conditions',
      contactUs:'Contact Us',
      subcribeNewsLetter:'Subscribe Newsletter',
      enterEmail:"Enter your email",
      recommendedDress:"Recommended Dresses",
      viewAll:"View all",
      goto:"Go to",
      shop:"shop",
      s:"'s",
      tmt:'TMT',
      add:"Add",
      mostPopularDresses:"Most Popular",
      more:"More",
      allCategories:"All categories",
      price:'Price',
      rating:'Rating',
      inStock:"In Stock",
      ashgabat:"Ashgabat",
      _2_5days:"Beýleki welaýatlara 2-5 gün",
      fabricName:"Fabric name",
      size:'Size',
      color:"Color",
      comments:"Comments",
      similarDresses:"Similar dresses",
      addToCard:"Add to card",
      numbers:"Numbers",
      total:"Total",
      order:"Order it",
      checkout:"Checkout now",
      seller:"Seller",
      remindMe:"Remind me when in stock",
      remindMeWhenInStock:'Remind me when in stock',
      remindMeText:'You will be notified when the item arrives. Sorry for out of stock',
      remindMePlaceholder:"Your email or phone number*",
      send:'Send',
      myCart:'My cart',
      remove:'Remove', 
      totalPrice:"Total Price",
      checkout:"Checkout now",
      or:'or',
      continueShopping:'Continue Shopping',
      yourOrder:"Your order",
      discount:"Discount",
      payment:"Payment",
      cash:"Cash",
      terminal:"Terminal",
      myAccount:"My account",
      profile:"Profile",
      myAddresses:"My addresses",
      orders:"Orders",
      logout:"Logout",
      edit:"Edit",
      cancel:"Cancel",
      save:"Save",
      addressName:"Address name",
      name:"Your name",
      phoneNumber:"Phone number",
      address:"Address",
      addNewAddress:"Add new address",
      doYouWantToLogout:"Do you really want to logout?",
      ok:"Ok",
      buyAgain:"Buy again",
      user:"User",
      whoWillUseWebsiteAs:"Who will you use the website as?",
      customer:"Customer",
      dressmaker:"Dressmaker",
      hello:"Hello",
      welcomeDashboard:"Welcome back to dashboard",
      users:'Users',
      comments:"Comments",      
      onSale:"On sale",
    }
  },
  ru:{
    translation:{
      home:"Домашняя",
      dresses:'Платья',
      dressmakers:'Портнихи',
      blog:'Блог',
      deliveryAndPaymentOptions: 'Опции доставки и оплаты',
      termsOfUse: 'Условия использования (отдельно для портных)',
      aboutUs: 'О нас',
      termAndConditions: 'Условия и положения',
      contactUs:'Связаться с нами',
      subcribeNewsLetter:'Подписаться на рассылку',
      enterEmail:"Введите адрес электронной почты",
      recommendedDress:"Recommended Dresses ru",
      viewAll:"View all ru",
      goto:"Go to ru",
      shop:"shop ru",
      s:"'s ru",
      tmt:'TMT',
    }
  },
  tm:{
    translation:{
      home:"Baş sahypa",
      dresses:'Köýnekler',
      dressmakers:'Satyjylar',
      blog:'Blog',
      deliveryAndPaymentOptions:'Eltip bermek we Töleg görnüşleri',
      termsOfUse:'Ulanylyş düzgünleri (Satyjylar üçin aýratyn)',
      aboutUs:'Biz barada',
      termAndConditions:'Hukuklar & Şertler',
      contactUs:'Biz bilen habarlaşmak',
      subcribeNewsLetter:'Täzeliklere ýazylyň',
      enterEmail:"Email giriziň",
      recommendedDress:"Teklip edilýän köýnekler",
      viewAll:"Hemmesini görmek",
      goto:"Görmek",
      shop:"dükanyny",
      s:"-yň",
      tmt:"TMT",
    }
  }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('lang'), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;