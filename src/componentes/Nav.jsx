import {} from 'react'
import {Link} from 'react-router-dom'
import '../scss/Nav.scss'

function Nav() {
  

return (
    <>

        <nav className='d-md-flex'>

        

            <Link to="/" className='text-decoration-none text-dark'><h2>Otoko Tekhne Nashi</h2></Link>

            


                <div className='ul'>
                    <ul className='d-md-flex'>
                        <li className='btn btn-secondary '><Link to="/Contextualizacao" className='text-decoration-none text-light'>Contextualização</Link></li>
                        <li className='btn btn-secondary'><Link to="/Problema" className='text-decoration-none text-light'>Problema</Link></li>
                        <li className='btn btn-secondary'><Link to="/Causas" className='text-decoration-none text-light'>Causas</Link></li>
                        <li className='btn btn-secondary'><Link to="/Casos" className='text-decoration-none text-light'>Casos</Link></li>
                        <li className='btn btn-secondary'><Link to="/ProblemaxSolucao" className='text-decoration-none text-light'>Problema x Solucao</Link></li>
                    </ul>
                </div>
            
        

    </nav>
    </>
)
}
  
  export default Nav
  