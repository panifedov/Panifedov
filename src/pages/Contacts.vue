<template>
  <div>
    <div class="content-title">Contacts</div>
    <div class="adress">
      <h3>
        You can easily find all sorts of our finest crap, shit and poop by
        adress below. Our sells office is a natural peace of shit! Enjoy<br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h3>
    </div>
    <div class="map">
      <gmap-map
       :center='center'

       :zoom='12'
        style="width: 100%; height: 350px; border: 4px solid black"
      >
      </gmap-map>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactsPage",
  data() {
    return {

      center: { lat: 45.508, lng: -73.587 },

      }

   },
};
</script>