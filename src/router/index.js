import Vue from 'vue'
import Router from 'vue-router'

const allroutes = [{
  name: 'HomePage',
  path: '/',
  component: MobileHome
}];
const routearray = [];

const createroute = function(page, str){ //注意，为了复制方便，所有router自动转换为小写
  const pathname = '/' + str.toLocaleLowerCase();
  allroutes.push({
    name: str,
    path: pathname,
    component: page
  })
  routearray.push(str); //打印输出，供Header使用。
}

const createMobileRoute = function (page, str) { //注意，为了复制方便，所有router自动转换为小写
  const pathname = '/m/' + str.toLocaleLowerCase();
  allroutes.push({
    name: str,
    path: pathname,
    component: page
  })
  routearray.push(str); //打印输出，供Header使用。
}

const createrouteaddid = function(page, str, pathstr){ //自定义path，用于添加id
  const pathname = '/' + pathstr.toLocaleLowerCase();
  allroutes.push({
    name: str,
    path: pathname,
    component: page
  })
  routearray.push(str); //打印输出，供Header使用。
}

import HomePage from '@/components/HomePage'
createroute(HomePage, "HomePage");

import Prepare from '@/components/Prepare';
createroute(Prepare, "Prepare");

import Introduction from '@/components/Introduction';
createrouteaddid(Introduction, "Introduction", "Introduction/:cointype");

import Mining from '@/components/Mining';
createroute(Mining, "Mining");

import Mine from '@/components/Mine';
createrouteaddid(Mine, "Mine", "Mine");

import SelectCoin from '@/components/Mine/SelectCoin';
createrouteaddid(SelectCoin, "SelectCoin",  "SelectCoin/:type");

import MyCoin from '@/components/Mine/MyCoin';
createrouteaddid(MyCoin, "MyCoin",  "MyCoin/:cointype/:type/:value");

import SellCoin from '@/components/Mine/SellCoin';
createrouteaddid(SellCoin, "SellCoin",  "SellCoin/:coinnumber");

import ExchangeCoin from '@/components/Mine/ExchangeCoin';
createrouteaddid(ExchangeCoin, "ExchangeCoin",  "ExchangeCoin/:type");

import Transaction from '@/components/Transaction';
createroute(Transaction, "Transaction");

import SelectType from '@/components/Transaction/SelectType';
createrouteaddid(SelectType, "SelectType",  "SelectType/:type");

import TransactionList from '@/components/Transaction/TransactionList';
createrouteaddid(TransactionList, "TransactionList",  "TransactionList/:cointype/:type/:value");

import BuyCoin from '@/components/Transaction/BuyCoin';
createrouteaddid(BuyCoin, "BuyCoin",  "BuyCoin/:sellid");

import AllType from '@/components/Transaction/AllType';
createroute(AllType, "AllType");

import RankReward from '@/components/RankReward';
createroute(RankReward, "RankReward");

import CombineReward from '@/components/CombineReward';
createrouteaddid(CombineReward, "CombineReward", "CombineReward/:page");

import GloryReward from '@/components/GloryReward';
createrouteaddid(GloryReward, "GloryReward", "GloryReward/:page");

import Proof from '@/components/Proof';
createroute(Proof, "Proof");

import Refer from '@/components/Refer';
createroute(Refer, "Refer");

/********************移动端页面********************/
import MobileHome from '@/mobile/pages/Home';
createMobileRoute(MobileHome, "home");

import MobileIntroduction from '@/mobile/pages/Introduction';
createMobileRoute(MobileIntroduction, "Introduction/:cointype");

import MobileGloryReward from '@/mobile/pages/GloryReward';
createMobileRoute(MobileGloryReward, "GloryReward/:page");

import MobileRankReward from '@/mobile/pages/RankReward';
createMobileRoute(MobileRankReward, "RankReward");

import MobileCombineReward from '@/mobile/pages/CombineReward';
createMobileRoute(MobileCombineReward, "CombineReward/:page");

import MobileTransaction from '@/mobile/pages/Transaction';
createMobileRoute(MobileTransaction, "Transaction");

import MobileSelectType from '@/mobile/pages/Transaction/SelectType';
createMobileRoute(MobileSelectType, "SelectType/:type");

import MobileTransactionList from '@/mobile/pages/Transaction/TransactionList';
createMobileRoute(MobileTransactionList, "TransactionList/:cointype/:type/:value");

import MobileBuyCoin from '@/mobile/pages/Transaction/BuyCoin';
createMobileRoute(MobileBuyCoin,"BuyCoin/:sellid");

import MobileAllType from '@/mobile/pages/Transaction/AllType';
createMobileRoute(MobileAllType, "AllType");

import MobileProof from '@/mobile/pages/Proof';
createMobileRoute(MobileProof, "Proof");

import MobilePrepare from '@/mobile/pages/Prepare';
createMobileRoute(MobilePrepare, "Prepare");

import MobileP_Mining from '@/mobile/pages/Prepare/P_Mining';
createMobileRoute(MobileP_Mining, "Prepare/Mining");

import MobileP_Probability from '@/mobile/pages/Prepare/P_Probability';
createMobileRoute(MobileP_Probability, "Prepare/Probability");

import MobileP_Transaction from '@/mobile/pages/Prepare/P_Transaction';
createMobileRoute(MobileP_Transaction, "Prepare/Transaction");

import MobileMine from '@/mobile/pages/Mine';
createMobileRoute(MobileMine, "Mine");

import MobileExchangeCoin from '@/mobile/pages/Mine/ExchangeCoin';
createMobileRoute(MobileExchangeCoin, "ExchangeCoin/:type");

import MobileMyCoin from '@/mobile/pages/Mine/MyCoin';
createMobileRoute(MobileMyCoin, "MyCoin/:cointype/:type/:value");

import MobileSelectCoin from '@/mobile/pages/Mine/SelectCoin';
createMobileRoute(MobileSelectCoin, "SelectCoin/:type");

import MobileSellCoin from '@/mobile/pages/Mine/SellCoin';
createMobileRoute(MobileSellCoin, "SellCoin/:coinnumber");

import MobileMining from '@/mobile/pages/Mining';
createMobileRoute(MobileMining, "Mining");

import MobileRefer from '@/mobile/pages/Refer';
createMobileRoute(MobileRefer, "Refer");

Vue.use(Router)
console.log(routearray)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: allroutes,
  // routes:
  // [
  //   {
  //     name: 'HomePage',
  //     path: '/',
  //     component: HomePage
  //   },
  //   {
  //     name: 'Prepare',
  //     path: '/prepare',
  //     component: Prepare,
  //   },
  // ]
})
