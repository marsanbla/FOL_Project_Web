<template>
        <div class="test">

        <div class="text-center">
            <button class="primary" @click="currentPage = currentPage > 1 ? currentPage - 1 : 1">Prev</button>
              <div>{{ currentPage }} / {{ pages }}</div>
            <button class="primary" @click="currentPage = currentPage < pages ? currentPage + 1 : pages">Next</button>
          </div>
          <div class="text-center">
            <VuePDF :pdf="pdf" :page="currentPage" />
          </div>

        </div>
    
</template>
<script>
/*import { usePDF, VuePDF } from "@tato30/vue-pdf";

export default {
  components: {
    VuePDF,
  },
  setup() {
    const currentPage = ref(1);
    const { pdf, pages } = usePDF("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf");
        return {
      pdf,
      pages,
      currentPage
    };
  },
};*/
</script>
<style>
.test{
margin-top: 200px;
}
</style>