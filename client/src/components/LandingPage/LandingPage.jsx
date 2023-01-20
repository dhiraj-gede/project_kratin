import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
        
      Landing Page
      <div className="btn">

        <Link to='/login'>
            <button>
                Login
            </button>
        </Link>
        <Link to='/register'>
            <button>
                Register
            </button>
        </Link>
        </div>

    </div>
  )
}

export default LandingPage
