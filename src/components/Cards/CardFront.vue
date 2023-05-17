<script setup>
import CardTop from '../cardComponents/CardTop.vue';
import CardFrontImages from '../cardComponents/CardFrontImages.vue';
import CardEvs from '../cardComponents/CardEvs.vue';
import CardMoves from '../cardComponents/CardMoves.vue';
</script>

<template>
  <div class="col-xs-2 card front align-items-center card-body">
    <!-- Div for the images -->
    <CardFrontImages />
    <!-- Data about the pokemon, name, move, stats etc -->
    <CardTop />
    <span class="border border-info-subtle border-3 mx-2 rounded">
      <!-- EVs, to be input iteratively -->
      <CardEvs />
      <!-- Moves, as well to be input iteratively -->
      <CardMoves />
    </span>


  </div>
</template>

<style lang="scss">
.card {
  border: 5px solid rgb(163, 163, 0);
  border-radius: 10px;
  background: rgba(155, 162, 187, .5);
  box-shadow: 3px 3px 2px rgba(0, 0, 0, .3);

  flex-basis: calc(100% / 6);


  @media(min-width: var(--small-bp)) {
    flex-basis: calc(100%/3);
    flex-wrap: wrap;
  }
}

.front {
  height: 100%;
  display: flex;
  align-items: center;

}
</style>