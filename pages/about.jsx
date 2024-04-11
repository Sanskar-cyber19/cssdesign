import Link from 'next/link'
import Image from 'next/image'
import react, {useState} from 'react'
import Router from 'next/router'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
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
			<Link href="/"><FaGithubSquare size="2em" /></Link>
				<Link href="/"><FaLinkedin size="2em" /></Link>
				<Link href="/"><FaInstagramSquare size="2em" /></Link>
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
