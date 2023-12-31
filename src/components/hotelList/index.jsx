import ListMap from './listmap'
import HotelListJson from '../listing.json'

const HotelListing = () => {
  
  return (<>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-sm-12">
          <ListMap hotelArray={HotelListJson} />
        </div>
      </div>
    </div>
  </>)
}

export default HotelListing