import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { ProductHeader } from "./ProductHeader";
import { NotFound } from "./NotFound";

import styled from "styled-components";

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.ul`
  list-style-type: circle;
  list-style-position: outside;
  list-style-image: none;
  margin-left: 2rem;
`;

const Paragraph = styled.p`
  background: #f8c3af;

  margin: 0.5rem;
  padding: 0.5rem;
`;

export const Product = () => {
  const scan = useSelector(state => state.products.product);

  if (!scan) return null;

  console.log("SCAN", scan);

  const formattedCategories =
    scan.product &&
    scan.product.categories_tags.map(cat =>
      cat.replace("en:", "").replace(/-/gi, " ")
    );

  const formattedAllergens =
    scan.product &&
    scan.product.allergens_tags.map(allergen =>
      allergen.replace("en:", "").replace(/-/gi, " ")
    );

  const formattedIngredients =
    scan.product &&
    scan.product.ingredients_hierarchy.map(ingredient =>
      ingredient.replace("en:", "").replace(/-/gi, " ")
    );
  /*
  replace can be used with string or regular expression. When used with a string, as in the first example -> .replace('en:', '') it will replace the first time this string occurs. Also since we're mapping through an array this will happen for each item in the array.
  If the replace method is used with a regex (regular expression) like in the second example -> it will replace all the '-'with a ' ' (space) not only the first time for each item in the array. 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  */

  return (
    <>
      {scan.product && scan.status === 1 && (
        <Section>
          <ProductHeader />

          <Card
            image={scan.product.image_url}
            title={scan.product.product_name}
            secondaryText={
              scan.product.brands === undefined
                ? null
                : `PRODUCED BY: ${scan.product.brands}`
            }
          >
            {" "}
            {formattedIngredients.length === 0 ? null : <h3>INGREDIENTS:</h3>}
            <List>
              {formattedIngredients.length === 0
                ? null
                : formattedIngredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
            </List>
            {formattedAllergens.length === 0 ? null : <h3>ALLERGENS:</h3>}
            <List>
              {formattedAllergens.length === 0
                ? null
                : formattedAllergens.map((all, index) => (
                    <li key={index}>{all}</li>
                  ))}
            </List>
            {formattedCategories.length === 0 ? null : <h3>CATEGORIES:</h3>}
            <List>
              {formattedCategories.length === 0
                ? null
                : formattedCategories.map((cat, index) => (
                    <li key={index}>{cat}</li>
                  ))}
            </List>
            {scan.product._keywords.length === 0 ? null : <h3>KEYWORDS:</h3>}
            <Keywords>
              {scan.product._keywords.length === 0
                ? null
                : scan.product._keywords.map((key, index) => (
                    <Paragraph key={index}>{key}</Paragraph>
                  ))}
            </Keywords>
          </Card>
        </Section>
      )}
      {scan.status === 0 && <NotFound />}
    </>
  );
};
