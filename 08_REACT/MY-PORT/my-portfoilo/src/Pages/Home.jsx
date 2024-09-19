import { Link } from "react-router-dom"



function Home() {
  return (
    <div>
        <h1 className=' fw-bolder text-center p-3 m-3'>Welcome to My Portfolio...🖐 </h1><br />
        <div className="row d-flex justify-content-around p-2 m-5">
            <div className="col-4">
                
                <h3> <span className='text-danger'>H</span> I <span className='text-danger'> <br />I</span>'M <span className='text-danger'>A</span>khil MG</h3>
                <p  >a passionate web developer based in Kochi. 
            With 5 years of experience in the field, I specialize in building responsive, 
            user-friendly websites and applications. My journey began with a fascination for 
            technology and a desire to create intuitive and engaging user experiences.</p>

           
          <p>
            My expertise includes:
            <ul>
              <li>Front-end technologies like HTML, CSS, and JavaScript</li>
              <li>React.js and modern JavaScript frameworks</li>
              <li>Responsive design and cross-browser compatibility</li>
              <li>Version control with Git and GitHub</li>
            </ul>
          </p>
          <p>
            When I'm not coding, you might find me  "exploring new technologies, working on side projects, or enjoying a good book". 
            I am always eager to learn and stay updated with the latest trends in web development.
          </p>
          <p>
            Feel free to reach out to me via the <a href="/contact">Contact</a> page if you'd like to discuss potential collaborations or just chat about web development!
          </p>
<br />
               <Link to={'/about'}> <button type="button" class="btn btn-outline-success">Success</button></Link>
                </div>
                <div className="col-4">
                    <img src="https://www.sogeti.com/globalassets/common/case-studies/case-study-illustrations/case-studies-illustration-digital-services-a.png" width={'500'} alt="" />
                </div>

            
        </div>
        
    </div>
  )
}

export default Home