<template>
  <div>
    <div style="margin-left:10%;margin-right:10%;" v-if="page == 1">
      <div class="titletext">{{$t('gloryreward_miner_level')}}</div>
      <div class="button" style="margin-left:5px">{{$t('gloryreward_your_level')}} {{$t(minelevel)}}</div>
      <div class="button" style="margin-left:5px">{{$t('gloryreward_mining_times')}}{{minetimes}}</div>
      <div><br/></div>
      <div v-for="(miner,key) in miners" key="index">
        <div class="columns is-mobile" style="text-align: center;">
          <div class="column">
            <img :src="miner.logourl" class="img1" alt="" />
          </div>
          <div class="column">
            <div style="padding-top:25%;">
              {{$t(miner.name)}}
            </div>
          </div>
          <div class="column">
            <div style="padding-top:25%;">
              {{$t('gloryreward_mining_times_before')}}{{miner.value}}{{$t('gloryreward_mining_times_after')}}
            </div>
          </div>
          <!-- <div class="column is-mobile">
            <div style="padding-top:25%;">
              <a class="button" @click="">{{$t('gloryreward_mining_award_before')}}{{miner.reward}}{{$t('gloryreward_mining_award_after')}}</a>
            </div>
          </div> -->
        </div>
      </div><!-- for -->
    </div>
    <div style="margin-left:10%;margin-right:10%;" v-if="page == 2">
      <div class="titletext">{{$t('gloryreward_trade_level')}}</div>
      <div class="button" style="margin-left:5px">{{$t('gloryreward_your_trade_level')}} {{$t(buylevel)}}</div>
      <div class="button" style="margin-left:5px">{{$t('gloryreward_your_buy_times')}} {{buytimes}}</div>
      <div><br/></div>
      <div v-for="(transactor,key) in transactors" key="index">
        <div class="columns is-mobile" style="text-align: center;">
          <div class="column">
            <img :src="transactor.logourl" class="img1" alt="" />
          </div>
          <div class="column">
            <div style="padding-top:25%;">
              {{$t(transactor.name)}}
            </div>
          </div>
          <div class="column">
            <div style="padding-top:25%;">
              {{$t('gloryreward_trade_times_before')}}{{transactor.value}}{{$t('gloryreward_trade_times_after')}}
            </div>
          </div>
          <!-- <div class="column is-one-quarter">
            <div style="padding-top:25%;">
              <a class="button" @click="">{{$t('gloryreward_trade_award_before')}}{{transactor.reward}}{{$t('gloryreward_trade_award_after')}}</a>
            </div>
          </div> -->
        </div>
      </div><!-- for -->
    </div>

    <div class="sellplane" v-if="page == 1">
      <div>
        <div v-for="(rank, index) in mineranks" :key="index">
          <div class="selltext t2" :style="{'top': gettop(index)}">
            <img alt="" width="30px" :srcset="rank.logourl"/>
            {{rank.name}}
          </div>
          <div class="selltext t3" :style="{'top': gettop(index)}">{{$t(rank.level)}}</div>
          <div class="selltext t4" :style="{'top': gettop(index)}">{{rank.buyamount}}</div>
        </div>
        <img src="../../static/pic/衔级奖励页面排名图.png" class="sellpic" alt="" />
      </div>
    </div>

    <div class="sellplane" v-if="page == 2">
      <div>
        <div v-for="(rank, index) in buyranks" :key="index">
          <div class="selltext t2" :style="{'top': gettop(index)}">
            <img alt="" width="30px" :srcset="rank.logourl"/>
            {{rank.name}}
          </div>
          <div class="selltext t3" :style="{'top': gettop(index)}">{{$t(rank.level)}}</div>
          <div class="selltext t4" :style="{'top': gettop(index)}">{{rank.buyamount}}</div>
        </div>
        <img src="../../static/pic/衔级奖励页面排名图.png" class="sellpic" alt="" />
      </div>
    </div>

    <!-- <div>
      <br/>
      {{$t('gloryreward_rule')}}<br/>
      {{$t('gloryreward_rule_1')}}<br/>
      <br/>
    </div> -->

    <div v-if="page == 1" style="text-align:center">
      <a class="button" @click="gotopage(2)">{{$t('gloryreward_nextpage')}}</a>
    </div>
    <div v-if="page == 2" style="text-align:center">
      <a class="button" @click="gotopage(1)">{{$t('gloryreward_prevpage')}}</a>
    </div>

    <div><br/></div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'vuex';
const allranks = require("../assets/playerrank.json");
const allminers = require("../assets/miners.json");
const alltransactors = require("../assets/transactors.json")

export default {
  name: 'gloryreward',
  data () {
    return {
      page: 1,
      minelevel: '',
      minetimes: 0,
      buylevel: '',
      buytimes: 0,
      mineranks: [],
      buyranks: [],
      miners: allminers,
      transactors: alltransactors,
    }
  },
  created: function(){
    this.page = this.$route.params.page;
    this.minelevel = this.$t('gloryreward_grassroots');
    this.buylevel = this.$t('gloryreward_second_lieutenant');
  },
  computed: {
    ...mapState(['scatterAccount']),
  },
  methods:{
    gotopage: function(page){
      console.log(this);
      this.$router.push({ path: `/gloryreward/${page}`});
    },
    gettop: function(index){
      return (156 + index*30)+"px";
    },
    minetimetolevel: function(input){
      for(const level in allminers){
        if (input < allminers[level].value){
          if(level == 0){
            return " ";
          }else{
            return allminers[level-1].name;
          }
        } 
      }
    },
    buytimetolevel: function(input){
      for(const level in alltransactors){
        if (input < alltransactors[level].value){
          if(level == 0){
            return " ";
          }else{
            return alltransactors[level-1].name;
          }
        }
      }
    },
  },
  async mounted(){
    console.log(this);
    console.log(this.scatterAccount);
    if(this.scatterAccount){
      console.log("getting mine times.." + this.scatterAccount.name)
      const body = (await axios.get(
          `http://52.231.196.144:8989/api/getplayer/${this.scatterAccount.name}`
        )).data.result;
      console.log(body);
      this.minetimes = body.minetimes;
      this.minelevel = this.minetimetolevel(this.minetimes);
      this.buytimes = body.buytimes;
      this.buylevel = this.buytimetolevel(this.buytimes);
    }
    console.log("getting mine ranks..")
    const mineranks = (await axios.get(
          `http://52.231.196.144:8989/api/getplayermineorder`
        )).data.result;
    console.log(mineranks);
    for(const index in mineranks){
      const rank = mineranks[index];
      if(rank.owner == "") continue;
      this.mineranks.push({
        name: rank.owner,
        buyamount: rank.minetimes,
        level: this.minetimetolevel(rank.minetimes),
      });
      if (index>=9) break;
    }
    console.log("getting buy times..")
    const buyranks = (await axios.get(
          `http://52.231.196.144:8989/api/getplayerbuyorder`
        )).data.result;
    console.log(buyranks);
    for(const index in buyranks){
      const rank = buyranks[index];
      if(rank.owner == "") continue;
      this.buyranks.push({
        name: rank.owner,
        buyamount: rank.buytimes,
        level: this.buytimetolevel(rank.buytimes),
      });
      if (index>=9) break;
    }
  }
}
</script>

<style scoped>
.titletext{
  text-align:center;
  font-weight:bold;
  font-size:30px
}
/* sellbuy */
  .sellplane{
      position: relative;/*相对定位*/
      width: 50%;
      margin-left: 25%;
  }
  /*图片部分的设置*/
  .sellpic{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 500px;
  }
  /*文字的设置*/
  .selltext{
      position: absolute;/*绝对定位*/
      width: 100%;
      font-size: 18px;
  }
  .t2{
      left: 17%;/*离左边0像素*/
  }
  .t3{
      left: 52%;/*离左边0像素*/
  }
  .t4{
      left: 75%;/*离左边0像素*/
  }
</style>
