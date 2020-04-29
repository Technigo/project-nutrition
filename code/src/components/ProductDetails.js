import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import PieChart from 'react-minimal-pie-chart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchAndStore } from '../reducers/nutrition'
import { Loader } from './Loader'

export const ProductDetails = () => {

    const [showIngredients, setShowIngredients] = useState(false)
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const selectedItem = useSelector((state) => state.nutrition.productDetails[params.product])

    const Container = styled.div`
      background-color: papayawhip;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 95vh;
      align-items: center;
      @media (min-width: 660px) {
          flex-direction: row;
          justify-content: space-around;
          padding: 30px;
      }
    `
    const Header = styled.div`
      width: 100%;
      background: #146381;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 40px 20px;;
      height: 5vh;
      font-size: 24px;
`
    const BackButton = styled.button`
      color: white;  
      background-color: transparent;
      font-size: 20px;
      border: none;
      margin-right: 8px;
    `

    const PieChartContainer = styled.div`
      width: 60%;
      margin: 20px;
      @media (min-width: 660px) {
          width: 40%;
      }
    `

    const PieChartDetails = styled.div`
      display: flex;
      align-items: center;
      width: 90%;
      flex-wrap: wrap;
      justify-content: center;
      @media (min-width: 660px) {
          width: 30%;
          flex-direction: column;
          align-items: flex-start;
      }
    `

    const PieChartItem = styled.div`
      display: flex;
      align-items: center;
    `

    const PieChartSwatch = styled.div`
      width: 30px;
      height: 30px;
      background-color: ${props => props.color};
      margin: 0 5px 5px 5px;
    `

    const PieChartLabel = styled.p`
      font-size: 16px;
    `

    const IngredientsButton = styled.button`
      background: transparent;
      border: none;
      font-size: 18px;
    `

    useEffect(() => {

        if (selectedItem) {
            return;
        } else {
            dispatch(fetchAndStore(params.product))
        }
    }, [])


    return (
        <section>
            {!selectedItem && <Loader />}
            {selectedItem &&
                <>
                    <Header>
                        <BackButton onClick={() => history.push('/')}><FontAwesomeIcon icon={faChevronCircleLeft} /></BackButton>
                        <p>{selectedItem.product.product_name}</p>
                    </Header>
                    <Container>
                        <PieChartContainer>
                            <PieChart
                                totalValue={selectedItem.product.nutriments.carbohydrates + selectedItem.product.nutriments.fat + selectedItem.product.nutriments.salt + selectedItem.product.nutriments.proteins + selectedItem.product.nutriments.fiber}
                                startAngle={0}
                                animate={true}
                                data={[
                                    { title: 'Fat', value: selectedItem.product.nutriments.fat ? selectedItem.product.nutriments.fat : 0, color: '#692236' },
                                    { title: 'Protein', value: selectedItem.product.nutriments.proteins ? selectedItem.product.nutriments.proteins : 0, color: '#e18634' },
                                    { title: 'Carbs', value: selectedItem.product.nutriments.carbohydrates ? selectedItem.product.nutriments.carbohydrates : 0, color: '#be3d3b' },
                                    { title: 'Salt', value: selectedItem.product.nutriments.salt ? selectedItem.product.nutriments.salt : 0, color: '#470202' },
                                    { title: 'Fibre', value: selectedItem.product.nutriments.fiber ? selectedItem.product.nutriments.fiber : 0, color: '#9e5414' }
                                ]} />
                        </PieChartContainer>
                        <PieChartDetails>
                            <PieChartItem>
                                <PieChartSwatch color="#692236" />
                                <PieChartLabel>= fat</PieChartLabel>
                            </PieChartItem>
                            <PieChartItem>
                                <PieChartSwatch color="#e18634" />
                                <PieChartLabel>= protein</PieChartLabel>
                            </PieChartItem>
                            <PieChartItem>
                                <PieChartSwatch color="#be3d3b" />
                                <PieChartLabel>= carbohydrates</PieChartLabel>
                            </PieChartItem>
                            <PieChartItem>
                                <PieChartSwatch color="#470202" />
                                <PieChartLabel>= salt</PieChartLabel>
                            </PieChartItem>

                            <PieChartItem>
                                <PieChartSwatch color="#9e5414" />
                                <PieChartLabel>= fibre</PieChartLabel>
                            </PieChartItem>
                        </PieChartDetails>

                        {selectedItem.product.ingredients_original_tags && <ul>
                            <IngredientsButton onClick={() => setShowIngredients(!showIngredients)}>{showIngredients ? "Hide ingredients" : "Show Ingredients"}</IngredientsButton>
                            {showIngredients && selectedItem.product.ingredients_original_tags.map((x) => {
                                if (x.charAt(0) === 'e') {
                                    return <li>{x.substr(3, 50)}</li>
                                }
                            })}
                        </ul>}
                    </Container>
                </>
            }
        </section >
    )

}