import React, { useEffect, useState } from 'react'
import { Card, CircularProgress } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight, StarRounded } from '@material-ui/icons'
import HotelRoom from '../../image/dubai-suites-02-edit.webp'

const ListMap = (props) => {  //we can pass props as parameter else directly pass element name passes from parent component inside {} like - {hotelArray}
    const [hotelList, sethotelList] = useState([])
    const [startIndex, setstartIndex] = useState(0)
    const itemsPerPage = 10
    const [slicedList, setslicedList] = useState()
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

    useEffect(() => {
        var dataList = props.hotelArray.HotelList
        setTimeout(() => { //setting timeOut to show loader
            sethotelList(dataList)
        }, 3000);
    }, [props])

    const fetchHotelData = (startIdx) => {
        setstartIndex(startIdx) //update state for new callback reference
        const visibleData = hotelList?.length > 0 && hotelList.slice(startIdx, startIdx + itemsPerPage)
        setslicedList(visibleData)
    }

    useEffect(() => {
        fetchHotelData(startIndex)
    }, [hotelList])  //call fetchHotelData function once hotelList state get updated



    return (<>
        {slicedList?.length > 0 ? <>
            {slicedList.map((object, index) => {
                const starcount = parseInt(object.PropertyRating)
                const icons = Array.from({ length: starcount }, (_, index) => index);
                return (<Card className='my-3 p-2' key={object.HotelId + index}>
                    <div className="row">
                        <div className="col-sm-3">
                            <img className='img-thumbnail' src={HotelRoom} alt='no imge' />
                        </div>
                        <div className="col-sm-7">
                            <h5>{object.HotelName}</h5>
                            <div>
                                {icons.map((_, index) => (
                                    <StarRounded className='star-color' key={index} />
                                ))}
                            </div>
                            <h6>{object.Address}</h6>
                            <h6>{object.ShortDescription}</h6>
                        </div>
                        <div className="col-sm-2 d-flex flex-column justify-content-between">
                            <div>
                                {!isMobile ? <>
                                    <h6 style={{ color: 'gray' }}>From</h6>
                                    <h5>{object.DisplayCurrencyCode} {object.TotalCharges}</h5>
                                </> : <div className="d-flex justify-content-between">
                                    <h6 style={{ color: 'gray' }}>From</h6>
                                    <h5>{object.DisplayCurrencyCode} {parseFloat(object.TotalCharges).toFixed(2)}</h5>
                                </div>}
                            </div>
                            <button className='check-room-button'>Choose Room</button>
                        </div>
                    </div>
                </Card>)
            })}

            <div className="button-container">
                <button className={`${startIndex === 0 ? 'pagination-disable-button' : 'pagination-button'}`} style={{ marginRight: '7px' }} onClick={() => fetchHotelData(startIndex - itemsPerPage)} disabled={startIndex === 0} >
                    <KeyboardArrowLeft /> Previous
                </button>
                <button className={`${startIndex + itemsPerPage >= hotelList.length ? 'pagination-disable-button' : 'pagination-button'}`} onClick={() => fetchHotelData(startIndex + itemsPerPage)} disabled={startIndex + itemsPerPage >= hotelList.length} >
                    Next <KeyboardArrowRight />
                </button>
            </div>
        </> : <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <CircularProgress />
        </div> }
    </>)
}

export default ListMap