import { useCallback, useState } from "react"
import { useSelector } from 'react-redux'
import { makePrice } from "../Helper/helpFunction"

const useDetailProduct = () => {
    const settingPrice = useSelector(state => state?.settingPrice)
    const userInfo = useSelector(state => state.userInfo);

    const fetchPrice = useCallback((DetailProduct, TypeProduct, DatePickerProduct = {}) => {
        const dataPrice = {}
        const price = DetailProduct?.price?.price?.priceText
        if (price) {
            if (price.indexOf('-') > -1) {
                const splitPrice = price.split('-')
                const priceFirst = makePrice(settingPrice, splitPrice[0], userInfo)
                const priceEnd = makePrice(settingPrice, splitPrice[1], userInfo)
                dataPrice['price'] = priceFirst + '-' + priceEnd
            } else {
                dataPrice['price'] = makePrice(settingPrice, price)
            }
        }

        
        let extraPrices = DetailProduct?.price?.extraPrices?.[0]?.priceText
        if(!extraPrices) {
            extraPrices = DetailProduct?.price?.transmitPrice?.priceText
        }
        if (extraPrices) {
            if (extraPrices.indexOf('-') > -1) {
                const splitExtraPrice = extraPrices.split('-')
                const priceExtraFirst = makePrice(settingPrice, splitExtraPrice[0], userInfo)
                const priceExtraEnd = makePrice(settingPrice, splitExtraPrice[1], userInfo)
                dataPrice['price_extra'] = priceExtraFirst + '-' + priceExtraEnd
            } else {
                dataPrice['price_extra'] = makePrice(settingPrice, extraPrices, userInfo)
            }
        }

        let propPath = fetchPropPath(DetailProduct)
        const skusList = fetchSkuCore(DetailProduct)

        if (DatePickerProduct && Object.values(DatePickerProduct).length > 0 && Object.values(DatePickerProduct).length === TypeProduct?.validateOptionTotal) {
            let mapKeyPropPath = ''
            Object.values(DatePickerProduct).map((item, key) => {
                mapKeyPropPath += `${item.pid}:${item?.item?.vid}`
                if (key !== Object.values(DatePickerProduct).length - 1) {
                    mapKeyPropPath += ';'
                }
            })

            const getSkuId = propPath[mapKeyPropPath].skuId;
            dataPrice['quantity'] = skusList?.[getSkuId]?.quantity;
            dataPrice['price'] = makePrice(settingPrice, skusList?.[getSkuId]?.price?.priceText, userInfo);
        } else {
            dataPrice['quantity'] = skusList?.[0]?.quantity;
        }

        return dataPrice
    }, [settingPrice])

    const fetchSkuBase = useCallback((DetailProduct) => {
        const skuBase = DetailProduct?.skuBase || {}
        return skuBase
    }, [])

    const fetchPropPath = useCallback((DetailProduct) => {
        const sizeDetail = DetailProduct?.skuBase?.skus;
        const listPropPath = {}
        if (sizeDetail) {
            sizeDetail.map((item, key) => {
                listPropPath[item?.propPath] = item
            })
        }
        return listPropPath;
    }, [])

    const fetchSkuCore = useCallback((DetailProduct) => {
        const skuCore = DetailProduct?.skuCore?.sku2info;
        return skuCore
    }, [])

    const fetchBasicGroupProp = useCallback((DetailProduct) => {
        const BasicGroupProp = DetailProduct?.props?.groupProps?.[0]?.basicGroupProp;
        return BasicGroupProp
    }, [])

    const fetchListTextDetail = useCallback((DetailProduct) => {
        const skuBase = fetchSkuBase(DetailProduct)

        const title = DetailProduct?.item?.title
        const listText = []
        listText.push(`111111-----${title}`)

        if (skuBase && skuBase?.props && skuBase?.props.length > 0) {
            skuBase?.props.map((item) => {
                listText.push(`${item?.pid}-----${item?.name}`)
                if (item?.values && item?.values.length > 0) {
                    item.values.map((item2) => {
                        listText.push(`${item2?.vid}-----${item2?.name}`)
                    })
                }
            })
        }

        const basisGroupProp = fetchBasicGroupProp(DetailProduct)
        if (basisGroupProp) {
            basisGroupProp.map((item, key) => {
                listText.push(`itemProfileProduct${key}${key}-----${Object.keys(item)[0]}`)
                listText.push(`itemProfileProduct${key}${key + 1}-----${Object.values(item)[0]}`)
            })
        }

        return listText
    })

    return { fetchPrice, fetchSkuCore, fetchPropPath, fetchListTextDetail, fetchBasicGroupProp, fetchSkuBase }
}

export default useDetailProduct