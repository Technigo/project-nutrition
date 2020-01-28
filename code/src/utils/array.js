export const getVeganPercentage = data => {
  const count = data.product.ingredients.reduce((acc, ingredient) => {
    if (ingredient.vegan) {
      return acc + 1;
    }
    return acc;
  }, 0);

  if (count === 0) return count;
  const percentage = (count / data.product.ingredients.length) * 100;
  const rounded = Math.round(percentage * 10) / 10;

  return rounded;
};

export const getNotVegan = data => {
  return data.product.ingredients.some(ingredient => ingredient.vegan && ingredient.vegan === "no");
};
