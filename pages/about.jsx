import Link from 'next/link'
import Image from 'next/image'
import react, {useState} from 'react'
import Router from 'next/router'
import Instgram from '@/styles/icon/fontawesome/svgs/brands/instagram-square.svg'
import Github from '@/styles/icon/fontawesome/svgs/brands/github-square.svg'
import Linkedin from '@/styles/icon/fontawesome/svgs/brands/linkedin.svg'
import style from '@/styles/pages/About.module.css'

export default function about() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleVisit = async (e) => {
		e.preventDefault();

		const response = await fetch('/api/signup', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ username, password, email }),
		});

		if (response.ok) {
		  alert(`Welcome, to my website!`);
		  Router.push('/login');
		} else {
		  alert('Login failed. Please check your credentials.');
		}
	}
  return(
    <>
    <main className={style.main}>
	<div class="container col-xxl-8 px-4 py-5">
			<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
			  <div class="col-10 col-sm-8 col-lg-6">
				<img src="/img1.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
			  </div>
			  <div class="col-lg-6">
				<h1 class="display-5 fw-bold lh-1 mb-3">Design Your Website</h1>
				<p class="lead">Design Awesome Website using Css tools for free. Quickly design and customize responsive website with CSSTOOLS.</p>
			  </div>
			</div>
		  </div>
			  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Features</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <h2><i className="fa fa-clock"></i><br/>Time Saving</h2>
        <p>We understand the importance of efficiency in web development. Our tools are 
		designed to save you time and effort, so you can focus on the big picture.</p>
      </div>
      <div class="feature col">
        <h2><i className="fa fa-handshake"></i><br/>User Friendly</h2>
        <p>Our user-friendly interface ensures that even beginners can navigate and use
		our tools with ease. No coding experience required!</p>
      </div>
      <div class="feature col">
        <h2><i className="fa fa-box-open"></i><br/>Open Source</h2>
        <p>We understand the required money for website design Our tools are 
		free and open soucres. No required any money.</p>
      </div>
    </div>
  </div>
	  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Developers</h2>
		<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/top_img.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Sanskar Bandgar</h5>
        <p class="card-text">He is beginner Web developer with HTML,CSS,<br/>Javascript,Bootstrap,Next.JS and Recat.JS. </p>
		<div class="logo d-flex align-items-center justify-content-md-center">
			<Link href="/"><Image src={Instgram} width={30} height={30}/></Link>
			<Link href="/"><Image src={Github} width={30} height={30}/></Link>
			<Link href="/"><Image src={Linkedin} width={30} height={30}/></Link>
		</div>
      </div>
    </div>
  </div>
</div>
</div>

	  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Frequency asked question</h2>
 <div class="bd-example col-md-12">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                This website is free or paid?
              </button>
            </h4>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
			  This website is fully <strong>free to use.</strong>No need to purchase 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h4>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h4>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        </div>
		</div>
    </main>
    </>
  )
}
