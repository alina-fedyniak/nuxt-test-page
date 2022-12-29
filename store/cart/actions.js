export default {
  decreaseProductCount(context, productCount) {
    if (productCount === 0) {
      return
    }
    context.commit('setProductCount', --productCount);
  },
  increaseProductCount(context, productCount) {
    context.commit('setProductCount', ++productCount);
  }
}
