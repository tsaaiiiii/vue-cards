<template>
  <ul class="ticketCard-area">
    <li class="ticketCard" v-for="item in data" :key="item">
      <div class="ticketCard-img">
        <a href="#">
          <img :src="item.imgUrl" alt="" />
        </a>
        <div class="ticketCard-region">{{ item.area }}</div>
        <div class="ticketCard-rank">{{ item.rate }}</div>
      </div>
      <div class="ticketCard-content">
        <div>
          <h3>
            <a href="#" class="ticketCard-name">{{ item.name }}</a>
          </h3>
          <p class="ticketCard-description">{{ item.description }}</p>
        </div>
        <div class="ticketCard-info">
          <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num"> {{ item.group }} </span> 組
          </p>
          <p class="ticketCard-price">
            TWD <span id="ticketCard-price">${{ item.price }}</span>
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: []
    }
  },
  methods: {
    init() {
      axios
        .get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
        .then((response) => {
          console.log(response.data.data)
          this.data = response.data.data
          console.log(this.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {},
  mounted() {
    this.init()
  }
}
</script>

<style scoped>
.ticketCard-area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  list-style: none;
}

.ticketCard {
  width: 31.3333%;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-bottom: 38px;
  margin-right: 2%;
  margin-top: 100px;
}

@media (max-width: 768px) {
  .ticketCard {
    width: 46%;
    margin: 0 2% 40px;
    margin-top: 80px;
  }
}

@media (max-width: 576px) {
  .ticketCard {
    width: 90%;
    margin: 0 5% 30px;
    margin-top: 50px;
  }
}

.ticketCard-img {
  position: relative;
}

.ticketCard-img a {
  display: block;
  overflow: hidden;
}

.ticketCard-img img {
  width: 100%;
  height: 180px;
  -o-object-fit: cover;
  object-fit: cover;
}

.ticketCard-img img:hover {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
}

.ticketCard-region,
.ticketCard-rank {
  position: absolute;
  border-radius: 0 5px 5px 0px;
  color: #fff;
  text-align: center;
}

.ticketCard-region {
  top: -13px;
  left: 0;
  font-size: 1.25rem;
  background-color: #64c3bf;
  padding: 12px 20px;
}

.ticketCard-rank {
  bottom: -16px;
  left: 0;
  background-color: #00807e;
  padding: 5px 8px;
  min-width: 40px;
}

.ticketCard-content {
  padding: 20px;
  height: calc(100% - 180px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ticketCard-name {
  display: block;
  text-decoration: none;
  color: #00807e;
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 2px solid #00807e;
  margin-bottom: 20px;
}

.ticketCard-name:hover {
  color: #64c3bf;
}

.ticketCard-description {
  color: #818a91;
  margin-bottom: 32px;
}

.ticketCard-info {
  color: #00807e;
  font-family: 'Roboto', sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ticketCard-num {
  font-weight: bold;
}

.ticketCard-price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.ticketCard-price span {
  font-size: 2rem;
}
</style>
