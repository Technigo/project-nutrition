import React from "react";
import styled from 'styled-components/macro'

const ProductInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #fafafa;

  @media (min-width: 768px) {
    height: 130vh;
  }
`

const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);
  box-sizing: border-box;
  border-radius: 4px;
  width: 90vw;
  margin: 20px 0px;
  background: #fff;

  @media (min-width: 768px) {
      width: 50vw;
  }
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

export const ProductCard = (props) => {
    return (
        <ProductInfo>
            <Card>
                <ProductImage src={props.product.image_url} alt={props.product.product_name} />
                <Content>
                    <ProductTitle>{props.product.product_name} {props.product.product_name && props.product.brands ? `- ${props.product.brands}` : `${props.product.brands}`}</ProductTitle>
                    <SecondaryText>Barcode: {props.code}</SecondaryText>
                </Content>
                {(props.product.ingredients_text || props.product.allergens || props.product.nova_groups || props.product.nutrition_grades) && (
                    <SupportingText>
                        {props.product.ingredients_text && (
                            <>
                                <SupportingTextTitle>Ingredients list:</SupportingTextTitle>
                                <IngredientsList>{props.product.ingredients_text.replace(/([[]+|[\]]+|(_)+)/gi, '')}</IngredientsList>
                            </>
                        )}
                        {props.product.allergens && (
                            <>
                                <SupportingTextTitle>Allergens:</SupportingTextTitle>
                                <IngredientsList>{props.product.allergens.replace(/(en:)+|(sv:)+/gi, ' ')}</IngredientsList>
                            </>
                        )}
                        {props.product.nova_groups && (<a href="https://world.openfoodfacts.org/nova"><img src={`https://static.openfoodfacts.org/images/misc/nova-group-${props.product.nova_groups}.svg`} alt="Nova Group classification" /></a>)}
                        {props.product.nutrition_grades && (<a href="https://world.openfoodfacts.org/nutriscore"><img src={`https://static.openfoodfacts.org/images/misc/nutriscore-${props.product.nutrition_grades}.svg`} alt="Nutrition Score" /></a>)}
                    </SupportingText>
                )}
            </Card>
        </ProductInfo>
    )
}