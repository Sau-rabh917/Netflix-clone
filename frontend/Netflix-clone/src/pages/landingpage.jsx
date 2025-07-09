
import { Link } from 'react-router-dom'

const landingpage = () => {
  return (
    <>
      <div>
        <div>
            <div>
                <Link to="/signin" className="text-white text-2xl font-bold"><button>signin</button></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default landingpage
