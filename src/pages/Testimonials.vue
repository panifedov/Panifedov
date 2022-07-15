<template>
  <div class="content-container-testimonials">
      <div class="content-title">
         TESTIMONIALS
      </div>
      <div class="testimonials">
         <div class="testimonials-comment" v-for="post in posts" 
         :key="post">
            <img :src="require('../assets/image' + post.image)" 
             class="testimonials-icon">
            <div class="testimonials-text">
               {{post.text}}
            </div>
            <hr>
         </div>
      </div>
  </div>
</template>

<script>
export default {
   name: "TestimonialsVue",
  data() {
    return {

      posts: [
        {
          image: "1.jpg",
          text: `111t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`
        },
        {
          image: "2.jpg",
          text: `322t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`
        },
        {
          image: "1.jpg",
          text: `222t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`
        },
        {
          image: "2.jpg",
          text: `123t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.t was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`
        }
      ]
    };
  }
};
</script>

<style scoped>
.content-container-testimonials {
  width: 100%;
  margin: auto;

}
.testimonials {
   margin-left: 5%;
   margin-top: 3%;
   height: 1326.94px;
   width: 1455px;
}
.testimonials hr {
text-align: center;
}
.testimonials-comment{
   display: flex;
   flex-direction: initial;

}

.testimonials-icon  {
   display: flex;
   width: 200px;
   height: 200px;
   left: 79px;
   top: 377px;
   border-radius: 50%;
}
.testimonials-text {
   display: flex;
   margin-top: 2%;
   margin-bottom: 3%;
   margin-left: 2%   ;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 29px;
   
   color: #000000;
}
</style>

