import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components/macro'

const ProductInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: lightgray;
`

const ProductCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);
  box-sizing: border-box;
  border-radius: 4px;
  width: 344px;
  margin: 20px 0px;
  background: #fff;
`

const ProductImage = styled.img`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`

const Content = styled.div`
  padding: 16px 16px 0px 16px;
`

const ProductTitle = styled.div`
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 500;
`

const SecondaryText = styled.div`
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: 400;
  opacity: 0.6;
`

const SupportingText = styled.div`
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: .0178571429em;
  opacity: .6;
  padding: 16px;
`

const SupportingTextTitle = styled.p`
  font-weight: 500;
  margin: 0;
`

const IngredientsList = styled.p`
  margin: 0px 0px 10px 0px;
`

export const Product = () => {
  const scan = useSelector(state => state.products.product);
  const showScanner = useSelector(state => state.ui.showScanner);

  if (!scan) return null;

  console.log(scan)

  return (

    <>
      {!showScanner && (scan.product && scan.status) === 1 && (
        <ProductInfo>
          <ProductCard>
            <ProductImage src={scan.product.image_url} alt={scan.product.product_name} />
            <Content>
              <ProductTitle>{scan.product.product_name} {scan.product.product_name && scan.product.brands ? `- ${scan.product.brands}` : `${scan.product.brands}`}</ProductTitle>
              <SecondaryText>Barcode: {scan.code}</SecondaryText>
            </Content>
            {(scan.product.ingredients_text || scan.product.allergens || scan.product.nova_groups || scan.product.nutrition_grades) && (
              <SupportingText>
                {scan.product.ingredients_text && (
                  <>
                    <SupportingTextTitle>Ingredients list:</SupportingTextTitle>
                    <IngredientsList>{scan.product.ingredients_text.replace(/([\[]+|[\]]+|(\_)+)/gi, '')}</IngredientsList>
                  </>
                )}
                {scan.product.allergens && (
                  <>
                    <SupportingTextTitle>Allergens:</SupportingTextTitle>
                    <IngredientsList>{scan.product.allergens.replace(/en:/gi, ' ')}</IngredientsList>
                  </>
                )}
                {scan.product.nova_groups && (<img src={`https://static.openfoodfacts.org/images/misc/nova-group-${scan.product.nova_groups}.svg`} />)}
                {scan.product.nutrition_grades && (<img src={`https://static.openfoodfacts.org/images/misc/nutriscore-${scan.product.nutrition_grades}.svg`} />)}
              </SupportingText>
            )}
          </ProductCard>
        </ProductInfo>
      )}
      {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
    </>
  );
};
