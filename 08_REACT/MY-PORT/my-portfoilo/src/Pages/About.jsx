import React from 'react'

function About() {
  return (
    <div>
        <h2 className=' fw-bolder text-center p-3 m-3'>About Me 🙋‍♂️</h2><br />
        <div className="row d-flex justify-content-around">
        <div className="col-4 p-2 m-5 ">
                <img src="https://static-00.iconduck.com/assets.00/web-developer-illustration-2048x1490-saofs07x.png" width={'500'} alt="" />
            </div>
            <div className="col-5 p-2 m-5">
                <h3>Akhil M G</h3><br />
                <p style={{textAlign:'justify'}}>
                I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature, I like people. And, I like to laugh.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default About