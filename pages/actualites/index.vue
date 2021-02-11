<script>
export default {
  middleware({ redirect }) {
    return redirect("301", "/actualites/page/1");
  },
};
</script>
